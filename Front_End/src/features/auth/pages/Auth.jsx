import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "../../../style/auth/auth.scss"

import heroLogo from "../../../assets/image/hero4.png"

//icons
import { RiTeamLine } from "react-icons/ri";

function Auth() {
  return (
    <>
        <div className='d-flex flex-column-reverse flex-lg-row h-100 position-relative' id='auth'>
            <div className='p-2 position-absolute logo'>
                <div>
                    <RiTeamLine className=' text-success'/>
                </div>
                <h5 className='text'>TeamSync</h5>
            </div>
            <div className=' col-lg-6 col-12 auth'>
                <h3>Welcome Back</h3>
                <h6 className=' text-gray'>Welcome back please enter your details</h6>
                <div className=' d-flex align-items-center gap-3 mb-2 p-1 px-1 link rounded'>
                    <NavLink to={"/login"} className={({isActive})=>`text-black fw-medium px-3 ${isActive?"link-button-active p-2 rounded":"link-button"}`}>Login</NavLink>
                    <NavLink to={"/register"} className={({isActive})=>`text-black fw-medium px-3 ${isActive?"link-button-active p-2 rounded":"link-button"}`}>Register</NavLink>
                </div>
                <Outlet/>
            </div>
            <div className=' col-lg-6 info col-12 p-2'>
                <div className='w-100 h-100  shadow-lg d-flex flex-column rounded position-relative'>
                    <div className='p-4  hero-heading'>
                        <h4 className='gradient-text text-center text-white'>
                            All-in-One Collaboration for Your Team
                        </h4>
                        <p>A single platform to communicate, organize, and get things done together.</p>
                    </div>
                    <img src={heroLogo} alt="" className=' flex-grow-1' />
                </div>
            </div>
        </div>
    </>
  )
}

export default Auth