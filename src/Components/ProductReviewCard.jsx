import React from 'react'
import '../Stylesheets/ProductReviewCard.css'

const ProductReviewCard = ({image, review, name, price, index}) => {
  return (
    <div className="productReviewCard" >
      <img src={image} alt={`${index+1}th review`} />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  )
}

export default ProductReviewCard
