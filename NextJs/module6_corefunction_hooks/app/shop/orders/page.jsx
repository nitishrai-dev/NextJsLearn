"use client";
import React from 'react'
import { useRouter } from 'next/navigation';

const OrderPage = () => {
  const router = useRouter();

  return (
    <>
    <div className='hover:cursor-pointer' onClick={()=>router.replace('/shop/products')}>
      Go to products
      
    </div>
    <button className='hover:cursor-pointer ' onClick={()=>router.refresh()}>Refresh</button>
    </>
  )
}

export default OrderPage;