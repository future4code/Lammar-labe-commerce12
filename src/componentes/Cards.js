import React from "react"


export function Cards (props){

    return (
        <div>
           <img src= {props.imagem}/>
           <h3>{props.nome}</h3>
           <h4>R${props.preco}</h4>
           <button>Adicionar ao carrinho</button>
        </div>

    )
}