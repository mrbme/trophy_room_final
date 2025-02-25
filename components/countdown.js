import React, { useEffect, useState } from 'react'

const Countdown = () => {
  const calculateTimeLeft = () => {
    const year = new Date().getFullYear()
    const difference = +new Date(`05/20/${year}`) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [year] = useState(new Date().getFullYear())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval, index) => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span key={index}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    )
  })
  return (
    <div className='bg-transparent text-center'>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  )
}

export default Countdown
