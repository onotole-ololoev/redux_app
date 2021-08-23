import React from "react";
import './button.css';

const Button = ({variant, label}) => {

    let className='btn';
    if (variant === 'sing') {
        className = 'btn';
    } else if (variant === 'out') {
        className = 'btn btn--out'
    } else if (variant === 'btn'){
        className = 'btn'
    }

    return (
        <button
            className={className}
            onClick
        >{label}</button>
    )
}


export default Button;