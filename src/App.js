import React from 'react';
import { useState } from 'react'
import { Filter } from './components/filter';

function App() {
  const [inputValMin, setInputValMin] = useState(-Infinity)
  const [inputValMax, setInputValMax] = useState(Infinity)
  const [query, setQuery] = useState("")




  return (
    <div className="App">
      <Filter setInputValMax = {setInputValMax} setInputValMin = {setInputValMin} setQuery = {setQuery}></Filter>
    </div>
  );
}

export default App;
