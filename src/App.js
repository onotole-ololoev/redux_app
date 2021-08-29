import React, {useState} from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from "./components/header";
import PostList from "./components/postList";
import Button from "./components/button";
import Modal from "./components/modal";
import Input from "./components/input";



export default function App() {
    const [authModal, setAuthModal] = useState(false);
    const authModalToggle = () => setAuthModal(!authModal);

  return (
      <Router>
          <Route path="/">
              <Header openAuthModal={authModalToggle}/>
              <div className='filter-box'>
                <Input placeholder='Find...' variant='find' />
                <Button variant='find' label='Find'/>
              </div>
              <PostList />
              <Modal authModal openAuthModal={authModalToggle}/>
          </Route>
      </Router>

  );
}



