import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Cards} from "./componentes/Cards"
import { Filter } from './components/Filter';

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
