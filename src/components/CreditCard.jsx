import React from 'react'

function CreditCard (props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color
  } = props

  const maskedNumber = `•••• •••• •••• ${number.slice(-4)}`

  const formattedMonth =
    expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth

  const cardTypeImage =
    type === 'Visa'
      ? 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg'
      : 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg'

  return (
    <div
      className='credit-card'
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className='credit-card-type'>
        <img src={cardTypeImage} alt={type} />
      </div>
      <div className='credit-card-number'>
        <p>{maskedNumber}</p>
      </div>
      <div className='credit-card-info'>
        <div>
          <p>
            Expires {formattedMonth}/{expirationYear.toString().slice(-2)}{' '}
            &nbsp;&nbsp; {bank}
          </p>
        </div>
        <div>
          <p>{owner}</p>
        </div>
      </div>
    </div>
  )
}

export default CreditCard
