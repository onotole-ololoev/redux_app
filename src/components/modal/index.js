import React, {useState} from "react";
import './modal.css'
import LoginForm from "./login-form";
import RegistrationForm from "./registration-form";
import ModalHeader from "./modal-header";

const chooseModalVariant = (variant, closeAuthModal, handleToggleVariant) => {
    switch (variant) {
        case 'LOGIN':
            return <LoginForm closeAuthModal={closeAuthModal} toggleForm={handleToggleVariant}/>
        case 'REGISTRATION':
            return <RegistrationForm closeAuthModal={closeAuthModal} toggleForm={handleToggleVariant}/>
        default:
            return <LoginForm closeAuthModal={closeAuthModal}/>
    }
}

const modalTitle = {
    'LOGIN': 'Login',
    'REGISTRATION': 'Registration'

}

const Modal = ({authModal, closeAuthModal}) => {

    const [variant, setVariant] = useState('LOGIN');
    const handleToggleVariant = (variant) => setVariant(variant);

    return (
        <div className={authModal ? 'modal active' : 'modal'}>
            <div className='modal-wrapper'>
                <ModalHeader closeAuthModal={closeAuthModal} title={modalTitle[variant]}/>
                <div className='modal-content'>
                    {chooseModalVariant(variant, closeAuthModal, handleToggleVariant)}
                </div>
            </div>
        </div>
    )
};

export default Modal;