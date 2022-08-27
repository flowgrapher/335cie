import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';


export default function Profile() {

    //Récupère les paramaètres via react-router location
    const location = useLocation();
    const { user } = location.state;

    useEffect(() => {
        console.log(user);
    },[]);

    return (
      <main class='bg-gray-200 p-4 justify-center'>
      <div class='container w-full max-w-xs'>
        <h2 class='text-center text-gray-500'>Exercice 4</h2>
        <div class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <p>Bonjour et bienvenue <strong><PersonIcon></PersonIcon> {user}</strong> !</p>
        </div></div>
      </main>
    );
  }