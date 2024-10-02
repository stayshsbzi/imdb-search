import { useContext } from 'react'
import Cards from '../components/Cards'
import { UserContext } from '../context/UserContext'

const Home = () => {

  // const user = useContext(UserContext)

  const [isLoggedIn, setIsLoggedIn] = useContext(UserContext)

  const login = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    if (e.target[0].value === 'seti' && e.target[1].value === '1234') {
      setIsLoggedIn(true)
    }
  }

  return (
    <main>
      {isLoggedIn &&
      <p>You Logged in successfully...</p>
      }
      <Cards />
      <form onSubmit={e => login(e)}>
        <input type='text' />
        <input type='password' />
        <button type='submit'>submit</button>
      </form>
    </main>
  )
}

export default Home