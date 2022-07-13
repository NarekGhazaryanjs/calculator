/* eslint-disable no-eval */
import Card from "./components/Card/Card";
import classes from './ui/Global.module.css'
import './App.css'
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [display,setDisplay] = useState('')

  const AddToDisplay = (event) => {
    setDisplay(display + event.target.innerText)
  }


  const setResult = () => {
    setDisplay(eval(display))
  }

  const deleteLastDigit = () => {
     let newDisplay = Math.ceil(display) ;
     newDisplay = newDisplay + '';
     newDisplay =  newDisplay.substring(0, display.length - 1)
     setDisplay(newDisplay)
  }

  const mathPow = () => {
    setDisplay(display * display)
  }

  const sqrt = () => {
    setDisplay( Math.sqrt(Number(display)) )
  }

  const clearDisplay = () => {
    setDisplay('')
  }

  return (
    <Card className={classes.container}>
      <Card className={classes.header}>
          <span>{display}</span> 
      </Card>
      <Card className={classes.clear}>
          <Button onClick={clearDisplay}>Clear</Button>
      </Card>
         

      <Card className={classes.main}>
          <Button onClick={AddToDisplay}>1</Button>
          <Button onClick={AddToDisplay}>2</Button>
          <Button onClick={AddToDisplay}>3</Button>
          <Button onClick={AddToDisplay}>4</Button>
          <Button onClick={AddToDisplay}>5</Button>
          <Button onClick={AddToDisplay}>6</Button>
          <Button onClick={AddToDisplay}>7</Button>
          <Button onClick={AddToDisplay}>8</Button>
          <Button onClick={AddToDisplay}>9</Button>
          <Button onClick={AddToDisplay}>/</Button>
          <Button onClick={AddToDisplay}>*</Button>
          <Button onClick={AddToDisplay}>+</Button>
          <Button onClick={AddToDisplay}>-</Button>
          <Button onClick={AddToDisplay}>0</Button>
          <Button onClick={deleteLastDigit}>delete</Button>
          <Button onClick={mathPow}>pow</Button>
          <Button onClick={sqrt}>sqrt</Button>
          <Button onClick={setResult}>=</Button>
          
      </Card>
    </Card>
  )
}

export default App