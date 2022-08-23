import React from "react";
import { Link } from 'react-router-dom';

export default function Exercice1() {

  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Exercice 1</h2>
        <p>Vous avez cliqué {count}</p>
        <form>
          <button type="button" onClick={increment} >
          Incrémenter
          </button>
          <button type="button" onClick={decrement} >
          Décrémenter
          </button>
        </form>
        <Link to='/'>Home</Link>
      </main>
    );
  }