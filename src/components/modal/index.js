import React, {useState} from "react";
import './modal.css'
import LoginForm from "./login-form";
import RegistrationForm from "./registration-form";


const Modal = ({authModal, closeAuthModal}) => {

    const [variant, setVariant] = useState('registration');
    const handleToggleVariant = (variant) => setVariant(variant);

    const chooseModalVariant = (variant) => {
        switch (variant) {
            case 'login':
                return <LoginForm closeAuthModal={closeAuthModal} toggleForm={handleToggleVariant}/>
            case 'registration':
                return <RegistrationForm closeAuthModal={closeAuthModal}/>
            default:
                return <LoginForm closeAuthModal={closeAuthModal}/>
        }
    }


    return (
        <div className={authModal ? 'modal active' : 'modal'} onClick={closeAuthModal}>
            <div className='modal__content' onClick={(e) => e.stopPropagation()}>
                {chooseModalVariant(variant, handleToggleVariant)}
            </div>
        </div>
    )
};

export default Modal;