import React from "react";
import { Outlet } from "react-router-dom";


function Home(){

    return (
        <>
            chat
            <Outlet/>  
        </>
    )


}

export default Home