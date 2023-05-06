import React from 'react'
import '../Stylesheets/HotItemCard.css'

const HotItemCard = ({name, image, price, index}) => {
  return (
    <div className="hotItemCard">
      <img src={image} alt={`${index+1}th product`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  )
}

export default HotItemCard
