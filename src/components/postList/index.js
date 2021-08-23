import React from "react";
import './postList.css';
import PostItem from "../postItem";


const PostList = () => {

    return (
        <div className='postList'>
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
        </div>
    )
}


export default PostList;