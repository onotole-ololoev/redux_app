import React, {useState} from "react";
import './home.css';
import PostList from "../../components/postList";
import Button from "../../components/button";
import Modal from "../../components/modal";
import Input from "../../components/input";




const Home = () => {
    const [authModal, setAuthModal] = useState(false);
    const authModalToggle = () => setAuthModal(!authModal);

    return (
        <div className='wrapper'>
            <div className='filter-box'>
                <Input placeholder='Find...' variant='find' />
                <Button variant='find' label='Find'/>
            </div>
            <PostList />
            {authModal ? <Modal authModal={authModal} closeAuthModal={authModalToggle}/> : null}
        </div>
    );
}

export default Home;