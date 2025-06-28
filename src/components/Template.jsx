import React from 'react'
import FrameImage from '../assets/frame.png'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import { FcGoogle } from 'react-icons/fc'

const Template = ({title , desc1 , desc2 , image , formtype , setislogedin}) => {  // form ko chode ke sara content same hai login aur logout page ka isliye ek <Template/> bna liya
  return (
    <div className='flex  justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
        <div className="w-11/12 max-w-[450px] mx-0 text-white">
            <h1 className=" text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
            <p  className="text-[1.125rem] mt-4 leading-[1.625rem]">
                <span className='text-[#AFB2BF]'>{desc1}</span>
                <br/>
                <span className='text-[#47A5C5] italic'>{desc2}</span>
            </p>

            {formtype === "signup" ? 
            (<SignUpForm setislogedin={setislogedin}/>) 
            : (<LoginForm setislogedin={setislogedin}/>)}

            <div className="flex w-full items-center my-4 gap-x-2">
                <div className="h-[1px] w-full bg-richblack-700"></div>
                <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
                <div className="h-[1px] w-full bg-richblack-700"></div>
            </div>

            <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-100 border-richblack-700 border px-[12px] py-[8px] gap-x-2 mt-6">
                <FcGoogle />
                <p>Sign Up with Google</p>
            </button>
        </div>


        <div className="relative w-11/12 max-w-[450px]">
            
            <img src={FrameImage}
                alt='frameimage'
                width={558}
                height={504}
                loading='lazy'
            />

            <img src={image}
                alt={558}
                height={492}
                loading='lazy'
                className="absolute -top-4 right-4 "
            />
        </div>

    </div>
  )
}

export default Template
