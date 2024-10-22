import './App.css'
import IdCard from './components/idCards'
import dataList from './data/berlin.json'
import Greeting from './components/Greeting.jsx'
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
    </div>
  )
}

export default App
