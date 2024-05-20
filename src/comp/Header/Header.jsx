import { Col , Row , Container } from 'react-bootstrap';
import React from 'react'
import "./Header.css";
const Header = () => {
  return (
    <header id='Header' className='sec1'>
<Container>
<Row>
<Col sm={12} md={12} lg={6}  className='text-header'>
<h1>Good food choices are good investments.</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>


<button className='Order'>Order Now</button>
<button className='Learn'>Learn More </button>
</Col >

<Col sm={12} md={12} lg={6} >



</Col>





</Row>
</Container>







    </header>
  )
}

export default Header