import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Odometer = dynamic(import('react-odometerjs'), {
  ssr: false,
  loading: () => 0
})

const Od = () => {
  const [odometerValue, setOdometerValue] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setOdometerValue(0)
    }, 1000)
  }, [])
  return (
    <div className='flex flex-row justify-center items-center space-x-10'>
      <div className='text-white text-2xl'>
        We've donated to conservation with your help:
      </div>
      <span className='text-white text-2xl'>$</span>
      <Odometer value={odometerValue} format='(.ddd),dd' theme='car' />
    </div>
  )
}

export default Od
