import React, {useEffect} from "react";
import { Link } from 'react-router-dom';

export default function Exercice6() {

  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');

  const signIn = () => {
    const connectInfo = { user: user, password: password };
    localStorage.setItem('connection', JSON.stringify(connectInfo));
  };

  const login = () => {
    const connectInfo = JSON.parse(localStorage.getItem('connection'));
    if (connectInfo.user === user && connectInfo.password === password) {
      window.open("/profile", "_self");
    }
  }


  useEffect(() => {
    const datas = JSON.parse(localStorage.getItem('connection'));
    if (datas) {
     setUser(datas.user);
     setPassword(datas.password);
    }
  }, []);

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Exercice 4</h2>
        <p>Connection : {user} {password}</p>
        <form>
          <input type="text" placeholder="Nom" value={user} onChange={e => setUser(e.target.value)}/>

          <input type="text" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>

          <button type="button" onClick={() => login()}>Envoyer</button>
          
          <button type="button" onClick={() => signIn()}>Envoyer</button>
          
        </form>
        <Link to='/'>Home</Link>
      </main>
    );
  }