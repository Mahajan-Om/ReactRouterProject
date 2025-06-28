import React from 'react'
import loginimg from '../assets/login.png'
import Template from '../components/Template'

const Login = ({setislogedin}) => {
  return (

    <Template
      title="Welcome Back"
      desc1="Build skills for today ,tomorrow and beyond"
      desc2="Education to future-proof your career"
      image={loginimg}
      formtype="login"
      setislogedin={setislogedin}
    />
  )
}

export default Login