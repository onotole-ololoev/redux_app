import React, {useState} from "react";
import './modal.css'
import LoginForm from "./login-form";
import RegistrationForm from "./registration-form";

const chooseModalVariant = (variant, closeAuthModal, handleToggleVariant) => {
    switch (variant) {
        case 'login':
            return <LoginForm closeAuthModal={closeAuthModal} toggleForm={handleToggleVariant}/>
        case 'registration':
            return <RegistrationForm closeAuthModal={closeAuthModal}/>
        default:
            return <LoginForm closeAuthModal={closeAuthModal}/>
    }
}


const Modal = ({authModal, closeAuthModal}) => {

    const [variant, setVariant] = useState('login');
    const handleToggleVariant = (variant) => setVariant(variant);

    return (
        <div className={authModal ? 'modal active' : 'modal'}>
            {chooseModalVariant(variant, handleToggleVariant, closeAuthModal)}
        </div>
    )
};

export default Modal;