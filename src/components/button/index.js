import React from "react";
import { classNames as cx } from '../../helpers/utility';
import './button.css';


const Button = ({className, label, onClick, variant, type, ...props}) => {

const classNames = cx('btn', className, {
    [`btn--${variant}`]: variant});

    return (
        <button
            className={classNames}
            onClick={onClick}
            type={type}
            {...props}
        >{label}</button>
    )
}
export default Button;
