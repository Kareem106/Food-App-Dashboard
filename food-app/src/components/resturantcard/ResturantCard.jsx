import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
function ResturantCard({id,name,address,image}) {
  return (
    <div key={id} className='flex items-stretch gap-3 w-full cursor-pointer'>
      <div className='rounded-lg bg-gray-300/50 hover:shadow-lg hover:shadow-orange-300'>
        <img src={image} alt="img" className='max-w-40'/>
      </div>
      <div className='flex flex-col justify-between gap-1 w-32 grow py-4'>
        <h1 className='font-bold text-xl'>{name}</h1>
        <div>
        <svg className="w-4 h-4 inline text-yellow-300 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          <span>4.4</span>
        </div>
        <div>
          <p className='overflow-hidden text-ellipsis	sm:w-1/2 text-nowrap'><FontAwesomeIcon icon={faLocationCrosshairs} className='me-2'/>
          {address}</p>
        </div>
      </div>
    </div>
  )
}

export default ResturantCard