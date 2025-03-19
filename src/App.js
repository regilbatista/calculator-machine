import React, { useState } from 'react';
import Button from './components/Button';
import Display from './components/Display';
import './App.css';

const App = () => {
  const [input, setInput] = useState('0');
  const [result, setResult] = useState(null);
  
  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const calculation = eval(input); // evaluating the input expression
        setResult(calculation);
        setInput(calculation.toString());
      } catch (e) {
        setResult('Error');
        setInput('0');
      }
    } else if (value === 'C') {
      setInput('0');
      setResult(null);
    } else {
      if (input === '0') {
        setInput(value);
      } else {
        setInput(input + value);
      }
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <Display value={input} />
        <div className="buttons">
          {['7', '8', '9', '/'].map((val) => <Button key={val} value={val} onClick={handleButtonClick} />)}
          {['4', '5', '6', '*'].map((val) => <Button key={val} value={val} onClick={handleButtonClick} />)}
          {['1', '2', '3', '-'].map((val) => <Button key={val} value={val} onClick={handleButtonClick} />)}
          {['0', '.', '=', '+'].map((val) => <Button key={val} value={val} onClick={handleButtonClick} />)}
          <Button value="C" onClick={handleButtonClick} />
        </div>
      </div>
      <footer className="footer">
        &copy; {new Date().getFullYear()} - by Regil Batista Todos los derechos reservados
      </footer>
    </div>
  );
};

export default App;
