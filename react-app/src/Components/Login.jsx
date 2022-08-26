import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Login() {
  const { type } = useParams();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessages, setErrorMessages] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const [userLogged, setUserLogged] = useState('');

  const errors = {
    invalid: 'Invalid username or password',
    nologin: 'Login error',
  };

  const register = () => {
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    console.log('# of users: ' + users.length);

    let user = {
      name: username,
      password: password,
    };
    users.push(user);

    console.log('Added user #' + user.name);
    localStorage.setItem('users', JSON.stringify(users));
    window.open('/exercice6/login', '_self');
  };

  const login = (user, pass) => {
    console.log('Send : ' + user, pass);

    let users = JSON.parse(localStorage.getItem('users') || '[]');
    console.log('# of users: ' + users.length);
    if (users.length > 0) {
      users.forEach(function (user, index) {
        if (user.name === username && user.password === password) {
          console.log('[' + index + ']: ' + user.name);
          localStorage.setItem('logged', JSON.stringify(true));
          localStorage.setItem('userlogged', JSON.stringify(user.name));
          setIsLogged(true);
          setUserLogged(user.name);
        } else {
          setErrorMessages({ name: 'invalid', message: errors.invalid });
        }
      });
    } else {
      setErrorMessages({ name: 'nologin', message: errors.nologin });
    }
  };

  const logout = () => {
    localStorage.setItem('logged', JSON.stringify(false));
    localStorage.removeItem('userlogged', JSON.stringify(false));
    setIsLogged(false);
    setUserLogged('');
  };

  const clean = () => {
    localStorage.removeItem('users');
    setIsLogged(false);
  };

  useEffect(() => {
    const logged = JSON.parse(localStorage.getItem('logged'));
    if (logged) {
      setIsLogged(logged);
      setUserLogged(JSON.parse(localStorage.getItem('userlogged')));
    } else {
      setIsLogged(false);
    }
  }, []);

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <p class='text-red-500 text-xs italic'>{errorMessages.message}</p>
    );

  const renderButonType = (name) => {
    if (name === 'login') {
      return (
        <>
          <button
            class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
            onClick={() => login(username, password)}
          >
            Login
          </button>

          <button
            class='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
            onClick={() => window.open('/exercice6/register', '_self')}
          >
            SignIn
          </button>
        </>
      );
    } else if (name === 'register') {
      return (
        <>
          <button
            class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
            onClick={() => register()}
          >
            Save
          </button>
          <button
            class='bg-transparent hover:bg-neutral-100 text-neutral-700 font-semibold py-2 px-4 border border-neutral-500 rounded'
            type='button'
            onClick={() => window.open('/exercice6/login', '_self')}
          >
            Back
          </button>
        </>
      );
    } else {
      return null;
    }
  };

  if (isLogged) {
    return (
      <div class='container w-full max-w-xs'>
        <h2 class='text-center text-gray-500'>Exercice 6</h2>
        <div class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <h1>
            Welcome <b>{userLogged}</b>
          </h1>
          <button
            class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div class='container w-full max-w-xs'>
        <h2 class='text-center text-gray-500'>Exercice 6</h2>
        <form class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div class='mb-4'>
            <label
              class='block text-gray-700 text-sm font-bold mb-2'
              for='username'
            >
              Username
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id='username'
              name='username'
            />
          </div>
          <div class='mb-6'>
            <label
              class='block text-gray-700 text-sm font-bold mb-2'
              for='password'
            >
              Password
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='*******'
              value={password}
              name='password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>{renderErrorMessage(errorMessages.name)}</div>
          </div>
          <div class='flex items-center justify-between'>
            {renderButonType(type)}
          </div>
        </form>
        <p class='text-center text-gray-500 text-xs'>
          Connection {type} : {username} {password}
        </p>
      </div>
    );
  }
}
