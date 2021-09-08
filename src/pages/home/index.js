import React from "react";
import './home.css';
import PostList from "../../components/postList";
import Button from "../../components/button";
import Input from "../../components/input";
import {useHistory} from "react-router-dom";






const Home = () => {

    const router = useHistory();

        return (
        <div className='wrapper'>
            <div className='home-header'>
                <div className='home-header__search'>
                    <Input placeholder='Find...' variant='find' />
                    <Button variant='find' label='Find'/>
                </div>
                <Button label='New post' onClick={() => router.push('/addpost')}/>
            </div>

            <PostList />
        </div>
    );
}

export default Home;