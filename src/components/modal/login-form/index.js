import React, {useState} from "react";
import TextButtonsModal from "../../text-buttons";
import Button from "../../button";
import LoginInput from "../../login-input";
import './login-form.css';

const LoginForm = ({closeAuthModal, toggleForm, onFetchLogin}) => {

    const [state, setState] = useState({
        email: 'test@mail.ru',
        password: 'test'
    });

    const onClickSubmit = () => onFetchLogin(state)

    return (
        <form className='modal-content__form'>
            <LoginInput />
            <TextButtonsModal toggleForm={toggleForm} />
            <Button type='button' label='Log In' onClick={onClickSubmit}/>
        </form>
    )
};

export default LoginForm;