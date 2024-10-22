import './App.css'
import IdCard from './components/idCards'
import dataList from './data/berlin.json'

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
    </div>
  )
}

export default App
