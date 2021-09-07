import React, {useState} from "react";
import PostHeader from "./components/post-header";
import PostImage from "./components/post-image";
import Article from "./components/article";
import Button from "../../components/button";
import {useHistory} from "react-router-dom";
import './post.css'
import Header from "../../components/header";
import Modal from "../../components/modal";




const Post = () => {

    const [authModal, setAuthModal] = useState(false);
    const authModalToggle = () => setAuthModal(!authModal);
    const router = useHistory();

    return (
        <>
        <Header openAuthModal={authModalToggle}/>
        <div className='page-wrapper'>
            <PostImage />
            <PostHeader />
            <Article />
            <Button type='button' label='Back' onClick={() => router.goBack()}/>
            {authModal ? <Modal authModal={authModal} closeAuthModal={authModalToggle}/> : null}
        </div>
        </>
    )
};

export default Post;