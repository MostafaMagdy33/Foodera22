import React from 'react'
import { Col , Row , Container } from 'react-bootstrap';
import './Faq.css'

const Faq = () => {
  return (
    <section id='FAQ' className='sec8'>
<Container>
    <Row className='Faq'>

<h1>Frequently Asked Questions</h1>

<Col lg={6} md={6} sm={12} className='left-sec'>

<div>
<h4><span>~</span>Is Foodera Bread really baked fresh each day?</h4>
<p>
Far far away, behind the word mountains, far from the countries Vokalia <br></br>
 and Consonantia, there live the blind texts. Separated they live in <br></br>
  Bookmarksgrove right at the coast of the Semantics, a large language.
</p>
</div>

<div>
<h4><span>~</span>Can I order your products online?</h4>
<p>
Far far away, behind the word mountains, far from the countries Vokalia <br></br>
 and Consonantia, there live the blind texts. Separated they live in <br></br>
  Bookmarksgrove right at the coast of the Semantics, a large language.
</p>
</div>





</Col>



<Col lg={6} md={6} sm={12} className='right-sec'>

<div>
<h4><span>~</span>Do you bake breads containing animal fats or products?</h4>
<p>
Far far away, behind the word mountains, far from the countries Vokalia <br></br>
 and Consonantia, there live the blind texts. Separated they live in <br></br>
  Bookmarksgrove right at the coast of the Semantics, a large language.
</p>
</div>

<div>
<h4><span>~</span>When are you opening a shop near me?</h4>
<p>
Far far away, behind the word mountains, far from the countries Vokalia <br></br>
 and Consonantia, there live the blind texts. Separated they live in <br></br>
  Bookmarksgrove right at the coast of the Semantics, a large language.
</p>
</div>





</Col>












    </Row>
    
    </Container>



    </section>
  )
}

export default Faq