import React from 'react';
import Button from '@mui/material/Button';


export default function Exercice3() {
  //Test intégrer Tailwind CSS & Material UI
  return (
    <main class='bg-gray-200 p-4 justify-center'>
      <div class='container w-full max-w-xs'>
        <h2 class='text-center text-gray-500'>Exercice 3</h2>
        <div class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div class='flex flex-row flex-wrap gap-4 mb-4'>
          <Button variant="contained">Ajouter</Button>
          <Button variant="contained">Modifier</Button>
          <Button variant="contained">Supprimer</Button>
          </div>
          <div class='flex flex-col gap-4'>
          <Button variant="contained">Ajouter</Button>
          <Button variant="contained">Modifier</Button>
          <Button variant="contained">Supprimer</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
