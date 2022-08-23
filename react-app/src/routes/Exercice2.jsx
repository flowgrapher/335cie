import React from "react";
import { Link } from 'react-router-dom';

export default function Exercice2() {

  const [check, setCheck] = React.useState('');

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Exercice 2</h2>
        <p>Du texte</p>
        <form>
        <div>Mon champ: <input type="text" placeholder="Tapper du texte" /></div>

        <input type="checkbox" id="checkbox" />

        <div>
        <select>
          <option value="grapefruit">Pamplemousse</option>
          <option value="lime">Citron vert</option>
          <option value="coconut">Noix de coco</option>
          <option value="mango">Mangue</option>
        </select>
        </div>

        <div style={{marginTop: 10}}>
        <textarea placeholder="Voici du texte dans une zone de texte">
    
        </textarea>
        </div>

        <button type="button">Envoyer</button>

        </form>
        <Link to='/'>Home</Link>
      </main>
    );
  }