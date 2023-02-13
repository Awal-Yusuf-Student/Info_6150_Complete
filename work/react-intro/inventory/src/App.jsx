
import Button from './Button';

import { useState } from 'react';
import Reorder from './Reorder';
import './App.css' 
function App() {
  const [count, setCount] = useState(0);
  const [showButton, setShowButton] = useState(true) 

  let increaseCount = () => {
    setCount(count + 1);
    if(count === 0) return setShowButton(false);
  }

  let decreaseCount = () => {
    setCount(Math.max(count - 1, 0));
    if(count === 0) return setShowButton(true)
      return setShowButton(false);
  }

  let onReorder = () => {
    setCount(count + 5);
    setShowButton(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        </header>
        <img src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/291994/291994_p_main_image/291994" className="app-logo" alt="logo"/>
        <div className="buttons">
       <span> Inventory: <span className="number">{count}</span> &nbsp; </span>
          <Button title={"+"} click={increaseCount} /> &nbsp; &nbsp;
          <Button title={"-"} click={decreaseCount} /> &nbsp; &nbsp;
          {(count === 0) ? < Reorder  title={"Reorder"} click={onReorder}/> : null}
          
        </div>
        </div>
      
  );
}

export default App;
