import React from 'react'

const user = async({params}) => {
    const {userid} = await params;
  return (
    <div>
      Dynamic user id {userid}
    </div>
  )
}

export default user
