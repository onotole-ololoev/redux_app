import React from "react";
import './header.css';
import Button from "../button";
import logo from '../../images/logo.png';

const Header = ({active, setActive}) => {

    return (
        <div className='header'>
            <div>
                <img src={logo} alt='logo' className='logo'/>
            </div>
            <div>
                <Button variant='signIn' label='Sign In' active={active} setActive={setActive}/>
                <Button variant='signUp' label='Sign Up' />
            </div>
        </div>
    )
}


export default Header;