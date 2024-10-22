import React from 'react'

const BoxColor = props => {
  const { r, g, b } = props
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    color: r + g + b > 382 ? 'black' : 'white',

    padding: '20px',
    margin: '10px',
    textAlign: 'center',
    borderRadius: '5px',
    border: '1px solid black'
  }
  return (
    <div style={divStyle}>
      <p>
        rgb({r}, {g}, {b})
      </p>
    </div>
  )
}

export default BoxColor
