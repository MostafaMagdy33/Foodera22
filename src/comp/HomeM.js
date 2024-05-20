import React from 'react'
//npm i bootstrap
import { Col,Container,Row} from 'react-bootstrap'

//npm i react-icons
import { FaFacebookF , FaTwitter   , FaDribbble , FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa6";



import Nav from './Navbar/Nav'
import Header from './Header/Header'
import Center from './Center/Center'
import ExploreFoods from './ExploreFoods/ExploreFoods'
import Testimonials from './Testimonials/Testimonials'
import Faq from './FAQ/Faq'
import ContactUs from './ContactUs/ContactUs'
import './Home.css'
const HomeM = () => {
  return (
    <>
    <div><Nav/>
    <Header/>
    </div>
<section className='sec2'>
<Container>
<Row>
<Col className='text-sec2' lg = {3} md={3} sm= {12}>
  <h1>1287+</h1>
  <p>SAVINGS</p>
</Col>
<Col className='text-sec2' lg = {3}md={3} sm= {12}>
  <h1>5786+</h1>
  <p>PHOTOS</p>
</Col>
<Col className='text-sec2' lg = {3} md={3} sm= {12}> 
  <h1>1440+</h1>
  <p>ROCKETS</p>
</Col>
<Col className='text-sec2' lg = {3} md={3} sm= {12}>
  <h1>7110+</h1>
  <p>GLOBES</p>
</Col>
</Row>
</Container>
</section>

<div>
  <Center/>
</div>
<div>
  <ExploreFoods/>
</div>
<div>
 <Testimonials/>
</div>
<div>
<Faq/>
</div>
<div>
<ContactUs/>
</div>


<footer className="sec10" id="footer">
            <Container>
                <Row className='footerdiv'>
                    <Col className="footerlink">
                        <a href="#">Register</a>
                        <a href="#">Forum</a>
                        <a href="#">Affiliate</a>
                        <a href="#">FAQ</a>
                    </Col>


                    
                    <Col className="footer-social">
                    <i><FaFacebookF color='white'/></i>
                    <i><FaTwitter color='white'/></i>
                    <i><TfiYoutube color='white'/></i>
                    <i><FaDribbble color='white'/></i>
                    <i><FaLinkedinIn color='white'/></i>
                    <i><FaInstagram color='white'/></i>
                    
                    <div>© 2024. Foodera. All rights reserved.</div>
                    </Col>
                    </Row>
                </Container>
        </footer>






    </>
  );
};

export default HomeM