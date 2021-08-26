import React from "react";
import './modal.css'

const Modal = ({active, setActive}) => {

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal--content' onClick={(e) => e.stopPropagation()}>
                <p>nglkkb fkgj fgb klfg fkl fk bfgb flgbflbflgbfg</p>
            </div>
        </div>
    )
};

export default Modal;