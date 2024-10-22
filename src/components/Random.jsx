import React from 'react'

const Random = ({ min, max }) => {
  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min

  return (
    <div className='random-box'>
      <p>
        Random value between {min} and {max} is {randomValue}
      </p>
    </div>
  )
}
export default Random
