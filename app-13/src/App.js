import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function App() {
  const [calcul, setCalcul] = React.useState(0);

  const [decimal, setDecimal] = React.useState(0);
  const [hexadecimal, setHexadecimal] = React.useState(0);
  const [binary, setBinary] = React.useState(0);

  const convertDecimalToBinary = (decimalNumber) => {
    if (!isNaN(decimalNumber)) return (decimalNumber >>> 0).toString(2);
    return false;
  };

  const numberClickHandler = (e) => {
    const value = e.target.value;
    console.log('Clic : ' + e.target.value);
    // if (value) {
    //   this.setCalcul(value);
    // }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <TextField
          id='outlined-basic'
          label='Decimal'
          variant='outlined'
          size='small'
          style={{ margin: '5px' }}
          onChange={(e) => setHexadecimal(e.target.value)}
        />
        <TextField
          id='outlined-basic'
          label='Hexadecimal'
          variant='outlined'
          size='small'
          style={{ margin: '5px' }}
          onChange={(e) => setHexadecimal(e.target.value)}
        />
        <TextField
          id='outlined-basic'
          label='Binaire'
          variant='outlined'
          size='small'
          style={{ margin: '5px' }}
          onChange={(e) => setHexadecimal(e.target.value)}
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

        <ButtonGroup
          variant='outlined'
          aria-label='outlined button group'
          size='large'
        >
          <Button>C</Button>
          <Button>D</Button>
          <Button>E</Button>
          <Button>F</Button>
        </ButtonGroup>
        <ButtonGroup
          variant='outlined'
          aria-label='outlined button group'
          size='large'
        >
          <Button onClick={numberClickHandler}>8</Button>
          <Button onClick={numberClickHandler}>9</Button>
          <Button>A</Button>
          <Button>B</Button>
        </ButtonGroup>
        <ButtonGroup
          variant='outlined'
          aria-label='outlined button group'
          size='large'
        >
          <Button onClick={numberClickHandler}>4</Button>
          <Button onClick={numberClickHandler}>5</Button>
          <Button onClick={numberClickHandler}>6</Button>
          <Button onClick={numberClickHandler}>7</Button>
        </ButtonGroup>
        <ButtonGroup
          variant='outlined'
          aria-label='outlined button group'
          size='large'
        >
          <Button>0</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
        </ButtonGroup>

        <ButtonGroup
          variant='outlined'
          aria-label='outlined button group'
          size='large'
        >
          <Button>C</Button>
          <Button>Erase</Button>
        </ButtonGroup>

        {calcul}
      </header>
    </div>
  );
}

export default App;
