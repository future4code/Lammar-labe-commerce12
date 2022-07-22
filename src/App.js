import React from 'react';
import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Cards} from "./componentes/Cards"
import { Filter } from './componentes/Filter';
import { arrayDeProdutos } from './componentes/Produtos'


function App() {
  const [inputValMin, setInputValMin] = useState(-Infinity)
  const [inputValMax, setInputValMax] = useState(Infinity)
  const [query, setQuery] = useState("")
  const [order, setOrder] = useState("asc")
  const array = [...arrayDeProdutos]

  function callback (product) {
    return <Cards key = {product.id} photo = {product.photo} price = {product.price} name = {product.name} />
  }

  function filtroMin (product){
    return product.price >= inputValMin
  }
  function filtroMax (product){
    return product.price <= inputValMax
  }

  function filtroBusca (product){
    return product.name.includes(query)
  }

  const ordenação = (a, b) => {
    if (order === "asc") {
      return a.price - b.price
    } else {
      return b.price - a.price
    }
  }
  
  const listaFiltrada = array.filter(filtroMin).filter(filtroMax).filter(filtroBusca).sort(ordenação).map(callback)


  
  return (
    <div className="App">
      <Filter order={order} setOrder={setOrder} setInputValMax = {setInputValMax} setInputValMin = {setInputValMin} setQuery = {setQuery}></Filter>
      {listaFiltrada}
    </div>
  );
}

export default App;
