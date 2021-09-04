import React from "react";
import Button from "../button";


const TextButtonsModal = ({toggleForm}) => {

    return (
        <div className='text-buttons'>
            <Button type='button' variant='text' label='Forgot your password?' onClick={() => toggleForm('FORGOT')}/>
            <Button type='button' variant='text' label='Create an account' onClick={() => toggleForm('REGISTRATION')}/>
        </div>
    )
}

export default TextButtonsModal;