import React, {useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Lottie from 'react-lottie';
import * as animationData from '../../lottie/logo.json';
import { faUser,faMagnifyingGlass,faX } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom";
function NavBar() {
  const [toggleSearch,setSearch]=useState(false);
  const [searchQuery,setSearchQuery]=useState("");
  const navigate=useNavigate();
  const userName=useSelector(state=>state.user.data.name);
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <header className='w-full p-1'>
      <div className="flex gap-8 justify-between px-4 py-6 items-center rounded-lg text-orange-500">
        <div className="w-14">
        <Lottie options={defaultOptions}/>
          </div>
          <div className="group w-2/3 sm:grow max-w-lg relative">
        <form className='relative' onSubmit={(e)=>{
          // e.preventDefault(e.target.reset(setSearch(false)));
          e.preventDefault();
          navigate(`/explore?q=${searchQuery}`);
          setSearchQuery("");
          setSearch(false);
          e.target.reset();
        }}>
          <label htmlFor="openSearch" className='absolute text-orange-500 z-50 start-full -translate-x-8 -translate-y-1/2 top-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center'>
          {
            toggleSearch?<FontAwesomeIcon icon={faX} className='sm:hidden'/>:
            <FontAwesomeIcon icon={faMagnifyingGlass} className='sm:hidden'/>
          }
          </label>
          <input className='peer hidden' type="checkbox" id='openSearch' onChange={(e)=>{setSearch(e.target.checked)}}/>
          <input type="text" className="rounded-2xl px-2 pe-12 sm:py-2 py-1 bg-white outline-none text-black w-full focus:outline-4 outline-orange-300 duration-150 hidden sm:block peer-checked:block" placeholder='Search' onChange={e=>{setSearchQuery(e.target.value)}} />
        </form>
      </div>
          <div className="hidden sm:block">
              <div className="user">
                  <FontAwesomeIcon icon={faUser} className="mx-2"/>
                  <span className="text-xl">{userName}</span>
              </div>
          </div>
      </div>
    </header>
  )
}

export default NavBar