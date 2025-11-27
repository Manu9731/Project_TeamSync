import React from "react";
import {createBrowserRouter, createRoutesFromElements, Navigate, Route} from "react-router-dom"
import Login from "../../features/auth/pages/Login.jsx";
import Register from "../../features/auth/pages/Register.jsx";
import Auth from "../../features/auth/pages/Auth.jsx";
import App from "../App.jsx";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="/" element={<Auth/>} >
                <Route index element={<Navigate to={"/login"}/>}></Route>
                <Route path="login"  element={<Login/>} ></Route>
                <Route path="register" element={<Register/>}></Route>
            </Route>
        </Route>
    )
)

export default Router