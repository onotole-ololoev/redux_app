import React from "react";
import './input.css';
import {classNames as cx} from "../../helpers/utility";

const Input = ({label, error, onChange, value, placeholder, type, className, variant, ...props}) => {

    const classNames = cx('input', className, {
        [`input--${variant}`]: variant});

    return (

        <div className='input-box'>
            {label ? <label className='input-label'>{label}</label> : null}
            <input className={classNames} placeholder={placeholder} onChange={onChange} value={value} type={type}/>
            {error ? <div>{error}</div> : null}
        </div>

    )
};
export default Input;