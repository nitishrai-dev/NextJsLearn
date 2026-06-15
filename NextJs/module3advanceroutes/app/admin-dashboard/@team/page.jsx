import Link from 'next/link'
import React from 'react'

const Team = () => {
  return (
    <div className='bg-green-500 h-[50%] border-2 border-r-transparent'>
      <Link href={'/admin-dashboard/team-docs'}>GO to team docs</Link>
    </div>
  )
}

export default Team 