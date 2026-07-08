"use client";
import React from 'react'
import Form from 'next/form';
import { updateStatus } from '@/actions/contact';

const StatusButton = ({id}) => {
  const action = updateStatus.bind(null, id); // use whenever you want to pass an extra data with form data use bind
  // when the button is clicked, it will call the updateStatus function with the id as an argument
  // by default our server action will only get form data not the id, so we need to bind the id to the function so that it can be passed as an argument when the button is clicked
  return (
    <div>
      
        <Form action={action}> 
          <button className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 mt-2'>Mark Resolved
          </button>  
        </Form>
    </div> 
  )
}

export default StatusButton
