import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const LoginForm = ({setislogedin}) => {


    const navigate = useNavigate();
    
    const [formdata,setformdata] = useState({
        email:"" , password :""
    })

    const [showpassword , setshowpassword] = useState(false);

    function changeHandler(event){
        setformdata((prevdata)=>(  // arrow ke bad agr curly brackets ki jgh round brackets rkha return likhne ki jarurat nhi hai .
            {
                ...prevdata,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setislogedin(true);
        toast.success("logged in successfully");
        // ab logged in kiya to dashboard pe jao isliye naviagate la use karenge
        navigate("/dashboard")
    }
  return (
    
    <form onSubmit={submitHandler}  className="flex flex-col w-full gap-y-4 mt-6">

        <label className='w-full'>  {/* pehle hum input lable alg alg rkhte hai aur label me htmlfor likh ke link krte the but yha direct label ke ander hi input likh diya jisse htmlfor likhne ki jarurat nhi hai vo apne aap hi link ho jata hai */}
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Email Address <sup className='text-pink-200'>*</sup>
            </p>

            <input 
                required // must input
                type='email'
                name='email'
                value={formdata.email}
                placeholder='Enter email id'
                onChange={changeHandler}
                className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-1 border-richblack-25"
            />
        </label>


        <label className='w-full relative'>

            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Password <sup className='text-pink-200'>*</sup>
            </p>    

            <input 
                required // must input
                type={showpassword ? ('text') : ('password')}   //  password in input field dono trh se behave kr rhi hai text bhi aur password bhi i.e dot dot dot ab showpassword ka variable rkh liya agr true hua to txt aur false hua to password(dot) hence ek hi input field do type de diye
                name='password'
                value={formdata.password}
                placeholder='Enter password'
                onChange={changeHandler}
                className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-1 border-richblack-25"
            />

            <span onClick={()=>setshowpassword((prev) => !prev)}  className="absolute right-3 top-[38px] cursor-pointer ">
                {showpassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to='#'>
                <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password </p>
            </Link>

        </label>

        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">
            Sign In
        </button>
    </form>
  )
}

export default LoginForm