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
                <Button variant='sing' label='Sing In' active={active} setActive={setActive}/>
                <Button variant='out' label='Log Out' />
            </div>
        </div>
    )
}


export default Header;