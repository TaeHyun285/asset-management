import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [currentPrice,SetcurrentPrice] = [1,2];
  return (
    <div className="App">
      
      <div className="crypto-nav">
        <div>암호화폐</div>
      </div>

      <div className="ticker">
        <h3>{currentPrice}</h3>
        <p>안녕하세요</p>
        <hr/>
      </div>






    </div>
  )
}

export default App
