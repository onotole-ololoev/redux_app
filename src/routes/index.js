import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Error from "../pages/404/404";
import Home from "../pages/home";
import Post from "../pages/post";
import ProfileEdit from "../pages/profile-edit";
import AddPost from "../pages/add-post";

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
            <Route path="/addpost">
                <AddPost />
            </Route>
            <Route path="/404">
                <Error />
            </Route>
            <Redirect to="/404" />
        </Switch>
    )
};

export default Routes;