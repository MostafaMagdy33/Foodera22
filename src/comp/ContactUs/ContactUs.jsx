import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col , Row , Container } from 'react-bootstrap';
import './Contact.css'


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_my4mxan', 'template_hhrzzjo', form.current, {
        publicKey: 'aRG4zYPxeo-qpMGH_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
        e.target.reset()
      );
  };

  return (
    <section id='ContactUs' className='form'>
<Container>
  <Row>
   <Col lg={6} md={12} sm={12}>
      <form className='sec9'  ref={form} onSubmit={sendEmail}>
        <h1>Contact Us</h1>
        <div>
          <label>UserName</label> <br></br>
          <input className='username' type="text" name="name" /><br></br>
          <label>Email</label><br></br>
          <input className='email' type="email" name="email" />
        </div>

        <div>
          <label>Message</label><br></br>
          <textarea className='message' name="message" />
        </div>
        <div>
          <input className='submit' type="submit" value="Send" />
        </div>
      </form>
      </Col>
      <Col lg={6} md={12} sm={12}>
    
        <img src="/img/foodora-callout-contact-4.png" alt="" />

      </Col>
      </Row>
      </Container>
    </section>
    
  );
};

export default ContactUs