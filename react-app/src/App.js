import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';
import Navbar from './Navigation/Navbar';

function App() {
  return (
    <div className='App' class='bg-gray-200 p-4 justify-center'>
      <div class='container w-full max-w-md'>
        <h2 class='text-center text-gray-500'>Hello World</h2>
        <div class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <header>
            <p class='text-3xl text-center font-bold text-indigo-900 mb-5'>
              CIE 335 - React
            </p>
            <div class='h-30 grid grid-cols-3 gap-3 content-start'>
              <Link to='/exercice1'>
                <button class='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mb-8'>
                  Exercice 1
                </button>
              </Link>
              <Link to='/exercice2'>
                <button class='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mb-8'>
                  Exercice 2
                </button>
              </Link>
              <Link to='/exercice3'>
                <button class='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mb-8'>
                  Exercice 3
                </button>
              </Link>
              <Link to='/exercice4'>
                <button class='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mb-8'>
                  Exercice 4
                </button>
              </Link>
              <Link to='/exercice5'>
                <button class='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mb-8'>
                  Exercice 5
                </button>
              </Link>
              <Link to='/exercice6/login'>
                <button class='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mb-8'>
                  Exercice 6
                </button>
              </Link>
              <Link to='/exercice7'>
                <button class='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mb-8'>
                  Exercice 7
                </button>
              </Link>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}

export default App;
