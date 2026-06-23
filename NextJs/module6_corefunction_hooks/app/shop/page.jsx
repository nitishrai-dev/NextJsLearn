'use client';
import React from 'react'
import { useParams, usePathname } from 'next/navigation'
const shop = () => {
    const params = useParams();
    const pathname = usePathname();
    // console.log(params)
  return (
    <div >
      Shop page
      <h1>Path Name: {pathname}</h1>
    </div>
  )
}

export default shop
