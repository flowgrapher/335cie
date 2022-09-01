import React, { useEffect } from 'react';
import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';
import { Button } from '@mui/material';

export default function Exercice9() {
  const acceleration = { x: 0, y: 0, z: 0 };
  const [timeStamp, setTimeStamp] = React.useState(0);
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const [z, setZ] = React.useState(0);

  const rotation = { x: 0, y: 0, z: 0 };
  // const motionListener = Motion.addListener(
  //   'accelerometerDidUpdate',
  //   (data) => {
  //     console.log(data);
  //     console.log(data.alpha);
  //     rotation.x = data.alpha;
  //     rotation.y = data.beta;
  //     rotation.z = data.gamma;
  //   }
  // );

  // myButton.addEventListener('click', async () => {
  //   try {
  //     await DeviceMotionEvent.requestPermission();
  //   } catch (e) {
  //     // Handle error
  //     return;
  //   }

  //   // Once the user approves, can start listening:
  //   PluginListenerHandle = await Motion.addListener('accel', (event) => {
  //     console.log('Device motion event:', event);
  //   });
  // });

  // const motionCheck = Motion.addListener('accel', (event) => {
  //   console.log('Motion:', event);
  // });

  window.addEventListener(
    'deviceorientationabsolute',
    (e) => {
      console.log(e);
      rotation.x = e.alpha;
      rotation.y = e.beta;
      rotation.z = e.gamma;
      setX(e.alpha);
      setY(e.beta);
      setZ(e.gamma);
      setTimeStamp(e.timeStamp);
    },
    true
  );

  // useEffect(() => {
  //   // console.log(motionListener);
  //   // console.log(motionCheck);
  //   console.log('Test' + acceleration.x);
  // }, [motionListener]);

  return (
    <main class='bg-gray-200 p-4 justify-center'>
      <div class='container w-full max-w-xs'>
        <h2 class='text-center text-gray-500'>Exercice 9</h2>
        <div class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <p>{x}</p>
          <p>{y}</p>
          <p>{z}</p>
          <p>{timeStamp}</p>
        </div>
      </div>
    </main>
  );
}
