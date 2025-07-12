import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from "./Layout";
import Blog from "./Blog";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function MyTitle() {
  return <h2>This is my a React Application</h2>;
}


function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function ShowMyNmae() {
  return <span>Md Safiul Alam</span>
}

function App() {
  
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>   
        <Route path='/blogs' element={<Blog />} ></Route>
           
        </Route>
      </Routes>
    </BrowserRouter>
    
    <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
      <ShowMyNmae/>
      hello world
    </>
   
      
   
   
  );
}

export default App;
