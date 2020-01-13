const axios = require("axios")

const getAccessToken = config => {
  return axios
    .post(`https://www.strava.com/oauth/token`, {
      grant_type: "refresh_token",
      refresh_token: config.refresh_token,
      client_id: config.id,
      client_secret: config.secret,
    })
    .catch(err => {
      throw err
    })
}

const strava = require("strava-v3")

const SourceStravaError = require("./error")

const get = ({ args, method: { category, name }, format }) =>
  new Promise((resolve, reject) => {
    strava[category][name](args, (err, payload, limits) => {
      if (
        limits &&
        (limits.shortTermUsage >= limits.shortTermLimit ||
          limits.longTermUsage > limits.longTermLimit)
      ) {
        if (limits.shortTermUsage >= limits.shortTermLimit) {
          return reject(
            new SourceStravaError(
              "SHORT_LIMIT",
              category,
              name,
              "API short term limit reached. Waiting 15 min."
            )
          )
        } else {
          return reject(
            new SourceStravaError(
              "LONG_LIMIT",
              category,
              name,
              "API long term limit reached. Stop."
            )
          )
        }
      } else if (err) {
        return reject(
          new SourceStravaError(
            "error",
            category,
            name,
            `API error: ${err.msg} during strava.${category}.${name}`
          )
        )
      } else if (payload.errors && payload.errors.length > 0) {
        return reject(
          new SourceStravaError(
            "error",
            category,
            name,
            `API error: ${payload.message} during strava.${category}.${name}`
          )
        )
      } else {
        if (format) {
          resolve(format(payload))
        } else {
          resolve(payload)
        }
      }
    })
  })

module.exports = get
