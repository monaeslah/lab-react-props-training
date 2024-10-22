import './App.css'
import IdCard from './components/idCards'
import dataList from './data/berlin.json'
import Greeting from './components/Greeting.jsx'
import Random from './components/Random.jsx'
import BoxColor from './components/BoxColor.jsx'
import CreditCard from './components/CreditCard.jsx'
import Rating from './components/Rating.jsx'
const getLangFromCountry = country => {
  switch (country) {
    case 'Germany':
      return 'de'
    case 'France':
      return 'fr'
    case 'Spain':
      return 'es'
    case 'England':
    case 'USA':
      return 'en'
    default:
      return 'en'
  }
}
function App () {
  return (
    <div className='App'>
      <h1> LAB | React Training</h1>
      {dataList.map((element, index) => {
        return (
          <div key={index} id='home'>
            <IdCard
              lastName={element.lastName}
              firstName={element.firstName}
              gender={element.gender}
              height={element.height}
              birth={new Date(element.birth)}
              picture={element.img}
            />
          </div>
        )
      })}
      {dataList.map((element, index) => {
        return (
          <div key={index} id='home'>
            <Greeting lang={getLangFromCountry(element.country)}>
              {element.firstName}
            </Greeting>
          </div>
        )
      })}
      <Random min={1} max={3} />
      <BoxColor r={128} g={255} b={0} />
      <CreditCard
        type='Master Card'
        number='0123456789010995'
        expirationMonth={3}
        expirationYear={2021}
        bank='N26'
        owner='Maxence Bouret'
        bgColor='#eeeeee'
        color='black'
      />
      <Rating>5</Rating>
    </div>
  )
}

export default App
