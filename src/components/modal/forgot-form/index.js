import React from "react";
import Button from "../../button";
import Input from "../../input";



const ForgotForm = ({toggleForm}) => {

    return (
        <form className='modal-content__form'>
            <Input label='' placeholder='e-mail' variant='authModal'/>
            <div>
                <Button type='submit' label='Sent'/>
                <Button type='button' label='Back' variant='text' onClick={() => toggleForm('LOGIN')}/>
            </div>
        </form>
    )
};

export default ForgotForm;