import React from 'react'

function Rating (children) {
  const roundedValue = Math.round(children)

  const starsArray = Array.from({ length: 5 }).map((_, index) => {
    return index < roundedValue ? '★' : '☆'
  })

  return (
    <div className='rating'>
      <p>{starsArray.join('')}</p>
    </div>
  )
}

export default Rating
