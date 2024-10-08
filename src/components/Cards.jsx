import React, { useEffect, useState } from 'react'
import Card from './Card'
import './Cards.css'
import axios from 'axios'
import { Icon } from '@iconify/react/dist/iconify.js'


const Cards = () => {
  const [imdbData, setImdbData] = useState()

  // useEffect(() => {
  //   const fetch = () => {
  //     const url = 'http://www.omdbapi.com/?apikey=938bec53&s=attack'
  //     axios.get(url)
  //       .then(res => setImdbData(res.data.Search))
  //       .catch(err => console.error(err))
  //   }

  //   fetch()
  // }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    const searchParams = e.target[0].value
    const url = `http://www.omdbapi.com/?apikey=938bec53&s=${searchParams}`
    axios.get(url)
      .then(res => setImdbData(res.data.Search))
      .catch(err => console.error(err))
  }

  const movieIcon =  <Icon icon="fluent:movies-and-tv-16-filled" style={{fontSize: 28}} />
  const seriesIcon =  <Icon icon="noto:movie-camera" style={{fontSize: 28}} />
  const gameIcon =  <Icon icon="tabler:device-gamepad-2" style={{fontSize: 28}} />

  


  return (
    <main className='tablecontainer'>

      <form onSubmit={event => handleSubmit(event)}>
        <input type='text' placeholder='Search for movies...' />
        <button type='submit'>Search</button>
      </form>
 
      {!imdbData &&
        <p>
          Please Search your desire movies here...
        </p>
      }

      {imdbData && imdbData.map(data => (
        <Card image={data.Poster} icon={data.Type === "series" ? seriesIcon : data.Type === "movie" ? movieIcon : gameIcon} movieDes={data.Title} type={data.Type} year={data.Year} />
      ))}

    </main>

  )
}

export default Cards