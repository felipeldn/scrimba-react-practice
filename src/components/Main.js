import React from 'react'

function Main() {

  const firstName = "Felipe"
  const lasttName = "Cruz"

  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }

    return (
    <div>
      <h1>Good {timeOfDay}</h1>

      <p>My name is {`${firstName} ${lasttName}`}</p>
    </div>
    )
}

export default Main
