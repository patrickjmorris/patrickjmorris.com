import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Workout from "../components/Workout"

// TODO: Separate workouts from runs
// TODO: Add filtering sorting
class RunIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const runs = data.allStravaWorkout.edges
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1>Exercise</h1>
        <ol className="card-list">
          {runs.map(({ node: workout }) => (
            <Workout key={workout.id} workout={workout} />
          ))}
        </ol>
      </Layout>
    )
  }
}

export default RunIndex

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allStravaWorkout {
      edges {
        node {
          id
          name
          distance
          type
          total_photo_count
          total_elevation_gain
          moving_time
          start_date
          elapsed_time
          achievement_count
          kudos_count
          comment_count
          photo_count
          average_speed
          max_speed
          pr_count
          total_elevation_gain
        }
      }
    }
  }
`
