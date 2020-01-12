import React from "react"

const Workout = ({ workout }) => {
  console.log(workout)
  return (
    <li className="card">
      <h3>{workout.name}</h3>
      <p>{new Date(workout.start_date).toLocaleDateString()}</p>
      {workout.kudos_count > 0 && <p>{workout.kudos_count}x</p>}
    </li>
  )
}

export default Workout
