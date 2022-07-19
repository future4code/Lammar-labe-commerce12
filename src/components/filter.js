import React from 'react'
import { Form } from '../style.js'

export function Filter (props) {
    const setInputValMin = props.setInputValMin
    const setInputValMax = props.setInputValMax
    const setQuery = props.setQuery

    function handleInputMin (e) {
        setInputValMin(e.target.value);
    }
    function handleInputMax (e) {
        setInputValMax(e.target.value);
    }
    function handleQuery (e) {
        setQuery(e.target.value);
    }

    return <Form>
        <label> Valor mínimo </label>
        <input onChange = {handleInputMin} type = "number"></input>
        <label> Valor máximo </label>
        <input onChange = {handleInputMax}  type = "number"></input>
        <label> Busca por Nome </label>
        <input onChange={handleQuery} type = "text"></input>
        <input type = "reset"></input>


    </Form>

}