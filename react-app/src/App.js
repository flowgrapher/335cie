import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';
import Navbar from './Navigation/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <header className='App-header'>
        <p>335 CIE - React</p>
        <Link to='/exercice1'>Ex.1</Link>
        <Link to='/exercice2'>Ex.2</Link>
        <Link to='/exercice4'>Ex.4</Link>
        <Link to='/exercice5'>Ex.5</Link>
        <Link to='/exercice6'>Ex.6</Link>
      </header>
    </div>
  );
}

export default App;
