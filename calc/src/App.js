import Card from "./components/Card/Card";
import classes from './ui/Global.module.css'
import './App.css'
import Button from "./components/Button";

const App = () => {
  return (
    <Card className={classes.container}>
      <Card className={classes.header}>
          
      </Card>

      <Card className={classes.main}>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>/</Button>
          <Button>*</Button>
          <Button>+</Button>
          <Button>-</Button>
          <Button>0</Button>
          <Button>delete</Button>
          <Button>Clear</Button>
          <Button>sqrt</Button>
          <Button>pow</Button>
      </Card>
    </Card>
  )
}

export default App