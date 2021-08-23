import React from "react";
import './header.css';
import Button from "../button";

const Header = () => {

    return (
        <div className='header'>
            <div className='logo'></div>
            <img src='../images/logo.png' alt='logo' />
            <Button variant='sing' label='Sing In'/>
        </div>
    )
}


export default Header;