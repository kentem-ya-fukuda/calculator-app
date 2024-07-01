import React, { useState } from 'react';
import './styles.css';

const Calculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | string>('');

  const handleInput = (value: string) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      const evalResult = eval(input);
      if (evalResult === Infinity || isNaN(evalResult)) {
        throw new Error('Invalid operation');
      }
      setResult(evalResult);
    } catch {
      setResult('Error');
    }
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="display">
        <div>{input || '0'}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('+')}>+</button>
        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('-')}>-</button>
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('*')}>*</button>
        <button onClick={() => handleInput('0')}>0</button>
        <button onClick={() => handleInput('.')}>.</button>
        <button onClick={() => handleInput('/')}>/</button>
        <button onClick={calculate}>=</button>
        <button onClick={clear} className="clear">C</button>
      </div>
    </div>
  );
};

export default Calculator;
