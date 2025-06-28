import React from 'react'
import logo from '../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import {toast} from 'react-hot-toast'

const Navbar = (props) => {

    let islogedin = props.islogedin;
    let setislogedin = props.setislogedin;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

        <NavLink to='/' >
            <img src={logo} alt='Logo' width={160} height={32} loading='lazy'/>
        </NavLink>

        <nav >

            <ul className='flex gap-x-6 text-[#AFB2BF]'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/'>About</NavLink></li>
                <li><NavLink to='/'>Contact</NavLink></li>
            </ul>

        </nav>

        <div className='flex ml-5 mr-3 gap-3'>

        { !islogedin &&    // isliye ye brackets lagaye taki compare kr sake 
            <NavLink to='/login'>
                <button className='bg-[#161D29] items-center text-[#AFB2BF] py-[8px] px-[12px] rounded border border-[#2C333F]'>Log in</button>
            </NavLink>

        }

        {  !islogedin &&
            <NavLink to='/signup'>
                <button className='bg-[#161D29] items-center text-[#AFB2BF] py-[8px] px-[12px] rounded border border-[#2C333F]' >Sign Up</button>
            </NavLink>
        }

        {   islogedin &&
            <NavLink to='/'>
                <button onClick={()=>{
                    setislogedin(false);
                    toast.success("Logged out Successfully !")
                }} className='bg-[#161D29] items-center text-[#AFB2BF] py-[8px] px-[12px] rounded border border-[#2C333F]'>Log Out</button>
            </NavLink>
        }

        {   islogedin &&
            <NavLink to='/dashboard'>
                <button className='bg-[#161D29] items-center text-[#AFB2BF] py-[8px] px-[12px] rounded border border-[#2C333F]'>Dashboard</button>
            </NavLink>
        }
        </div>

    </div>
  )
}

export default Navbar