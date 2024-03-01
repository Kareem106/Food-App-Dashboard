import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../components/productcard/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire ,faMotorcycle,faUtensils,faShop, faMap} from '@fortawesome/free-solid-svg-icons';
import ResturantCard from '../../components/resturantcard/ResturantCard';
function Home() {
  // const [products,setProducts]=useState([]);
  const [resturants,setResturants]=useState([]);
  useEffect(()=>{
    // axios.get("https://academy-training.appssquare.com/api/products").then((res)=>{
    //   if (res.status===200){
    //     console.log(res.data);
    //     setProducts(res.data.data);
    //   }
    // }).catch(err=>console.log(err));
    axios.get("https://academy-training.appssquare.com/api/restaurants").then((res)=>{
      if (res.status===200){
        console.log(res.data);
        setResturants(res.data.data);
      }
    }).catch(err=>console.log(err));
  },[]);
  return (
    <div className="home page">
      <h1 className='heading'>overview</h1>
      <section className='mb-8'>
      <h1 className='text-2xl font-bold capitalize mb-4'>Explore Catergories</h1>
      <div className='grid grid-cols-2 sm:grid-cols-5 gap-2 lg:gap-8'>
        <div className='hover:shadow-lg hover:shadow-orange-300 cursor-pointer aspect-square bg-white shadow-gray-400 shadow-md gap-4 text-xl flex flex-col justify-center items-center'>
        <FontAwesomeIcon icon={faFire} className='text-white bg-red-500 p-4 rounded-full w-8 h-8'/>
        <h1>Popular</h1>
        </div>
        <div className='hover:shadow-lg hover:shadow-orange-300 cursor-pointer rounded-lg aspect-square bg-white shadow-gray-400 shadow-md gap-4 text-xl flex flex-col justify-center items-center'>
        <FontAwesomeIcon icon={faMotorcycle} className='text-white bg-blue-950 p-4 rounded-full w-8 h-8'/>
        <h1>Fast delivery</h1>
        </div>
        <div className='hover:shadow-lg hover:shadow-orange-300 cursor-pointer rounded-lg aspect-square bg-white shadow-gray-400 shadow-md gap-4 text-xl flex flex-col justify-center items-center'>
        <FontAwesomeIcon icon={faUtensils} className='text-white bg-orange-500 p-4 rounded-full w-8 h-8'/>
        <h1>Dine in</h1>
        </div>
        <div className='hover:shadow-lg hover:shadow-orange-300 cursor-pointer rounded-lg aspect-square bg-white shadow-gray-400 shadow-md gap-4 text-xl flex flex-col justify-center items-center'>
        <FontAwesomeIcon icon={faShop} className='text-white bg-blue-950 p-4 rounded-full w-8 h-8'/>
        <h1>Pick up</h1>
        </div>
        <div className='hover:shadow-lg hover:shadow-orange-300 cursor-pointer rounded-lg aspect-square bg-white shadow-gray-300 shadow-lg gap-4 text-xl flex flex-col justify-center items-center'>
        <FontAwesomeIcon icon={faMap} className='text-white bg-yellow-400 p-4 rounded-full w-8 h-8'/>
        <h1>Pick up</h1>
        </div>
      </div>
      </section>
      {/* <section className='mb-8'>
        <h1 className='text-2xl font-bold capitalize mb-4'>Popular Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {
          products?.map(item=><ProductCard {...item}/>)
        }
        </div>
      </section> */}
      <section className='mb-8'>
        <h1 className='text-2xl font-bold capitalize mb-4'>Nearby Resturants</h1>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">
        {
          resturants?.map(item=><ResturantCard {...item}/>)
        }
        </div>
      </section>
    </div>
  )
}

export default Home