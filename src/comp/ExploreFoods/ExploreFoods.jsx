import React from 'react'
import { Col , Row , Container } from 'react-bootstrap';
import "./ExploreFoods.css"



const ExploreFoods = () => {
  return (
    <section className='sec6'>
<Container id='ExploreFoods' className='head'>


<h1>
Explore Our Foods
</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet<br></br> leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and <br></br> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
<Row className='ExploreFoods'>
<Col lg = {4} md ={6} sm={12} className='Sandwich'>
<img src="/img/01.jpg" alt="" />
<h4>Rainbow Vegetable Sandwich</h4>
<h6>Time: 15 - 20 Minutes | Serves: 1</h6>
<span>$10.50 <del>$11.70</del></span><br></br>
<button>Order Now</button>

</Col>
<Col lg = {4} md ={6} sm={12} className='Burger'>
<img src="/img/02.jpg" alt="" />
<h4>Vegetarian Burger</h4>
<h6>Time: 30 - 45 Minutes | Serves: 1</h6>
<span>$9.20 <del> $10.50</del></span><br></br>
<button>Order Now</button>

</Col>

<Col lg = {4} md ={6} sm={12} className='Toast'>
<img src="/img/03.jpg" alt="" />
<h4>Raspberry Stuffed French Toast</h4>
<h6>Time: 10 - 15 Minutes | Serves: 1</h6>
<span>$12.50 <del> $13.20</del></span><br></br>
<button>Order Now</button>

</Col>




</Row>







</Container>




    </section>
  )
}

export default ExploreFoods