import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { UserContext } from './context/UserContext'
import { useState } from 'react'

function App() {

  const user = {
    name: 'seti',
    age: 100,
    gender: 'none',
    color: 'brown'
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <UserContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </UserContext.Provider>
  )
}

export default App
