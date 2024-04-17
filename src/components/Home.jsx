import React from 'react'
// import Subnav from './Subnav'
import Flipkartcarousel from './Flipkartcarousel'
// import Grocery from './Grocery'
// import Fashion from './Fashion'
// import Furniture from './Furniture'
// import Beuty from './Beuty'
// import Kidswear from './Kidswear'
import Flipkartfooter from './Flipkartfooter'
// import flipData from '../Flipkartdata'
import FlipkartCard from './FlipkartCard'
import Flipkartcart from './Flipkartcart'
// import Flipkartproduct from './Flipkartproduct'


const Home = () => {
  return (
    <>

    <h2>Home</h2>
    {/* <flipData/> */}
    {/* <Subnav/> */}
    {/* <Flipkartproduct/> */}
    <FlipkartCard/>
    <Flipkartcarousel/>
    < Flipkartcart/>
    {/* <h2>brands</h2> */}
    {/* <Grocery/> */}
    {/* <Fashion/> */}
    {/* <Beuty/> */}
    {/* <Furniture/> */}
    {/* <Kidswear/> */}
    <Flipkartfooter/>
      
    </>
  )
}

export default Home
