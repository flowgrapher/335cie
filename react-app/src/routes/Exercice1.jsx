import React from 'react';
import { Link } from 'react-router-dom';

export default function Exercice1() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <main class='bg-gray-200 p-4 justify-center'>
      <div class='container w-full max-w-xs'>
        <h2 class='text-center text-gray-500'>Exercice 1</h2>
        <div class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <p class='text-center'>Vous avez cliqué</p>
          <div class='flex justify-between'>
            <button
              type='button'
              onClick={decrement}
              class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              -
            </button>
            <p class='text-2xl'>{count} fois</p>
            <button
              type='button'
              onClick={increment}
              class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              +
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
