import React from "react";
import Input from "../../components/input";
import Button from "../../components/button";



const ProfileEdit = () => {

    return (
        <div>
            <div>
                <span>Change login:</span>
                <Input label='Login*' placeholder='Enter login' variant='authModal'/>

            </div>
            <div>
                <span>Change avatar:</span>
                <input type="file" name="photo-img" id="photo-img" />
            </div>
            <Button type='submit' label='Sent'/>
        </div>
    )
};

export default ProfileEdit;