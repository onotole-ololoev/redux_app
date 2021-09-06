import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Post from "../pages/post/post";
import Error from "../pages/404/404";
import Home from "../pages/home";
import ProfileEdit from "../pages/profile-edit/profile-edit";

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/post">
                <Post />
            </Route>
            <Route path="/profileedit">
                <ProfileEdit />
            </Route>
            <Route path="/404">
                <Error />
            </Route>
            <Redirect to="/404" />
        </Switch>
    )
};

export default Routes;