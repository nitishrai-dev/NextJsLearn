import React from 'react'
import {connectDB} from '@/lib/db'
import Contact from '@/lib/models/contact';
import StatusButton from '@/components/StatusButton';
const Dashboard = async () => {
    await connectDB();

    const contacts = await Contact.find();
  return (

    <div className='flex flex-col items-center justify-center min-h-screen py-2 p-2'>
        <h1 className='text-3xl font-bold mb-4'>Contact messages</h1>
        {
            contacts.map((contact)=>(
                <div key={contact._id} className='bg-white shadow-md rounded-lg p-4 mb-4 w-full max-w-md'>
                    <h2 className='text-xl font-semibold mb-2'>{contact.name}</h2>
                    <p className='text-gray-700 mb-2'>{contact.email}</p>
                    <p className='text-gray-700 mb-2'>{contact.message}</p>
                     
                    {contact.status === 'resolved'?<p className='text-green-500 font-semibold'>Resolved</p>: <StatusButton id={contact._id.toString()} />}
                </div>
            ))
        }
    </div>
  )
}

export default Dashboard
