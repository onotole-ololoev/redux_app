import React, {useState} from "react";
import {connect} from "react-redux";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/header";
import Routes from "./routes";



function App(props) {
    // const [authModal, setAuthModal] = useState(false);
    // const authModalToggle = () => setAuthModal(!authModal);

    console.log(props);

  return (
      <Router>
          {/*<Header openAuthModal={authModalToggle}/>*/}
          <Routes />
      </Router>

  );
}

const mapStateToProps = (state) => { return state}
const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);



