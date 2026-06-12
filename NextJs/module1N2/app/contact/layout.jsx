import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      <h1>Header</h1>
      {children}
      <h2>footer</h2>
    </div>
  )
}

export default layout
