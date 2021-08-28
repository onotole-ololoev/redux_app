import React from "react";
import './input.css';

const Input = ({label, error, onChange, value, placeholder, ...props}) => {


    return (

        <div>
            {label ? <label>{label}</label> : null}
            <input className='input' placeholder={placeholder} onChange={onChange} value={value}/>
            {error ? <div>{error}</div> : null}
        </div>



    )
};
export default Input;