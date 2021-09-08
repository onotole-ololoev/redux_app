import React from "react";
import './home.css';
import PostList from "../../components/postList";
import Button from "../../components/button";
import Input from "../../components/input";






const Home = () => {

        return (
        <div className='wrapper'>
            <div className='filter-box'>
                <Input placeholder='Find...' variant='find' />
                <Button variant='find' label='Find'/>
            </div>
            <PostList />
        </div>
    );
}

export default Home;