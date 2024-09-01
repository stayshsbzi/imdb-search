import React from 'react'
import './Card.css'

const Card = ({movieDes , image, type, year}) => {
    return (
      <div className='container'>
        <img src={image} alt='firstpic' width={500} height={600} className='img' />
        <p>{movieDes}</p>
        <p>{type} / {year}</p>
        <button className='btn'>BUY</button>
      </div>
    )
}
export default Card