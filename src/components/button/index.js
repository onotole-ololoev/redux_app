import React from "react";
import './button.css';

const Button = ({variant, label, active, setActive}) => {

    let className='btn',
        onclick,
        type;

    if (variant === 'signIn') {
        className = 'btn'
        onclick = () => setActive(true);
    } else if (variant === 'signUp') {
        className = 'btn btn--Up'
    } else if (variant === 'find'){
        className = 'btn btn--find'
    } else if (variant === 'submit'){
        type = 'submit'
    }


    return (
        <button
            className={className}
            onClick={onclick}
            type={type}
        >{label}</button>
    )
}


export default Button;