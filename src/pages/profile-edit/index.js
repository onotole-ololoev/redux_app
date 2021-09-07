import React from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import './profileedit.css';
import {useHistory} from "react-router-dom";



const ProfileEdit = () => {
    const router = useHistory();

    return (
        <div className='page-wrapper'>
            <div className='profile-box'>
                <span>Change login:</span>
                <Input label='' placeholder='Enter login' variant='authModal'/>

            </div>
            <div>
                <span>Change avatar:</span>
                <input type="file" name="photo-img" id="photo-img" />
            </div>
            <Button type='submit' label='Sent'/>
            <Button type='button' label='Back' onClick={() => router.goBack()}/>
        </div>
    )
};

export default ProfileEdit;