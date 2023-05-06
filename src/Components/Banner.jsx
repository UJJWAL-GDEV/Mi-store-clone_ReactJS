import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = ({slides}) => {
  return (
    <Carousel fade>
      {
        slides.map((item, index) => (
            <Carousel.Item key={item.image} interval={1000}>

            <img className="d-block w-100"
                id="slideImage"
                src={item.image}
                alt={`${index+1}th slide`}
            />

            <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.source}</p>
                <u>Read more</u>
            </Carousel.Caption>
            </Carousel.Item>
        ))
      }

    </Carousel>
  )
}

export default Banner
