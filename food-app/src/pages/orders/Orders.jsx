import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/productcard/ProductCard';
import * as animationData from "../../lottie/emptyCart.json";
import Lottie from 'react-lottie';
import { clear_order,add_previous_order } from '../../app/features/OrdersSlice';
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays ,faClock} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
function Orders() {
  const orders=useSelector(state=>state.orders);
  const dispatch=useDispatch();
  const [total,setTotal]=useState(0);
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
  };
  useEffect(()=>{
    console.log(orders);
    let totalPrice=0;
    orders.current_order?.forEach(item=>{
      totalPrice+=item.price;
    });
    setTotal(totalPrice);
  },[orders]);
  return (
    <div className="orders page">
      <h1 className="heading">orders</h1>
      <section>
        <h1 className='font-bold text-2xl mb-4'>current order</h1>
        {
          orders.current_order.length>0?
          <div className='bg-orange-300 rounded-lg p-4 sm:max-w-96'>
          <div>
            <h1 className='font-bold text-xl mb-2'>Items</h1>
            {
              orders.current_order?.map((item,indx)=>{
                return(
                  <p>{indx+1}. {item.name}</p>
                )
              })
            }
            <div className='font-bold my-4'>Total : <span className='bg-white rounded-lg text-orange-500 p-1 px-4'>{total}</span></div>
          </div>
          <div className='flex gap-2'>
            <button
            onClick={e=>{
              const date=new Date();
              const order={
                id:nanoid(),
                status:"completed",
                date:date.toLocaleDateString("en-US",{
                  year: 'numeric',
                month: 'long',
                day: 'numeric'}),
                time:date.toLocaleTimeString("en-US"),
                order:orders.current_order,
                total:total
              };
              dispatch(add_previous_order(order));
              dispatch(clear_order());
              toast.success("order placed", {
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
            }}
            className='p-4 bg-orange-500 rounded-lg text-white font-bold'>Confirm</button>
            <button
              onClick={e=>{
                const date=new Date();
                const order={
                id:nanoid(),
                status:"canceled",
                date:date.toLocaleDateString("en-US",{
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'}),
                  time:date.toLocaleTimeString("en-US"),
                  order:orders.current_order,
                  total:total
                };
                dispatch(add_previous_order(order));
                dispatch(clear_order());
                toast.error("order canceled", {
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
              }}
            className='p-4 bg-black rounded-lg text-white font-bold'>Cancel</button>
          </div>
        </div>:
        <>
            <div className='flex justify-center items-center'>
              <div className='w-52'>
                <Lottie options={defaultOptions}/>
              </div>
            </div>
        </>
        }
      </section>
      <section className='mt-4'>
      <h1 className='font-bold text-2xl mb-4'>previous orders</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
        {
          orders.pervious_orders?.map((order)=>{
            return(
              <>
              <div key={order?.id} className='bg-orange-300 p-4 rounded-lg flex flex-col gap-4'>
                <div>
                  <span className={[
                    order.status==="completed"?"bg-green-100 text-green-600":"bg-red-100 text-red-600",
                    "inline-block p-2 rounded-2xl font-bold text-sm"
                  ].join(" ")}>{order?.status}</span>
                </div>
                <div className='flex gap-4'>
                  <span>
                  <FontAwesomeIcon icon={faCalendarDays} className='me-1 text-orange-600'/> <span className='opacity-80'>{order.date}</span>
                  </span>
                  <span>
                  <FontAwesomeIcon icon={faClock} className='me-1 text-orange-600'/> <span className='opacity-80'>{order.time}</span>
                  </span>
                </div>
                <div>
                  {
                    order.order?.map((item,indx)=>{
                      return(
                          <p>{indx+1}. {item.name}</p>
                      )
                    })
                  }
                </div>
                <div className='font-bold my-4'>Total : <span className='bg-white rounded-lg text-orange-500 p-1 px-4'>{order.total}</span></div>
              </div>
              </>
            )
          }).reverse()
        }
      </div>
      </section>
    </div>
  )
}

export default Orders