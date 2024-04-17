import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Flipkartcarousel from './Flipkartcarousel';
import Subnav from './Subnav';

const Beuty = () => {
  return (

    <>
    <Subnav/>
    <Flipkartcarousel/>
    <h2>beuty</h2>

    <div style={{display:"flex"}} className="container">
      <div style={{justifyContent:'space-between'}} className="row">
      
      
        
        <Card style={{ width: '18rem' }} className='product-card img'>
      <Card.Img variant="top" src="https://images-static.nykaa.com/media/catalog/product/9/3/93e12da8904245702786_1.jpg" />
      <Card.Body>
        <Card.Title>skin foundation</Card.Title>
        <p>price : 430.00</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">know more</Button>
        <Button variant="outline-primary">Add to cart</Button>
      </Card.Body>
    </Card>

         

    

<card style={{ width: '18rem'  }} className='product-card img'>
<Card.Img variant="top" src="https://shaadiwish.com/blog/wp-content/uploads/2020/08/1.1-1-e1597401233208.jpg" />
<Card.Body>
<Card.Title>pink shade lipstick</Card.Title>
<p>price : 430.00</p>
<Card.Text>
  Some quick example text to build on the card title and make up the
  bulk of the card's content.
</Card.Text>
<Button variant="primary">Know more</Button>
<Button variant="outline-primary">Add to cart</Button>
</Card.Body>
</card>

<Card style={{ width: '18rem' }} className='product-card img'>
      <Card.Img variant="top" src="https://images-static.nykaa.com/media/catalog/product/9/3/93e12da8904245702786_1.jpg" />
      <Card.Body>
        <Card.Title>skin foundation</Card.Title>
        <p>price : 430.00</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">know more</Button>
        <Button variant="outline-primary">Add to cart</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='product-card img'>
      <Card.Img variant="top" src="https://images-static.nykaa.com/media/catalog/product/9/3/93e12da8904245702786_1.jpg" />
      <Card.Body>
        <Card.Title>skin foundation</Card.Title>
        <p>price : 430.00</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">know more</Button>
        <Button variant="outline-primary">Add to cart</Button>
      </Card.Body>
    </Card>


</div>
    </div>

    
    </>
  )
}

export default Beuty
