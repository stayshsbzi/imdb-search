import React, { useEffect, useState } from 'react'
import Card from './Card'
import './Cards.css'
import axios from 'axios'


const Cards = () => {
  const [imdbData, setImdbData] = useState()

  useEffect(() => {
    const fetch = () => {
      const url = 'http://www.omdbapi.com/?apikey=938bec53&s=ring'
      axios.get(url)
        .then(res => setImdbData(res.data.Search))
        .catch(err => console.error(err))
    }

    fetch()
  }, [])

  console.log(imdbData)


  return (
    <main className='tablecontainer'>

      {imdbData && imdbData.map(data => (
        <Card image={data.Poster} movieDes={data.Title} type={data.Type} year={data.Year} />
      ))}

    </main>

  )
}

export default Cards