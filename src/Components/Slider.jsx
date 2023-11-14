import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

const Slider = (props) => {
    
    return (
        <Carousel fade>
        {
        props.slides.map((item) => (
        <Carousel.Item interval={3000} key={item}>
        <img
        className="d-block w-100"
        src={item}
        alt="_slides"
        />
        </Carousel.Item>
        ))
        }

        </Carousel>
    )
}

export default Slider
