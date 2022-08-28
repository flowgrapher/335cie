import React, { useState } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [exercice, setExercice] = useState({});

  let exerciceList = [
    { id: 1, name: 'Exercice 1', shortname: 'Ex1', path: '/exercice1' },
    { id: 2, name: 'Exercice 2', shortname: 'Ex2', path: '/exercice2' },
    { id: 3, name: 'Exercice 3', shortname: 'Ex3', path: '/exercice3' },
    { id: 4, name: 'Exercice 4', shortname: 'Ex4', path: '/exercice4' },
    { id: 5, name: 'Exercice 5', shortname: 'Ex5', path: '/exercice5' },
    { id: 6, name: 'Exercice 6', shortname: 'Ex6', path: '/exercice6/login' },
    { id: 7, name: 'Exercice 7', shortname: 'Ex7', path: '/exercice7' },
    { id: 8, name: 'Exercice 8', shortname: 'Ex8', path: '/exercice8' },
  ];
  const renderExercices = () => {
    return exerciceList.map((exercice, index) => (
      <>
        <Link to={exercice.path}>
          <button class='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mb-8'>
            {exercice.name}
          </button>
        </Link>
      </>
    ));
  };

  return (
    <div class='bg-gray-200 p-4 justify-center'>
      <div class='container w-full max-w-md'>
        <h2 class='text-center text-gray-500'>Hello World</h2>
        <div class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <h1 class='text-3xl text-center font-bold text-indigo-900 mb-5'>
            CIE 335 - React
          </h1>
          <img src={logo} className='App-logo' alt='logo' />
          <div class='h-30 grid grid-cols-3 gap-3 content-start mt-5'>
            {renderExercices()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
