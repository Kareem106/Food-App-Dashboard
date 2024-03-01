import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/productcard/ProductCard'
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft,faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../../components/spinner/Spinner';
function Explore() {
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(false);
  const [searchParams]=useSearchParams();
  const [skip,setSkip]=useState(0);
  const [count,setCount]=useState(0);
  const limit=10;
  useEffect(()=>{
    setLoading(true);
    const searchQuery=searchParams.get("q");
    axios.get(`https://academy-training.appssquare.com/api/products?skip=${skip}&search=${searchQuery?searchQuery:""}`).then((res)=>{
      if(res.status===200){
        setCount(res.data.count);
        setProducts(res.data.data);
      }
    }).catch(err=>console.log(err)).finally(()=>setLoading(false));
  },[searchParams,skip]);
  return (
    <div className="explore page">
      <h1 className="heading">explore</h1>
      <section className='flex justify-between mb-4'>
        <button 
        className={`w-14 h-14 bg-orange-300 text-white text-2xl rounded-lg ${!skip?"opacity-50":""}`} 
        disabled={!skip} 
        onClick={e=>setSkip(skip-limit)}
        ><FontAwesomeIcon icon={faCaretLeft}/></button>
        <button 
        className={`w-14 h-14 bg-orange-300 text-white text-2xl rounded-lg ${skip+limit>count?"opacity-50":""}`}
        onClick={e=>setSkip(skip+limit)}
        disabled={skip+limit>count?true:false}
        ><FontAwesomeIcon icon={faCaretRight} /></button>
      </section>
      {
        loading?
        <div className='flex justify-center pt-24'>
          <Spinner/>
        </div>:
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          {
            products.map(e=><ProductCard {...e}/>)
          }
        </section>
      }
    </div>
  )
}

export default Explore