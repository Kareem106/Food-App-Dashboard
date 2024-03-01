import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faBorderAll,faRectangleList } from '@fortawesome/free-solid-svg-icons';
function SideBar() {
  return (
    <div id='side-bar' className="fixed z-40 sm:h-full sm:top-0 sm:left-0 sm:w-fit top-full start-1/2 -translate-y-full sm:translate-y-0 sm:translate-x-0 -translate-x-1/2 w-full p-1 duration-0">
        <nav className='flex sm:flex-col gap-4 items-start justify-around bg-orange-500 p-4 rounded-lg text-white sm:h-full sm:justify-start sm:gap-8 shadow-xl shadow-orange-500/50'>
        <NavLink to={"/"} className={"sm:w-full p-2 rounded-lg transition-all text-nowrap"}>
        <FontAwesomeIcon icon={faHouse} size='xl'  className='sm:w-4 w-6'/> <span className='sm:inline hidden ms-2'>overview</span>
        </NavLink>
        <NavLink to={"/explore"} className={"sm:w-full p-2 rounded-lg transition-all text-nowrap"}>
        <FontAwesomeIcon icon={faBorderAll} size='xl' className='sm:w-4 w-6'/>
        <span className='sm:inline hidden ms-2'>explore</span>
        </NavLink>
        <NavLink to={"/orders"} className={"sm:w-full p-2 rounded-lg transition-all text-nowrap"}>
        <FontAwesomeIcon icon={faRectangleList} size='xl' className='sm:w-4 w-6'/> <span className='sm:inline hidden ms-2'>orders</span>
        </NavLink>
        </nav>
    </div>
  )
}

export default SideBar