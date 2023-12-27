import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import AllRoutes from './components/Routes/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <Navbar/>
   <AllRoutes/>
    </div>
  )
}

export default App