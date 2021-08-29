import React from "react";
import './header.css';
import Button from "../button";
import logo from '../../images/logo.png';

const Header = ({openAuthModal}) => {

    return (
        <div className='header'>
            <div>
                <img src={logo} alt='logo' className='logo'/>
            </div>
            <div>
                <Button label='Sign In' onClick={openAuthModal}/>
                <Button variant='up' label='Sign Up' />
            </div>
        </div>
    )
}


export default Header;