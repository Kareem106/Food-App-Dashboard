import React, { useEffect } from 'react'
import SideBar from './components/sidebar/SideBar'
import { Outlet, useNavigate } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import { useSelector } from 'react-redux'

function Layout() {
  const token=useSelector(state=>state.user.token);
  const navigate=useNavigate();
  useEffect(()=>{
    if(!token){
      navigate("/registration/login");
    }
  },[token]);
  return (
    <div className='layout'>
        <NavBar/>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default Layout