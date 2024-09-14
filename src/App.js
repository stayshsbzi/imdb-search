import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import React,{createContext } from 'react'
import ComponentC from './components/ComponentC.jsx'
export const UserContext = createContext()
function App() {
  const user = 'setayesh'
  return (
    <div className='App'>
      <UserContext.Provider value={user}>
    <ComponentC/>
    </UserContext.Provider>
    <button > check for imdb </button> 
    <Routes>
      if (button='onclick') {
      <Route path="/" element={<Home />} />
       }
      </Routes>
 else()
 {

 }
    </div>
  )
}

export default App
