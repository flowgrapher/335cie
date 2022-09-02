import React, { useState, useEffect } from 'react';
import { LocalNotifications } from '@capacitor/local-notifications';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Exercice11() {
  const [open, setOpen] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCount((oldCount) => oldCount + 1), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    console.log(count);
    if (count === 10) {
      setTime(count);
      setOpen(true);
    }
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  LocalNotifications.schedule({
    notifications: [
      {
        id: 1,
        title: 'Hello notif',
        body: '1ère notification de test',
        schedule: {
          on: {
            hour: 9,
            minute: 10,
          },
          allowWhileIdle: true,
        },
      },
    ],
  });

  return (
    <main class='bg-gray-200 p-4 justify-center'>
      <div class='container w-full max-w-xs'>
        <h2 class='text-center text-gray-500'>Exercice 11</h2>
        <div class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <p class='text-center font-bold'>{count}</p>
          <div>
            <Button variant='outlined' onClick={handleClickOpen}>
              Dialog
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
            >
              <DialogTitle id='alert-dialog-title'>It's time !!!</DialogTitle>
              <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                  Temps écoulé : {time} secondes
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Fermer</Button>
                <Button onClick={handleClose} autoFocus>
                  Ok
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </main>
  );
}
