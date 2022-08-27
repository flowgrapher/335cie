import React from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';


export default function Exercice4() {

  const [user, setUser] = React.useState('');

    return (
      <main class='bg-gray-200 p-4 justify-center'>
      <div class='container w-full max-w-xs'>
        <h2 class='text-center text-gray-500'>Exercice 4</h2>
        <div class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>

        <p>Bonjour <PersonIcon></PersonIcon> Entrez votre nom : {user}</p>
        <form>
          <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4'
              type='text'
              placeholder="Nom" 
              value={user} 
              onChange={e => setUser(e.target.value)}
              id='username'
              name='username'
            />
          <Link to={'/profile'} state={{ user: user }}>
            <Button variant="contained">Envoyer</Button>
          </Link>
        </form>
        </div></div>
      </main>
    );
  }