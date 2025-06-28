import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignUpForm = ({setislogedin}) => {

    const navigate = useNavigate();

    const [formdata,setformdata] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:""
    })

    const [showCreatePass, setShowCreatePass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const [accountType, setAccountType] = useState("student");

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

        if(formdata.confirmpassword !== formdata.password){
            toast.error("Password do not matched ! ")
            return;
        }

        // user ne account create kiya mtlb logged in ho gya isliye islogedin ko true kr diya
        setislogedin(true);

        toast.success('Account Created !');

        // account create hone ke bad just accoun ka data check kr rhe hai taki pta chale sb proper work kr rha hai
        const Accountdata = {
            ...formdata
        }

        const finaldata ={
            ...Accountdata,
            accountType
        }

        console.log("printing final account ka data ");
        console.log(finaldata);

        // ab account create krne ke bad dashboard pe chle jao 
        navigate("/dashboard");
        
    }

  return (
    <div>

        {/* student-instructoe tab */}
        <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
            <button
                onClick={() => setAccountType("student")}
                className={`${
                    accountType === "student"
                    ? "bg-richblack-900 text-richblack-5"
                    : "bg-transparent text-richblack-200 "
                } py-2 px-5 rounded-full transition-all cursor-pointer`}
                >
                Student
                </button>
                <button
                onClick={() => setAccountType("instructor")}
                className={`${
                    accountType === "instructor"
                    ? "bg-richblack-900 text-richblack-5"
                    : "bg-transparent text-richblack-200 "
                } py-2 px-5 rounded-full transition-all cursor-pointer`}
                >
                Instructor
            </button>
      </div>

        <form onSubmit={submitHandler}>

            {/* first and last name div      */}
            <div className='flex gap-x-4 mt-[20px]'>
                <label className='w-full'>

                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name <sup className='text-pink-200'>*</sup></p>

                    <input
                        required
                        type='text'
                        name='firstname'
                        value={formdata.firstname}
                        placeholder='First Name'
                        onChange={changeHandler}
                        className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-1 border-richblack-25"
                    />

                </label>

                <label className='w-full'>

                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name <sup className='text-pink-200'>*</sup></p>

                    <input
                        required
                        type='text'
                        name='lastname'
                        value={formdata.lastname}
                        placeholder='Last Name'
                        onChange={changeHandler}
                        className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-1 border-richblack-25"
                    />

                </label>

            </div>

                {/* email address tab */}
                
            <div className='mt-[20px]'>
                <label className='w-full'>

                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address <sup className='text-pink-200'>*</sup></p>

                    <input
                        required
                        type='email'
                        name='email'
                        value={formdata.email}
                        placeholder='Enter the Email'
                        onChange={changeHandler}
                        className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-1 border-richblack-25"
                    />

                </label>

            </div>
            
             {/* create and confirm password  */}

            <div className='flex gap-x-4 mt-[20px]'>

                <label className='relative w-full'>

                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password <sup className='text-pink-200'>*</sup></p>

                    <input
                        required
                        type={showCreatePass ? 'text' : 'password'}
                        name='password'
                        value={formdata.password}
                        placeholder='Enter Password'
                        onChange={changeHandler}
                        className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-1 border-richblack-25"
                    />

                    <span onClick={()=>setShowCreatePass((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer ">
                        {showCreatePass ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                    </span>

                </label>


                <label className='relative w-full'>

                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password <sup className='text-pink-200'>*</sup></p>

                    <input
                        required
                        type={showConfirmPass ? 'text' : 'password'}
                        name='confirmpassword'
                        value={formdata.confirmpassword}
                        placeholder='Enter confirm Password'
                        onChange={changeHandler}
                        className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-1 border-richblack-25"
                    />

                    <span onClick={()=>setShowConfirmPass((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer ">
                        {showConfirmPass ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                    </span>

                </label>
            </div>

            <button className=" w-full bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">
                Create Account
            </button>

        </form>
        
    </div>
  )
}

export default SignUpForm