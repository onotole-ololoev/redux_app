import React from "react";
import Button from "../../button";


const TextButtonsModal = () => {

    return (
        <div className='text-buttons'>
            <Button type='text' variant='text' label='Forgot your password?' />
            <Button type='text' variant='text' label='Create an account' />
        </div>
    )
}

export default TextButtonsModal;