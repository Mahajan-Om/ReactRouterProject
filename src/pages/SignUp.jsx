import React from 'react'
import Template from '../components/Template'
import signupimg from '../assets/signup.png'

const SignUp = ({setislogedin}) => {
  return (
    
      <Template
        title="Join the million learnings to code with studynotion for free"
        desc1="Build skills for today ,tomorrow and beyond"
        desc2="Education to future-proof your career"
        image={signupimg}
        formtype="signup"
        setislogedin={setislogedin}
      />
  )
}

export default SignUp