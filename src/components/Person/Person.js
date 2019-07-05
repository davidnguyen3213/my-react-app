import React from 'react';
import './Person.scss'
const person = (props) =>{
    const style = {
        cursor: 'pointer',
        padding: '9px',
        backgroundColor: 'blue'
    }
    return (
    <div className="card"> 
        <p onClick = {props.click}>Name:  {props.name} / Age: {props.age}</p>
        <p>{props.children}</p> 
        <input type = 'text' onChange = {props.changed} ></input>
        <hr/>
        <button style = {style}> click</button>
    </div>
    )
};

export default person;