import './App.css';
import { RandomQuote } from './Components/RandomQuote/RandomQuote';
import React, {useState} from 'react'

function App() {

  const [currentBackgroundColor, setCurrentBackgroundColor] = useState(["#38858a"]);

  const backgroundColor = ["#ba4949", "#38858a", "#397097", "#3f384c"];

  const changeColor = () => {
    const color = ["#c15c5c", "#4c9196", "#4d7fa2", "#3f3434"];
    const select = color[Math.floor(Math.random() * color.length)];
    setCurrentBackgroundColor(select);

}

  return (
    <div className='whole' style={{
      backgroundColor: currentBackgroundColor 
  }}>
      <RandomQuote currentBackgroundColor={currentBackgroundColor} changeColor={changeColor} />
    </div>
  );
}

export default App;
