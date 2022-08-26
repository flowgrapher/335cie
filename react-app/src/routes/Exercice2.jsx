import React from 'react';
import { Link } from 'react-router-dom';

export default function Exercice2() {
  const [check, setCheck] = React.useState('');

  return (
    <main class='bg-gray-200 p-4 justify-center'>
      <div class='container w-full max-w-xs'>
        <h2 class='text-center text-gray-500'>Exercice 2</h2>
        <div class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <p>Du texte</p>
          <form>
            <label
              for='first-name'
              class='block text-sm font-medium text-gray-700'
            >
              Champ texte
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              placeholder='Username'
              id='username'
              name='username'
            />
            <label
              for='first-name'
              class='block text-sm font-medium text-gray-700'
            >
              Checkbox
            </label>

            <input
              id='candidates'
              name='candidates'
              type='checkbox'
              class='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
            />

            <label
              for='first-name'
              class='block text-sm font-medium text-gray-700'
            >
              Radio
            </label>

            <div class='flex items-center'>
              <input
                id='push-everything'
                name='push-notifications'
                type='radio'
                class='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
              />
              <label
                for='push-everything'
                class='ml-3 block text-sm font-medium text-gray-700'
              >
                Choix 1
              </label>
            </div>

            <div class='flex items-center'>
              <input
                id='push-email'
                name='push-notifications'
                type='radio'
                class='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
              />
              <label
                for='push-email'
                class='ml-3 block text-sm font-medium text-gray-700'
              >
                Choix 2
              </label>
            </div>

            <label
              for='country'
              class='block text-sm font-medium text-gray-700'
            >
              Pays
            </label>
            <select
              id='country'
              name='country'
              autocomplete='country-name'
              class='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            >
              <option>Suisse</option>
              <option>Canada</option>
              <option>France</option>
            </select>

            <label for='about' class='block text-sm font-medium text-gray-700'>
              Textarea
            </label>
            <div class='mt-1'>
              <textarea
                id='about'
                name='about'
                rows='3'
                class='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                placeholder='Ecrivez de long textes ici'
              ></textarea>
            </div>

            <div class='px-4 py-3 bg-gray-50 text-right sm:px-6'>
              <button
                type='submit'
                class='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
