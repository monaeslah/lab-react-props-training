import React from 'react'

const IdCard = props => {
  return (
    <div id='id-card'>
      <div className='img-firm'>
        <img src={props.picture} alt={props.firstName} />
      </div>
      <div className='info-firm'>
        <p>
          <h3>Last Name:</h3> <span>{props.lastName}</span>
        </p>
        <p>
          <h3>First Name:</h3> {props.firstName}
        </p>
        <p>
          <h3>Gender:</h3> {props.gender}
        </p>
        <p>
          <h3>Height:</h3> {props.height}
        </p>
        <p>
          <h3>Birth: </h3>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  )
}
export default IdCard
