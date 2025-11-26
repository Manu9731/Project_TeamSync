import React from "react";
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Login from "../../features/auth/pages/Login.jsx";
import App from "../App.jsx";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Login/>}></Route>
        </Route>
    )
)

export default Router