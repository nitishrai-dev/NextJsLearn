import React from 'react'

const page = async({params}) => {
    const {userid, postid} = await params;
  return (
    <div>
      let's see post user with id {userid} and post of id {postid}
    </div>
  )
}

export default page
