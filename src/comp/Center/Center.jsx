import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import './Center.css';

const Center = () => {
    return (
        <>
            <section id='Center' className='sec3 '>
                <Container>
                    <Row className='pride'>

                        <Col className='prideimg' sm={12} lg={6}>


                            <img src="img/1.png" alt="" />


                        </Col>

                        <Col className='pridetext' sm={12} lg={6}>

                            <h1>We pride ourselves on making real food from the best ingredients.</h1>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <button>Learn More</button>



                        </Col>



                    </Row>
                </Container>
            </section>
            {/* --------------end sec 3--------------------- */}

            <section className='sec4'>
                <Container>
                    <Row className='ingredients'>


                        <Col className='ingredientstext '  sm={12} lg={6}>

                            <h1>We make everything by hand with the best possible ingredients.</h1>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                            <p>Etiam sed dolor ac diam volutpat.</p>
                            <p>Erat volutpat aliquet imperdiet.</p>
                            <p>purus a odio finibus bibendum.</p>                     <button>Learn More</button>



                        </Col>

                        <Col className='ingredientsimg' sm={12} lg={6}>


                            <img src="img/2.png" alt="" />


                        </Col>


                    </Row>
                </Container>
            </section>
   {/* --------------end sec 4--------------------- */}
<section className='sec5'>
    <div className='Container'>


<div className='row'>
    <div className='col-lg-12 md-12 sm-12'>

<h1>
When a man's stomach is full it makes no <br></br>
difference whether he is rich or poor.

</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br></br>
finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
    </div>

</div>

    </div>
</section>
        </>
    )
}

export default Center