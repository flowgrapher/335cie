import React from "react";
import { Link } from 'react-router-dom';

export default function Exercice5() {

  const [user, setUser] = React.useState('');

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Exercice 4</h2>
        <p>Bonjour, entrez votre nom : {user}</p>
        <form>
          <input type="text" placeholder="Nom" value={user} onChange={e => setUser(e.target.value)}/>
          <Link to={'/profile'} state={{ user: user }}>
          <button type="button">Envoyer</button>
          </Link>
        </form>
        <Link to='/'>Home</Link>
      </main>
    );
  }