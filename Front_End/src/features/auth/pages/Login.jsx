import React, { useState } from "react";
import "../../../style/auth/login.scss"
import { useForm } from "react-hook-form";

//icons
import { CiMail  } from "react-icons/ci";
import { BiHide, BiShow } from "react-icons/bi";
 
//scss
import "../../../style/auth/login.scss"
import { useNavigate } from "react-router-dom";



const Login = () => {

    const [showPassword, setShowPassword] = useState(false)

    const nav = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
        watch,
    } = useForm(
        {
            mode:"onChange"
        }
    )

    function showOrHidePassword(){
        setShowPassword(prev=>!prev)
    }

    function submitFormData(data){
    //    window.location.assign("https://www.linkedin.com/in/manu-m-g-3a8a01211")
    nav("/product")

    }
    
    return(
        <form onSubmit={handleSubmit(submitFormData)} className=" form w-50 d-flex flex-column gap-1" id="login-form">
            <div className=" d-flex align-items-center gap-2 p-2 pb-1 position-realtive">
                <div className=" position-absolute p-1 px-2 icon ">
                        <CiMail className="text-black fs-5"/>
                </div>
                <input type="email" className="form-control p-2 ps-5 pe-5 rounded-3" placeholder="Email address" {...register("email", {
                     required: "Email is required"
                })} />
            </div>
            {errors.email && <small className=" text-danger px-2">{errors.email.message}</small>}
            
            <div className=" d-flex align-items-center gap-2 p-2 pb-1 position-realtive">
                <input type={!showPassword?"password":"text"} className="form-control p-2 ps-5 pe-5 rounded-3" placeholder="Password" {...register("password", {
                    required : "Password is required"
                })} />
                <div className=" position-absolute p-1 px-2 icon passcode" onClick={showOrHidePassword} >
                        {!showPassword ? <BiHide className="text-black fs-5"/> : <BiShow className="text-black fs-5"/> }
                </div>
            </div>
            {errors.password && <small className=" text-danger px-2">{errors.password.message}</small>}

            <div className="mt-3 p-2" >
                <button type="submit" className="submit btn btn-dark w-100" >Login</button>
            </div>
            
        </form>
    )
}

export default Login