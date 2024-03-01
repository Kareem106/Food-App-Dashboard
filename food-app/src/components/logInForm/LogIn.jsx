import React from 'react'
import { logInHandler } from '../../app/features/UserFeatures';
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
import { Link } from 'react-router-dom';
function LogIn() {

  return (
    <div className='flex justify-center items-center flex-col gap-8 w-full h-full'>
      <h1 className='text-2xl font-bold'>Log In</h1>
      <div className='w-full px-4 sm:px-8 md:px-14 md:w-3/2 xl:px-32'>
        <form className='flex flex-col gap-14 ' onSubmit={e=>{
          e.preventDefault();
          const formData=new FormData(e.target);
          logInHandler(formData)
          .then(()=>{})
          .catch(err=>{
            toast.error(err, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
              });
          })
        }}>
          <input className='p-2 border-2 rounded-lg bg-gray-100/50 border-orange-500 outline-orange-300/50 outline-4 focus:outline transition-all	duration-300 cursor-pointer text-xl' type="text" name="email" placeholder='Email'/>
          <input className='p-2 border-2 rounded-lg bg-gray-100/50 border-orange-500 outline-orange-300/50 outline-4 focus:outline transition-all	duration-300 cursor-pointer text-xl' type="password" name="password" placeholder='Password'/>
          <input className='p-2 border-2 rounded-lg border-orange-500 outline-orange-300/50 outline-4 focus:outline bg-orange-500 text-white	duration-300 cursor-pointer text-xl transition-shadow hover:shadow-lg hover:shadow-orange-500/50	' type="submit" value="Log In" />
        </form>
      </div>
      <p>Don't have an Account ? <Link className='text-orange-500 font-bold' to={"/registration/signup"}>SignUp</Link></p>
    </div>
  )
}

export default LogIn