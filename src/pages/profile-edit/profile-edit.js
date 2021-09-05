import React from "react";
import Input from "../../components/input";



const ProfileEdit = () => {

    return (
        <div>
            <div>
                <span>Change login:</span>
                <Input label='Login*' placeholder='Enter login' variant='authModal'/>

            </div>
            <div>
                <span>Change avatar:</span>
                <input type="file" name="photoimg" id="photoimg" />
            </div>
        </div>
    )
};

export default ProfileEdit;