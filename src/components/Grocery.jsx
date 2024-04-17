import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Flipkartcarousel from './Flipkartcarousel';
import Subnav from './Subnav';




const Grocery = (props) => {
 
  return (
    
    <>
    <Subnav/>
    <Flipkartcarousel/>
    <h2>Grocery</h2>



        <div className="container">
          <div className="row">
          <div className="col-md-4" style={{ border : "1px solid red"}}>
         <Card style={{ width: '15rem', marginBottom : '10px'  }} className='product-card'>
      <Card.Img variant="top" src="https://beta.saffola.in/wp-content/uploads/2020/08/ACTIVE-3-F.png" style={{height:"30vh", width:"35vw", padding : '20px'}} />
      <Card.Body>
        <Card.Title>saffola active</Card.Title>
        <p>price : 480</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">know more</Button>
        <Button variant="outline-primary">Add to cart</Button>
      </Card.Body>
    </Card>
         </div>

         <div className="col-md-4">
         <Card style={{ width: '15rem', marginBottom : '10px' }} className='product-card'>
      <Card.Img variant="top" src="https://5.imimg.com/data5/SELLER/Default/2022/10/MC/GV/KK/20830011/saffola-masala-oats-peppy-tomato.jpg" style={{height:"30vh", width:"35vw", padding : '20px'}} />
      <Card.Body>
        <Card.Title>saffola active</Card.Title>
        <p>price : 480</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">know more</Button>
        <Button variant="outline-primary">Add to cart</Button>
      </Card.Body>
    </Card>
         </div>

         <div className="col-md-4">
         <Card style={{ width: '15rem', marginBottom : '10px' }} className='product-card'>
      <Card.Img variant="top" src="https://5.imimg.com/data5/SELLER/Default/2022/10/MC/GV/KK/20830011/saffola-masala-oats-peppy-tomato.jpg" style={{height:"30vh", width:"35vw", padding : '20px'}} />
      <Card.Body>
        <Card.Title>saffola active</Card.Title>
        <p>price : 480</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">know more</Button>
        <Button variant="outline-primary">Add to cart</Button>
      </Card.Body>
    </Card>
         </div>

         <div className="col-md-4">
         <Card style={{ width: '15rem', marginBottom : '10px' }} className='product-card'>
      <Card.Img variant="top" src="https://5.imimg.com/data5/SELLER/Default/2022/10/MC/GV/KK/20830011/saffola-masala-oats-peppy-tomato.jpg" style={{height:"30vh", width:"35vw", padding : '20px'}} />
      <Card.Body>
        <Card.Title>saffola active</Card.Title>
        <p>price : 480</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">know more</Button>
        <Button variant="outline-primary">Add to cart</Button>
      </Card.Body>
    </Card>
         </div>

         <div className="col-md-4">
         <Card style={{ width: '15rem', marginBottom : '10px' }} className='product-card'>
      <Card.Img variant="top" src="https://5.imimg.com/data5/SELLER/Default/2022/10/MC/GV/KK/20830011/saffola-masala-oats-peppy-tomato.jpg" style={{height:"30vh", width:"35vw", padding : '20px'}} />
      <Card.Body>
        <Card.Title>saffola active</Card.Title>
        <p>price : 480</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">know more</Button>
        <Button variant="outline-primary">Add to cart</Button>
      </Card.Body>
    </Card>
         </div>

         <div className="col-md-4">
         <Card style={{ width: '15rem', marginBottom : '10px' }} className='product-card'>
      <Card.Img variant="top" src="https://5.imimg.com/data5/SELLER/Default/2022/10/MC/GV/KK/20830011/saffola-masala-oats-peppy-tomato.jpg" style={{height:"30vh", width:"35vw", padding : '20px'}} />
      <Card.Body>
        <Card.Title>saffola active</Card.Title>
        <p>price : 480</p>
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
        </div>
    

         

         

          
      
    
     </>
  )
}
export default Grocery
