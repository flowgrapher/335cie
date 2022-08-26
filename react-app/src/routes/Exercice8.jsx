import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, CameraResultType } from '@capacitor/camera';

export default function Exercice8() {
  const [image, setImage] = React.useState(null);

  let imageElement = null;
  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });

    var imageUrl = image.webPath;

    setImage(imageUrl);
  };

  return (
    <main class='bg-gray-200 p-4 justify-center'>
      <div class='container w-full max-w-xs'>
        <h2 class='text-center text-gray-500'>Exercice 8</h2>
        <div class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <p>
            <img src={image} />
          </p>
          <button onClick={takePicture}>Prendre photo</button>
        </div>
      </div>
    </main>
  );
}
