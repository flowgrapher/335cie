import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Profile from './routes/Profile';
import Exercice1 from './routes/Exercice1';
import Exercice2 from './routes/Exercice2';
import Exercice4 from './routes/Exercice4';
import Exercice5 from './routes/Exercice5';
import Exercice6 from './routes/Exercice6';
import Navbar from './Navigation/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='exercice1' element={<Exercice1 />} />
      <Route path='exercice2' element={<Exercice2 />} />
      <Route path='exercice4' element={<Exercice4 />} />
      <Route path='exercice5' element={<Exercice5 />} />
      <Route path='exercice6/:type' element={<Exercice6 />} />
      <Route path='profile' element={<Profile />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
