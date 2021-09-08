import React from "react";
import PostHeader from "./components/post-header";
import Article from "./components/article";
import Button from "../../components/button";
import {useHistory} from "react-router-dom";
import './post.css'





const Post = () => {

    const router = useHistory();

    return (
        <div className='page-wrapper'>
            <PostHeader />
            <Article />
            <Button type='button' label='Back' onClick={() => router.goBack()}/>
        </div>
    )
};

export default Post;