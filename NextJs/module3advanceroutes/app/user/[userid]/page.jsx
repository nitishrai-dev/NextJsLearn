import { notFound } from 'next/navigation';
import React from 'react'

const user = async({params}) => {
    const {userid} = await params;
    if(userid > 10) notFound();
  return (
    <div>
      Dynamic user id {userid}
    </div>
  )
}

export default user
