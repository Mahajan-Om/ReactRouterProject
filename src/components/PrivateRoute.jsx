import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({islogedin,children}) => {  // children here dashboard hi hai becz app.jsx me privateroute ke ander dashboard hai.

    if(islogedin){
        return children;  // i.e login hai to dashboard ko return kr dena
    }
    else{
        return <Navigate to="/login"/>
    }
}

export default PrivateRoute