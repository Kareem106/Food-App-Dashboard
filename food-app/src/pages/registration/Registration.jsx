import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Registration() {
  const token=useSelector(state=>state.user.token);
  const navigate=useNavigate();
  useEffect(()=>{
    if(token){
      navigate("/");
      }
  },[token]);
  return (
    <div className='sm:p-24 h-screen'>
        <div className='w-full h-full bg-white rounded-lg shadow-lg flex'>
            <div className='w-full lg:w-1/2 bg-slate-100'>
              <Outlet/>
            </div>
            <div className='w-1/2 hidden lg:block'>
              <img src="/assets/food.svg" alt=""
              className='w-full h-full' />
            </div>
        </div>
    </div>
  )
}

export default Registration