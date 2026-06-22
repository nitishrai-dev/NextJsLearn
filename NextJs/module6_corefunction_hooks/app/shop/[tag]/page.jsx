'use client';
import React from 'react'
import { useParams } from 'next/navigation'
const shop = () => {
    const params = useParams();
    console.log(params)
  return (
    <div>
      Shop tag page
    </div>
  )
}

export default shop
