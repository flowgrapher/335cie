import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Login() {
  const { type } = useParams();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessages, setErrorMessages] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  const errors = {
    uname: 'Invalid username',
    pass: 'Invalid password',
    no: 'Login error',
  };

  const register = () => {
    let connectData = {username, password };
    localStorage.setItem('connection', JSON.stringify(connectData));
    window.open('/exercice6/login', '_self')
  };

  // const login = () => {
  //   let connectInfo = JSON.parse(localStorage.getItem('connection'));
  //   if (connectInfo.username === username && connectInfo.password === password) {
  //     setIsLogged(true);
  //   }
  // };
  
  const login = (user, pass) => {

    console.log('Send : ' + user, pass);

    const userData = localStorage.getItem(
      'connection',
      JSON.stringify(user, pass)
    );

    console.log('Check : ' + userData);

    if (userData) {
      if (userData.username !== user.value) {
        console.log('cas1');
        setErrorMessages({ name: 'uname', message: errors.uname });
      } else if (userData.password !== pass.value && userData.username !== user.value) {
        console.log('cas2');
        setErrorMessages({ name: 'pass', message: errors.pass });
      }
      else {
        console.log('cas3');
        setIsLogged(true);
      }
    } else {
      console.log('cas4');
      setErrorMessages({ name: 'no', message: errors.no });
    }
  };

  const logout = () => {
    localStorage.removeItem('connection');
    setIsLogged(false);
  };

  // useEffect(() => {
  //   const userData = localStorage.getItem(
  //     'connection',
  //     JSON.stringify(username, password) 
  //   );
  //    if(userData) {
  //     setUsername(userData.username);
  //     console.log(userData);
  //     setIsLogged(true);
  // }    
  // }, []);

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
      )
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
        class="bg-transparent hover:bg-neutral-100 text-neutral-700 font-semibold py-2 px-4 border border-neutral-500 rounded"
        type='button'
        onClick={() => window.open('/exercice6/login', '_self')}
      >
        Back
      </button>
      </>
      );
    } else {
      return ( null )
    }
  
  };

  if (isLogged) {
    return ( 
      <div class='container w-full max-w-xs'>
      <h2 class='text-center text-gray-500 text-'>Exercice 6</h2>
      <div
        class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
      >
      <h1>Welcome <b>{username}</b></h1> 
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
      <h2 class='text-center text-gray-500 text-'>Exercice 6</h2>
      <form
        class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
      >
        <div class='mb-4'>
          <label
            class='block text-gray-700 text-sm font-bold mb-2'
            for='username'
          >
            User
          </label>
          <input
            class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            placeholder='Nom'
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
            placeholder='******************'
            value={password}
            name='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <p class='text-red-500 text-xs italic'>{renderErrorMessage(errorMessages.name)}</p>
        </div>
        <div class='flex items-center justify-between'>
          
        { renderButonType(type) }

        </div>
      </form>
      <p class='text-center text-gray-500 text-xs'>
        Connection {type} : {username} {password}
      </p>
    </div>
  );
  }
}
