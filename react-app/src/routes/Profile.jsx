import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Profile() {

    //Récupère les paramaètres via react-router location
    const location = useLocation();
    const { user } = location.state;

    useEffect(() => {
        console.log(user);
    },[]);

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Profil</h2>
        <p>Bonjour et bienvenue {user} !</p>

        <Link to='/'>Home </Link> <br/>
        <Link to='/exercice4'>Exercice4 </Link>
      </main>
    );
  }