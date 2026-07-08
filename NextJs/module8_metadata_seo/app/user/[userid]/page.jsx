import React from 'react'

export async function generateMetadata({ params }) {
  const { userid } = await params;
  return {
    title: `User ${userid}`,
    description: `This is the user page for user ${userid}`,
  }
}

const UserPage = () => {
  return (
    <div>
      User Page
    </div>
  )
}

export default UserPage
