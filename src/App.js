
import  React , { useState , useEffect} from 'react'
import './App.css';




//npm i bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col , Row , Container } from 'react-bootstrap';

//npm i swiper
import Swiper from 'swiper';
import 'swiper/css';


//npm i react-spinners
import ClipLoader from "react-spinners/ClipLoader";



//npm i react-router-dom
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Header from './comp/Header/Header'
import HomeM from './comp/HomeM';

const App = () => {

  const [spinners , setspinners] = useState(false);
 useEffect(()=>{
  setspinners(true);


setTimeout(()=>{
  setspinners(false)



},3000)




 }, [])
  


  return (
    <div>{
      spinners ? <div className='spinners'><ClipLoader
      color="rgb(168,45,73)"
      cssOverride={{}}
      loading
      size={200}
      speedMultiplier={1}
    /></div>
       : <BrowserRouter>
       <Routes>
        
<Route path='/' element= {<HomeM/>}/>

       </Routes>
      
       </BrowserRouter>

      
      
      
      }</div>
  )
}

export default App


