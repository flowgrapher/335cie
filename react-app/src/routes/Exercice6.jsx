import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navigation/Navbar';

export default function Exercice6() {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');

  const signIn = () => {
    const connectInfo = { user: user, password: password };
    localStorage.setItem('connection', JSON.stringify(connectInfo));
  };

  const login = () => {
    const connectInfo = JSON.parse(localStorage.getItem('connection'));
    if (connectInfo.user === user && connectInfo.password === password) {
      window.open('/profile', '_self');
    }
  };

  useEffect(() => {
    const datas = JSON.parse(localStorage.getItem('connection'));
    if (datas) {
      setUser(datas.user);
      setPassword(datas.password);
    }
  }, []);

  return (
    <>
      <Navbar />

      <main class='bg-gray-200 p-4 justify-center'>
        <div class='container w-full max-w-xs'>
          <h2 class='text-center text-gray-500 text-'>Exercice 6</h2>
          <form class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div class='mb-4'>
              <label
                class='block text-gray-700 text-sm font-bold mb-2'
                for='username'
              >
                Nom d'utilisateur
              </label>
              <input
                class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                placeholder='Nom'
                value={user}
                onChange={(e) => setUser(e.target.value)}
                id='username'
              />
            </div>
            <div class='mb-6'>
              <label
                class='block text-gray-700 text-sm font-bold mb-2'
                for='password'
              >
                Mot de passe
              </label>
              <input
                class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                id='password'
                type='password'
                placeholder='******************'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p class='text-red-500 text-xs italic'>Ici message erreur.</p>
            </div>
            <div class='flex items-center justify-between'>
              <button
                class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='button'
                onClick={() => login()}
              >
                Login
              </button>

              <button
                class='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='button'
                onClick={() => signIn()}
              >
                Sign In
              </button>
            </div>
          </form>
          <p class='text-center text-gray-500 text-xs'>
            Connection : {user} {password}
          </p>
        </div>
      </main>
    </>
  );
}
