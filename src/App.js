import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';

import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';

import Axios from './Axios/Axios';
import D3chart from './Axios/D3chart'

import Footer from './Footer/Footer';



function App() {
  return (
    <Router>
     <Menu/>
     <Hero/>
     <div className='mainContainer'>
       <Switch>
         <Route path = "/about">
           <AboutPage/>
         </Route>
         <Route path = "/login">
           <LoginPage/>
         </Route>
         <Route path = "/">
           <HomePage/>
           <Axios/>
           <D3chart/>
          </Route>
         </Switch>
         </div>
     <Footer/>
    </Router>
  );
}

export default App;
