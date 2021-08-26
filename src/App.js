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
import Filter from "./components/filter";
import Button from "./components/button";
import Modal from "./components/modal";



export default function App() {
    const [modalActive, setModalActive] = useState(false);

  return (
      <Router>
          <Route path="/">
              <Header active={modalActive} setActive={setModalActive}/>
              <div className='filter-box'>
                <Filter />
                <Button variant='find' label='Find'/>
              </div>
              <PostList />
              <Modal active={modalActive} setActive={setModalActive}/>
          </Route>
      </Router>

  );
}



