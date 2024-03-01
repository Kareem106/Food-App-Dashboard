import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { add_order,remove_order } from '../../app/features/OrdersSlice';
import { useDispatch, useSelector } from 'react-redux';
function ProductCard({id,name,price,image,restaurant_id}) {
  const dispatch=useDispatch();
  const current_order=useSelector(state=>state.orders.current_order);
  return (
    <div key={id} className="w-full duration-150 flex gap-4 bg-orange-500/50 items-center p-4 rounded-lg flex-row sm:flex-col">
        <div>
            <img src={image} alt="" className='w-24 bg-slate-200 rounded-lg hover:shadow-lg hover:shadow-slate-300/50'/>
        </div>
        <div className="grow flex justify-between items-center text-xl font-bold sm:gap-4">
            <h3 className='capitalize '>{name}</h3>
            <span className='bg-white rounded-lg text-orange-500 p-1 px-4'>{price}</span>
        </div>
        <div>
          <input type="checkbox" id={id} className='hidden peer'
          checked={current_order.some(item=>item.id===id)}
          onChange={(e)=>{
            if(e.target.checked){
              dispatch(add_order({id,name,price,image,restaurant_id}));
            }else{
              dispatch(remove_order(id))
            }
          }} />
          <label htmlFor={id}
          className='block p-4 w-8 h-8 border border-orange-500 rounded-full cursor-pointer bg-white peer-checked:bg-orange-500 peer-checked:*:block flex items-center justify-center'>
            <FontAwesomeIcon icon={faCheck} className='hidden text-white' size='lg' />
          </label>
        </div>
    </div>
  )
}

export default ProductCard