import React from 'react'
import Link from 'next/link'

const TeamDocsPage = () => {
  return (
    <div>
      Team DOc page
      <Link href={'/admin-dashboard'}>GO to default page</Link>
    </div>
  )
}

export default TeamDocsPage
