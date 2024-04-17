import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './style.css'



const Flipkartcarousel = () => {
  return (
    <div className='carosal'>
    <Carousel className=''>
      <Carousel.Item className=''>
        < img src="https://storiesflistgv2.blob.core.windows.net/stories/2021/05/FKSfooterbanner_new__.jpg" alt='sl2' width='100%' height='20%' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://storiesflistgv2.blob.core.windows.net/stories/2021/05/FKSfooterbanner_new__.jpg" alt='sl2' width='100%' height='20%' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    
      </Carousel.Item>
    </Carousel>
      
    </div>
  )
}

export default Flipkartcarousel
