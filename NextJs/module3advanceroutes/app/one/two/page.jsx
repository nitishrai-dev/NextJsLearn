import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex flex-col'>
      <Link href={"/four"}>Go to Page four........ to see segment of two level above</Link>
    </div>
  )
}

export default page
