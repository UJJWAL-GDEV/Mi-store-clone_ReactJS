import React from 'react'
import ProductReviewCard from './ProductReviewCard.jsx'
import '../Stylesheets/ProductReviews.css'

const ProductReviews = ({productReviews}) => {
  return (
    <div className="productReviews">
      {
        productReviews.map((item, index) => (
          <ProductReviewCard key={item.image} image={item.image} review={item.review} name={item.name} price={item.price} index={index} />
        ))
      }
    </div>
  )
}

export default ProductReviews
