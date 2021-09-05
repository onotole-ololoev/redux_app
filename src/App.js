import React, {useState} from "react";
import {connect} from "react-redux";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";

import Header from "./components/header";
import PostList from "./components/postList";
import Button from "./components/button";
import Modal from "./components/modal";
import Input from "./components/input";
import Post from "./pages/post/post";



function App(props) {
    const [authModal, setAuthModal] = useState(false);
    const authModalToggle = () => setAuthModal(!authModal);

    console.log(props);

  return (
      <Router>
          <Header openAuthModal={authModalToggle}/>
          <Switch>
              <Route path="/">
                  <div className='wrapper'>
                      <div className='filter-box'>
                          <Input placeholder='Find...' variant='find' />
                          <Button variant='find' label='Find'/>
                      </div>
                      <PostList />
                      {authModal ? <Modal authModal={authModal} closeAuthModal={authModalToggle}/> : null}
                  </div>
              </Route>
              <Route path="/post">
                  <Post />
              </Route>
              <Redirect to="/404" />
          </Switch>
      </Router>

  );
}

const mapStateToProps = (state) => { return state}
const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);



