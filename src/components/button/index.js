import React from "react";
import './button.css';

const Button = ({variant, label, active, setActive}) => {

    let className='btn';
    let onclick;
    if (variant === 'sing') {
        className = 'btn'
        onclick = () => setActive(true);
    } else if (variant === 'out') {
        className = 'btn btn--out'
    } else if (variant === 'btn'){
        className = 'btn'
    }


    return (
        <button
            className={className}
            onClick={onclick}
        >{label}</button>
    )
}


export default Button;