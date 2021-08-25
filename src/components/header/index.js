import React from "react";
import './header.css';
import Button from "../button";
import logo from '../../images/logo.png';

const Header = () => {

    return (
        <div className='header'>
            <div>
                <img src={logo} alt='logo' className='logo'/>
            </div>
            <Button variant='sing' label='Sing In'/>
        </div>
    )
}


export default Header;