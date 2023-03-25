import logo from './logo.svg';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter as Router,Routes,Link} from 'react-router-dom';
import { Unity, useUnityContext } from "react-unity-webgl";
import Basicform from './BasicForm';
import BasicExample from './BasicExample';
import ReactDOM from 'react-dom';
import BasicForm from './BasicForm';
import Game1 from './pages/UnityLoader';
import Game2 from './pages/Game2';
import CarouselFade from './component/CarouselFade'
import { Carousel } from 'bootstrap';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About.jsx';
import Header from './component/Header';
//import { autofill } from 'xrpl/dist/npm/sugar';

function App() {
  

  const h1 = <h1><CarouselFade/></h1>
  
  return (
    <>
    <div>
      <BasicExample className='.App-header'></BasicExample>
      
       <Router className='App'>
       
       <Routes>
       <Route path="/" element={<Dashboard />} />
       <Route path="/about" element={<About />} />
       <Route path='/register' element={<Register/>} />
       <Route path='/login' element={<Login/>} />
       <Route path="/signup" element={<BasicForm />} />
       <Route path="/game1" element={<Game1 />} />
       <Route path="/game2" element={<Game2 />} />
       </Routes>

       </Router>
        
      </div>
      
      </>
  
  );
}

function Home() {
  return (
    <div className='App'>
      <h2 ><CarouselFade/></h2>
      <p>GamerXGold is token built on the XRPL with its aim to be the number 1 Crypto for competive gaming</p>
    </div>
  );
}





export default App;