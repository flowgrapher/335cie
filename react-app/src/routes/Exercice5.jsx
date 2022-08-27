import React from "react";
import { Link } from 'react-router-dom';

export default function Exercice5() {

  const [user, setUser] = React.useState('');

    return (
      <main class='bg-gray-200 p-4 justify-center'>
      <div class='container w-full max-w-xs'>
        <h2 class='text-center text-gray-500'>Exercice 5</h2>
        <div class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <h1 p class='text-2xl mb-3'>Bienvenue</h1>
          <p>Ceci est un texte en français</p>
        </div>
      </div>
    </main>
    );
  }