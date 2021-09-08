import React from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import './add-post.css';
import {useHistory} from "react-router-dom";






const AddPost = () => {

    const router = useHistory();

    return (
        <div className='page-wrapper'>
            <form className='add-post--form'>
                <h2>Write your new post</h2>
                <Input label="" placeholder='Title...' variant='addtitle'/>
                <textarea placeholder='New post...' className='add-post--area'></textarea>
                <Button type='submit' label='Post It'/>
            </form>
            <Button type='submit' label='Back' onClick={() => router.goBack()}/>
        </div>
    );
}

export default AddPost;