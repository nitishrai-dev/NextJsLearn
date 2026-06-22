'use client';
import React from 'react'
import { useParams } from 'next/navigation'
const shop = () => {
    const params = useParams();
    console.log(params)
  return (
    <div>
      Catch all route page
    </div>
  )
}

export default shop