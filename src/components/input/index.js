import React from "react";
import './input.css';

const Input = ({variant}) => {

    let type,
        placeholder;
    if (variant === 'login') {
        type = 'text';
        placeholder = 'Enter login'
    } else if (variant === 'password') {
        type = 'password';
        placeholder = 'Enter password'
    }

    return (
        <input className='input' type={type} placeholder={placeholder}/>
    )
};
export default Input;