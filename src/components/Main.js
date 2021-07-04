import React from 'react'

function Main() {

  const firstName = "Felipe"
  const lasttName = "Cruz"

  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: 30
  }

  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours < 18) {
    timeOfDay = "afternoon"
    styles.color = "#2E0927"
  } else {
    timeOfDay = "evening"
    styles.color = "#D90000"
  }

    return (
    <div>
      <h1 style={styles}>Good {timeOfDay}</h1>

      <p style={styles}> My name is {`${firstName} ${lasttName}`}</p>
    </div>
    )
}

export default Main
