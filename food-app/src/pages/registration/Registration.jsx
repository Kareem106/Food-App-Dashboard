import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Spinner from '../../components/spinner/Spinner';

function Registration() {
  const token=useSelector(state=>state.user.token);
  const loading=useSelector(state=>state.user.loading);
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
              {
                loading?
                <div className='w-full h-full flex justify-center items-center'>
                  <Spinner/>
                </div>:
              <Outlet/>
              }
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