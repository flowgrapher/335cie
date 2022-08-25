import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navigation/Navbar';
import { useParams } from 'react-router-dom';
import Login from '../Components/Login';

export default function Exercice6() {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <>
      <Navbar />

      <main class='bg-gray-200 p-4 justify-center'>
        <Login />
      </main>
    </>
  );
}
