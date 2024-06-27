import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import News from './Components/News';
import Tesla from './Components/Tesla';
import Apple from './Components/Apple';
import Home from './Components/Home';
import TechCrunch from './Components/Techcrunch';
import { Routes,Route, BrowserRouter } from 'react-router-dom';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path='/'></Route>
      <Route element={<Tesla/>} path='/tesla'></Route>
      <Route element={<Apple/>} path='/apple'></Route>
      <Route element={<TechCrunch/>} path='/techcrunch'></Route>
      
    </Routes>
    </BrowserRouter>
   
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
