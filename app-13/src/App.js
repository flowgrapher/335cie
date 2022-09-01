import * as React from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function App() {
  const [calcul, setCalcul] = React.useState("");

  const [decimal, setDecimal] = React.useState(0);
  const [hexadecimal, setHexadecimal] = React.useState("");
  const [binary, setBinary] = React.useState("");

  const updateCalcul = (e) => {
    //Utilise la valeur du champ name
    let number = e.target.name;

    console.log('Clic sur ' + number);

    if (number == 'c') {
      setCalcul('');
      setBinary('');
      setHexadecimal('');
    } else {
      // Concatène la valeur du champ name avec la valeur de calcul
      let newCalcul = calcul.concat(number);
      setCalcul(newCalcul);

      // Conversion decimal vers binaire
      let binaire = Number(newCalcul).toString(2)
      setBinary(binaire);

      // Conversion decimal vers hexadecimal
      let hexa = Number(newCalcul).toString(16)
      setHexadecimal(hexa);
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <TextField
          id='outlined-basic'
          label='Decimal'
          variant='outlined'
          size='small'
          value={calcul}
          style={{ margin: '5px' }}
        />
        <TextField
          id='outlined-basic'
          label='Hexadecimal'
          variant='outlined'
          size='small'
          value={hexadecimal}
          style={{ margin: '5px' }}
        />
        <TextField
          id='outlined-basic'
          label='Binaire'
          variant='outlined'
          size='small'
          value={binary}
          style={{ margin: '5px' }}
        />
        <FormControl>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue='octet'
            name='radio-buttons-group'
          >
            <FormControlLabel
              value='octet'
              control={<Radio />}
              label='Octet 8 bit'
            />
            <FormControlLabel
              value='mot'
              control={<Radio />}
              label='Mot 16 bit'
            />
          </RadioGroup>
        </FormControl>

        <ButtonGroup variant='outlined' aria-label='outlined button group' size='large'>
          <Button onClick={updateCalcul} name='c'>C</Button>
          <Button onClick={updateCalcul} name='d'>D</Button>
          <Button onClick={updateCalcul} name='e'>E</Button>
          <Button onClick={updateCalcul} name='f'>F</Button>
        </ButtonGroup>

        <ButtonGroup variant='outlined' aria-label='outlined button group' size='large'>
          <Button onClick={updateCalcul} name='8'>8</Button>
          <Button onClick={updateCalcul} name='9'>9</Button>
          <Button onClick={updateCalcul} name='a'>A</Button>
          <Button onClick={updateCalcul} name='b'>B</Button>
        </ButtonGroup>

        <ButtonGroup variant='outlined' aria-label='outlined button group' size='large'>
          <Button onClick={updateCalcul} name='4'>4</Button>
          <Button onClick={updateCalcul} name='5'>5</Button>
          <Button onClick={updateCalcul} name='6'>6</Button>
          <Button onClick={updateCalcul} name='7'>7</Button>
        </ButtonGroup>

        <ButtonGroup variant='outlined' aria-label='outlined button group' size='large'>
          <Button onClick={updateCalcul} name='0'>0</Button>
          <Button onClick={updateCalcul} name='1'>1</Button>
          <Button onClick={updateCalcul} name='2'>2</Button>
          <Button onClick={updateCalcul} name='3'>3</Button>
        </ButtonGroup>

        <ButtonGroup variant='outlined' aria-label='outlined button group' size='large'>
          <Button onClick={updateCalcul} name='c'>C</Button>
          <Button onClick={updateCalcul} name='back'>BACK</Button>
        </ButtonGroup>

        {calcul}
      </header>
    </div>
  );
}

export default App;
