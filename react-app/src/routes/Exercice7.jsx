import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Geolocation } from '@capacitor/geolocation';

export default function Exercice3() {
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
          <p class='mb-3'>Géolocalisation</p>
          <p class='mb-1.5'>Altitude : {loc?.coords.altitude}</p>
          <p class='mb-1.5'>Latitude : {loc?.coords.latitude}</p>
          <p class='mb-1.5'>Longitude : {loc?.coords.longitude}</p>

          <button onClick={getPosition}>Position</button>
        </div>
      </div>
    </main>
  );
}
