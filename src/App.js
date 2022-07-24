import React from 'react';
import {useState, useEffect} from 'react';
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
  const [order, setOrder] = useState("asc")
  const array = [...arrayDeProdutos]
  const [listaDeProdutos, setListaDeProdutos] = useState([...arrayDeProdutos])
  const [carrinhoStorage, setCarrinhoStorage] = useState([])
  


  useEffect( () => {
    if (localStorage.getItem("carrinho") === null) {
      localStorage.setItem("carrinho",JSON.stringify(listaDeProdutos))
    }
    else {
      setCarrinhoStorage(JSON.parse(localStorage.getItem("carrinho")))
      setListaDeProdutos(JSON.parse(localStorage.getItem("carrinho")))
    }
  }, [])


  useEffect( () => {
    localStorage.setItem("carrinho",JSON.stringify(listaDeProdutos) )
    setCarrinhoStorage(JSON.parse(localStorage.getItem("carrinho")))
  }, [listaDeProdutos])




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

  const ordenação = (a, b) => {
    if (order === "asc") {
      return a.price - b.price
    } else {
      return b.price - a.price
    }
  }
  
  const listaFiltrada = array.filter(filtroMin).filter(filtroMax).filter(filtroBusca).sort(ordenação).map(callback)

  function filtroQuantidade (value) { 
    return value.quantity >= 1;     
  }

  function callbackCarrinho (cartProduct){
    return <CarrinhoDeProdutos removeCart = {removeCart} key = {cartProduct.id} id = {cartProduct.id} photo = {cartProduct.photo} quantity = {cartProduct.quantity} price = {cartProduct.price * cartProduct.quantity} name = {cartProduct.name} />
  }

  const produtosCarrinho = carrinhoStorage.filter(filtroQuantidade).map(callbackCarrinho)

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
      <Filter order={order} setOrder={setOrder} setInputValMax = {setInputValMax} setInputValMin = {setInputValMin} setQuery = {setQuery}></Filter>
      {listaFiltrada}
      {produtosCarrinho}
    </div>
  );
}

export default App;
