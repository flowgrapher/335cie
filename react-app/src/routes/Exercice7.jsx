import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Geolocation } from '@capacitor/geolocation';
import { Button } from '@mui/material';

export default function Exercice7() {
  const [loc, setLoc] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  const getPosition = useCallback(async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    setLoc(coordinates);
  }, [coordinates]);

  useEffect(() => {
    getPosition();
  }, []);

  return (
    <main class='bg-gray-200 p-4 justify-center'>
      <div class='container w-full max-w-xs'>
        <h2 class='text-center text-gray-500'>Exercice 7</h2>
        <div class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <p class='text-2xl mb-3'>Géolocalisation</p>
          <p class='mb-2'>Altitude : <span className='font-bold'>{loc?.coords.altitude}</span></p>
          <p class='mb-2 '>Latitude : <span className='font-bold'>{loc?.coords.latitude}</span></p>
          <p class='mb-5'>Longitude : <span className='font-bold'>{loc?.coords.longitude}</span></p>

          <Button variant="contained" onClick={getPosition}>Position</Button>
        </div>
      </div>
    </main>
  );
}
