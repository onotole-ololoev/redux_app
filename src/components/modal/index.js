import React, {useState} from "react";
import './modal.css'
import LoginForm from "./login-form";
import RegistrationForm from "./registration-form";
import ModalHeader from "./modal-header";

const chooseModalVariant = (variant, closeAuthModal, handleToggleVariant) => {
    switch (variant) {
        case 'Login':
            return <LoginForm closeAuthModal={closeAuthModal} toggleForm={handleToggleVariant}/>
        case 'Registration':
            return <RegistrationForm closeAuthModal={closeAuthModal}/>
        default:
            return <LoginForm closeAuthModal={closeAuthModal}/>
    }
}


const Modal = ({authModal, closeAuthModal}) => {

    const [variant, setVariant] = useState('Login');
    const handleToggleVariant = (variant) => setVariant(variant);

    return (
        <div className={authModal ? 'modal active' : 'modal'}>
            <div className='modal-wrapper'>
                <ModalHeader closeAuthModal={closeAuthModal} variant={variant}/>
                <div className='modal-content'>
                    {chooseModalVariant(variant, handleToggleVariant, closeAuthModal)}
                </div>
            </div>
        </div>
    )
};

export default Modal;