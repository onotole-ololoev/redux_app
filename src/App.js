import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/header";
import Routes from "./routes";
import Modal from "./components/modal";
import {login} from "./API/v1";
import onLogin from "./reducers/impl/onLogin";



function App({onFetchLogin}) {
    const [authModal, setAuthModal] = useState(false);
    const authModalToggle = () => setAuthModal(!authModal);

    // useEffect(() => {
    //     login()
    // }, []);


  return (
      <Router>
          <Header openAuthModal={authModalToggle}/>
          {authModal ? <Modal authModal={authModal} closeAuthModal={authModalToggle} onFetchLogin={onFetchLogin}/> : null}
          <Routes />
      </Router>

  );
}

const mapStateToProps = (state) => { return state}
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchLogin: (data) => {
            dispatch(onLogin(data))
        }
    }}

export default connect(mapStateToProps, mapDispatchToProps)(App);



