import { useState } from 'react';
import './App.css';
import { TextField, Stack, Button } from '@mui/material';


function App() {
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [year, setYear] = useState(0)
  const [rate, setRate] = useState(0)
  const handleInterest = (e) => {
    e.preventDefault()
    if (!principle || !rate || !year) {
      alert("Enter the required data")
    } else {
      setInterest(principle*rate*year/100)
    }
  }
  const handleReset = () => {
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
  }
  const [isPrincipalValid, setPrincipalValid] = useState(true)
  const [isRateValid, setRateValid] = useState(true)
  const [isYearValid, setYearValid] = useState(true)
  const [buttonValid, setButtonValid] = useState(true)

  const validateInput = (e) => {
    const {value, name} = e.target
    if (!!value.match(/^[0-9]+$/)) {
      if (name === "principal") {
        setPrinciple(value)
        setPrincipalValid(true)
        setButtonValid(true)
      }
      else if (name === "rate") {
        setRate(value)
        setRateValid(true)
        setButtonValid(true)
      }
      else {
        setYear(value)
        setYearValid(true)
        setButtonValid(true)
      }
    } else {
      if (name === "principal") {
        setPrinciple(value)
        setPrincipalValid(false)
        setButtonValid(false)
      }
      else if (name === "rate") {
        setRate(value)
        setRateValid(false)
        setButtonValid(false)
      }
      else {
        setYear(value)
        setYearValid(false)
        setButtonValid(false)
      }
    }
  }
  
  return (
    <div className='interestWindow bg-dark d-flex justify-content-center align-items-center' >
      <div className='bg-light rounded-3 p-3' style={{width: '400px'}}>
        <div className='heading'>
          <h3>Simple Calculator</h3>
          <p>Calculate you simple interest easily</p>
        </div>
        <div className='interest-card d-flex flex-column w-100 justify-content-center align-items-center bg-warning rounded-3 p-3 shadow'>
          <h2>Rs {' '} {interest}</h2>
          <p>Total Simple Interest</p>
        </div>
        <form className='interestForm' onSubmit={handleInterest}>
          <div className='mb-3'>
            <TextField name='principal' id="outlined-basic" label="Principal Amount" variant="outlined" className='w-100' value={principle || ""} onChange={(e) => validateInput(e)} />
          </div>
          {
            !isPrincipalValid &&
            <div className='mb-3 text-danger'>
            Invalid input
            </div>
          }

          <div className='mb-3'>
            <TextField name='rate' id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" className='w-100' value={rate || ""} onChange={(e) => validateInput(e)} />
          </div>
          {
            !isRateValid &&
            <div className='mb-3 text-danger'>
            Invalid input
            </div>
          }

          <div className='mb-3'>
            <TextField name='year' id="outlined-basic" label="Time period (Yr)" variant="outlined" className='w-100' value={year || ""} onChange={(e) => validateInput(e)} />
          </div>
          {
            !isYearValid &&
            <div className='mb-3 text-danger'>
            Invalid input
            </div>
          }

          <div>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" style={{width: '200px', height: '75px'}} type='submit' disabled={buttonValid?false:true}>Calculate</Button>
            <Button variant="outlined" style={{width: '200px', height: '75px'}} onClick={handleReset}>Reset</Button>
          </Stack>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
