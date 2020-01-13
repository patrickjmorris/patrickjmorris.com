

const processWorkout = (workout, createNodeId, createContentDigest) => {
  return Object.assign({}, workout, {
    id: createNodeId(`strava-${workout.id}`),
    parent: null,
    children: [],
    internal: {
      type: `StravaWorkout`,
      content: JSON.stringify(workout),
      contentDigest: createContentDigest(workout),
    },
  })
}

// exports.sourceNodes = async (
//   { actions, createNodeId, createContentDigest },
//   configOptions
// ) => {
//   const { createNode } = actions
//   const response = await getAccessToken(configOptions)

//   const strava = require("strava")({
//     access_token: response.data.access_token,
//     client_id: configOptions.id,
//     client_secret: configOptions.secret,
//     redirect_uri: configOptions.redirect_uri,
//   })

//   return new Promise((resolve, reject) => {
//     strava.athlete.activities.get((err, res) => {
//       if (err) reject(err)

//       res.forEach(workout => {
//         const nodeData = processWorkout(
//           workout,
//           createNodeId,
//           createContentDigest
//         )
//         createNode(nodeData)
//       })
//       resolve()
//     })
//   })
// }

exports.sourceNodes = async (
  { actions: { createNode } },
  { activitiesOptions, athleteOptions, debug, token }
) => {
  if (!token) {
    throw new Error("source-strava: Missing API token")
  }

  try {
    let heartrateMax
    const activities = await getActivities({
      debug,
      options: {
        ...activitiesOptions,
      },
      token,
    })

    if (activities && activities.length > 0) {
      activities.forEach(activity => {
        if (athleteOptions.computeHeartrateMax && activity.has_heartrate) {
          if (!heartrateMax || activity.max_heartrate > heartrateMax) {
            heartrateMax = activity.max_heartrate
          }
        }

        createNode({
          activity,
          id: `Strava Activity: ${activity.id}`,
          parent: "__SOURCE__",
          children: [],
          internal: {
            type: "StravaActivity",
            contentDigest: crypto
              .createHash("md5")
              .update(JSON.stringify(activity))
              .digest("hex"),
          },
        })
      })
    }

    const athlete = await getAthlete({
      token,
      options: athleteOptions,
    })

    createNode({
      athlete: {
        ...athlete,
        ...(athleteOptions.computeheartrateMax ? { heartrateMax } : {}),
      },
      id: `Strava Athlete: ${athlete.id}`,
      parent: "__SOURCE__",
      children: [],
      internal: {
        type: "StravaAthlete",
        contentDigest: crypto
          .createHash("md5")
          .update(JSON.stringify(athlete))
          .digest("hex"),
      },
    })
  } catch (e) {
    if (debug) {
      // eslint-disable-next-line
      console.error(e)
    }
    throw new Error(`source-strava: ${e.message}`)
  }
}
