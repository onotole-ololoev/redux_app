import React from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import appStore from "./store/appStore";

import Header from "./components/header";
import PostList from "./components/postList";
import Filter from "./components/filter";
import Button from "./components/button";

const store = appStore();

console.log(store.getState());

export default function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Contacts</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">

            </Route>
            <Route path="/users">

            </Route>
            <Route path="/">
              <Header />
              <div className='filter-box'>
                <Filter />
                <Button variant='btn' label='Поиск'/>
              </div>
              <PostList />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}



