import React, {useState} from "react"
import '../App.css';

export function CarrinhoDeProdutos (props){



    return (
        <div className="Carrinho">
            <img src= {props.photo}/>
            <span>{props.name}</span>
            <span>Quantidade: {props.quantity}</span>
            <span>R${props.price * props.quantity}</span>
            <button onClick = {() => {props.removeCart(props.id)}}>X</button>
        </div>

    )
}