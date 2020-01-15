import { Box, Flex, Heading, Text } from "@theme-ui/components"
import React from "react"

const Workout = ({ workout }) => {
  console.log(workout)
  return (
    <Box p={4} bg="highlight">
      <Flex
        sx={{
          alignItems: "center",
        }}
      >
        <Heading>{workout.name}</Heading>
        <Text sx={{ marginBottom: 0, paddingRight: 1 }}>
          {new Date(workout.start_date).toLocaleDateString()}
        </Text>
        {workout.kudos_count > 0 && <Text>{workout.kudos_count}xKudos</Text>}
      </Flex>
    </Box>
  )
}

export default Workout
