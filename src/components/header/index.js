import React from "react";
import './header.css';
import Button from "../button";
import logo from '../../images/logo.png';
import {Link} from "react-router-dom";

const Header = ({openAuthModal}) => {

    return (
        <div className='header'>
            <div>
                <Link to='/'><img src={logo} alt='logo' className='logo'/></Link>
            </div>
            <div>
                <Button label='Sign In' onClick={openAuthModal}/>
                <Button variant='up' label='Sign Up' />
            </div>
        </div>
    )
}


export default Header;