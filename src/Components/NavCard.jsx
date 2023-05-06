import React from 'react'
import '../Stylesheets/NavCard.css'

const NavCard = ({name, price, image, index}) => {
  return (
    <div className="navCard">
      <img src={image} alt={`${index+1}th image`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  )
}

export default NavCard
