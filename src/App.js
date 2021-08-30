import React, {useState} from "react";
import {connect} from "react-redux";
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



function App(props) {
    const [authModal, setAuthModal] = useState(false);
    const authModalToggle = () => setAuthModal(!authModal);

    console.log(props);

  return (
      <Router>
          <Route path="/">
              <Header openAuthModal={authModalToggle}/>
              <div className='filter-box'>
                <Input placeholder='Find...' variant='find' />
                <Button variant='find' label='Find'/>
              </div>
              <PostList />
              <Modal authModal={authModal} closeAuthModal={authModalToggle}/>
          </Route>
      </Router>

  );
}

const mapStateToProps = (state) => { return state}
const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);



