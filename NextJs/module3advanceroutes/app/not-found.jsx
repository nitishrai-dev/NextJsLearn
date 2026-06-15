import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-zinc-800'>
      <img src={"/undraw_page-eaten_b2rt.svg"} height={400} width={400}/>
      <h1 className='text-5xl font-extrabold text-indigo-200'>404 Not Found</h1>
      <Link href={"/"} className='border rounded-md bg-indigo-400  px-4 py-2 border-none mt-6'>Go to Home Page</Link>
    </div>
  )
}

export default NotFoundPage
