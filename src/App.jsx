import { Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import { useState } from 'react'
import PrivateRoute from './components/PrivateRoute'


function App() {
  

  const [islogedin , setislogedin] = useState(false); // ye ilsiye use kiya taki home page ki navr bar pe do hi button dihe ya to login and sign up ya phir logout ya dashboard
  return (
    <div className=' w-screen h-screen flex flex-col bg-richblack-900 overflow-x-hidden '>
      <Navbar islogedin={islogedin} setislogedin={setislogedin}/>

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login setislogedin={setislogedin}/>}/>
        <Route path='/signup' element={<SignUp setislogedin={setislogedin}/>}/>
        <Route path='/dashboard' element={
          <PrivateRoute islogedin={islogedin}>
              <Dashboard/>
          </PrivateRoute>
         
        }/> {/* isse kya hoga agr log in nhi bhi hai aur path me dashboard ka path dala to dashboard pe pohoch jayenge but hume aisa nhji chahiye agr login nhi hai aur dashboad dala to login page pe hi leke jana chahiye */}

      </Routes>
    </div>
  )
}

export default App
