import React from 'react';
import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Cards} from "./componentes/Cards"
import { Filter } from './componentes/Filter';
import { arrayDeProdutos } from './componentes/Produtos'
import {CarrinhoDeProdutos} from "./componentes/CarrinhoDeProdutos"


function App() {
  const [inputValMin, setInputValMin] = useState(-Infinity)
  const [inputValMax, setInputValMax] = useState(Infinity)
  const [query, setQuery] = useState("")
  const array = [...arrayDeProdutos]
  const [listaDeProdutos, setListaDeProdutos] = useState([...arrayDeProdutos])
  





  function callback (product) {
    return <Cards addCart = {addCart} key = {product.id} id = {product.id} photo = {product.photo} price = {product.price} name = {product.name} />
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
  
  const listaFiltrada = array.filter(filtroMin).filter(filtroMax).filter(filtroBusca).map(callback)

  function filtroQuantidade (value) { 
    return value.quantity >= 1;     
  }

  function callbackCarrinho (cartProduct){
    return <CarrinhoDeProdutos removeCart = {removeCart} key = {cartProduct.id} id = {cartProduct.id} photo = {cartProduct.photo} quantity = {cartProduct.quantity} price = {cartProduct.price * cartProduct.quantity} name = {cartProduct.name} />
  }

  const produtosCarrinho = listaDeProdutos.filter(filtroQuantidade).map(callbackCarrinho)

    function addCart (id) {
    setListaDeProdutos(listaDeProdutos.map(value => 
      { 
        if (value.id === id) {
          return {...value, quantity : (value.quantity + 1)}
        }
        return {...value}
      }
      ))
  }

  function removeCart (id) {
    setListaDeProdutos(listaDeProdutos.map(value => 
      { 
        if (value.id === id) {
          return {...value, quantity : (value.quantity - 1)}
        }
        return {...value}
      }
      ))

  }





    

  
  return (
    <div className="App">
      <Filter setInputValMax = {setInputValMax} setInputValMin = {setInputValMin} setQuery = {setQuery} array = {array}></Filter>
      {listaFiltrada}
      {produtosCarrinho}
    </div>
  );
}

export default App;
