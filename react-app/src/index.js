import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Profile from './Routes/Profile';
import Exercice1 from './Routes/Exercice1';
import Exercice2 from './Routes/Exercice2';
import Exercice3 from './Routes/Exercice3';
import Exercice4 from './Routes/Exercice4';
import Exercice5 from './Routes/Exercice5';
import Exercice6 from './Routes/Exercice6';
import Exercice7 from './Routes/Exercice7';
import Exercice8 from './Routes/Exercice8';
import Exercice9 from './Routes/Exercice9';
import Navbar from './Navigation/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='exercice1' element={<Exercice1 />} />
      <Route path='exercice2' element={<Exercice2 />} />
      <Route path='exercice3' element={<Exercice3 />} />
      <Route path='exercice4' element={<Exercice4 />} />
      <Route path='exercice5' element={<Exercice5 />} />
      <Route path='exercice6/:type' element={<Exercice6 />} />
      <Route path='exercice7' element={<Exercice7 />} />
      <Route path='exercice8' element={<Exercice8 />} />
      <Route path='exercice9' element={<Exercice9 />} />
      <Route path='profile' element={<Profile />} />
    </Routes>
    <p class='text-center text-gray-500 text-xs'>CIE 335 © 2022</p>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
