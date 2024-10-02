import './Card.css'

const Card = (props) => {

  const { movieDes, image, type, year, icon } = props

  return (
    <div className='container'>
      <img src={image} alt='firstpic' width={500} height={600} className='img' />
      <p>{movieDes}</p>
      <p>{icon} {type} / {year}</p>
      <button className='btn'>BUY</button>
    </div>
  )
}
export default Card