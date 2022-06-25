


import Card from './components/cards/Card'
import Header from './components/header/Header'
import { data } from './helder/data'
import './scss/App.scss'

const App = () => {
  return (
    <div>

      <Header/>
      <Card data={data}/>
      
    </div>
  )
}

export default App

