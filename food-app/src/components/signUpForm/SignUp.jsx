import React from 'react'
import { signUpHandler } from '../../app/features/UserFeatures';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce } from 'react-toastify';
function SignUp() {
  const navigate=useNavigate();
  return (
    <div className='flex justify-center items-center flex-col gap-8 w-full h-full'>
      <h1 className='text-2xl font-bold'>Sign Up</h1>
      <div className='w-full px-4 sm:px-8 md:px-14 md:w-3/2 xl:px-32'>
        <form className='flex flex-col gap-14 ' onSubmit={(e)=>{
          e.preventDefault();
          const formData=new FormData(e.target);
          signUpHandler(formData)
          .then(res=>{
              toast.success("account created", {
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
                navigate("/registration/login");
          })
          .catch(err=>{
            console.log(err);
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
          });
        }}>
          <input className='p-2 border-2 rounded-lg bg-gray-100/50 border-orange-500 outline-orange-300/50 outline-4 focus:outline transition-all	duration-300 cursor-pointer text-xl' type="text" name="name" placeholder='Name'/>
          <input className='p-2 border-2 rounded-lg bg-gray-100/50 border-orange-500 outline-orange-300/50 outline-4 focus:outline transition-all	duration-300 cursor-pointer text-xl' type="text" name="email" placeholder='Email'/>
          <input className='p-2 border-2 rounded-lg bg-gray-100/50 border-orange-500 outline-orange-300/50 outline-4 focus:outline transition-all	duration-300 cursor-pointer text-xl' type="password" name="password" placeholder='Password'/>
          <input className='p-2 border-2 rounded-lg border-orange-500 outline-orange-300/50 outline-4 focus:outline bg-orange-500 text-white	duration-300 cursor-pointer text-xl transition-shadow hover:shadow-lg hover:shadow-orange-500/50	' type="submit" value="Sign Up" />
        </form>
      </div>
      <p>Have an Account ? <Link className='text-orange-500 font-bold' to={"/registration/login"}>LogIn</Link></p>
    </div>
  )
}

export default SignUp