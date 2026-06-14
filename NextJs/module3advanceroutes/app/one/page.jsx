import { Libre_Franklin } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-end'>
      <Link href={'/one/two'}>Redirect to Page ............ and see same level/nested page moving intercept</Link> 
      <Link href={'/three'}>Redirect to Page Three ............ and see one above level/same heirariche moving intercept</Link>
    </div>
  )
}

export default page
