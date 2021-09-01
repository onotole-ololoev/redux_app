import React from "react";
import Button from "../button";


const TextButtonsModal = ({toggleForm}) => {

    return (
        <div className='text-buttons'>
            <Button type='text' variant='text' label='Forgot your password?' />
            <Button type='text' variant='text' label='Create an account' onClick={toggleForm('registration')}/>
        </div>
    )
}

export default TextButtonsModal;