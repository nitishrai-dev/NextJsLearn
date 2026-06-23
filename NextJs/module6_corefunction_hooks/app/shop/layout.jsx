import SideBar from '@/components/sidebar'
import React from 'react'

const ShopLayout = ({children}) => {
  return (
    <div className='flex'>
        <SideBar />
        <main className='flex-1 p-6 '>
        {children}
        </main>
        
    </div>
  )
}

export default ShopLayout
