import React from "react";
import Input from "../input";

const LoginInput = () => {

    return (
        <div>
            <Input label='Login*' placeholder='Enter login' variant='authModal'/>
            <Input  label='Password*' placeholder='Enter password' variant='authModal' type='password'/>
        </div>

    )
};

export default LoginInput;