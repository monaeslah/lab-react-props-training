import React from 'react'

function Greetings (props) {
  let language = ''

  if (props.lang === 'de') {
    language = 'Hallo'
  } else if (props.lang === 'fr') {
    language = 'Bonjour'
  } else if (props.lang === 'en') {
    language = 'Hello'
  } else if (props.lang === 'es') {
    language = 'Hola'
  }

  return (
    <div className='greetings-box'>
      <p>{language + ' ' + props.children}</p>
    </div>
  )
}

export default Greetings
