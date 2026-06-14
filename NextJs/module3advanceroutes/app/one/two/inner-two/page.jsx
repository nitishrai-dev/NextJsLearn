import React from 'react'
import Link from 'next/link'

const InnerTwoPage = () => {
  return (
    <div className='flex flex-col'>
      InnerTwoPage
      <Link href={'/final'}>Go To Root Dir folder................ And see intercepting demo of directory root route</Link>
    </div>
  )
}

export default InnerTwoPage
