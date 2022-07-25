import React from "react"
import { Card } from "./style"


export function Cards (props){
    


    return (
        <Card>
           <img src= {props.photo}/>
           <h3>{props.name}</h3>
           <h4>R${props.price}</h4>
           <button onClick = {() => {props.addCart(props.id)}}>Adicionar ao carrinho</button>
        </Card>

    )
}