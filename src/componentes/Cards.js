import React from "react"


export function Cards (props){
    


    return (
        <div>
           <img src= {props.photo}/>
           <h3>{props.name}</h3>
           <h4>R${props.price}</h4>
           <button onClick = {() => {props.addCart(props.id)}}>Adicionar ao carrinho</button>
        </div>

    )
}