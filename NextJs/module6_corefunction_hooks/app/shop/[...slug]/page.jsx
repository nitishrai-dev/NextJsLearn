'use client';
import React from 'react'
import { useParams, usePathname } from 'next/navigation'
const shop = () => {
    const params = useParams();
    const pathname = usePathname();
    console.log(params)
  return (
    <div>
      Catch all route page
      <h1>Path name: {pathname}</h1>
    </div>
  )
}

export default shop