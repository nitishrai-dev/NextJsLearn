import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center'>
      <h1 className='text-5xl font-bold text-indigo-400'>Auth Layout</h1>
      {children}
    </div>
  )
}

export default layout
