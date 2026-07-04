import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  return (
    <section className="text-gray-600 body-font">
      <Image
        src={"https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        alt ="File Image"
        width={200}
        height={200}
        className="mx-auto mt-16"
      />


  <Link href={{
    pathname: '/about',
    query: { name: 'John Doe', age: 30 },
  }} className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
    Go to About Page
  </Link>
</section>
  )
}

export default HomePage

