import React from 'react'

const Docspage = async({params}) => {
    const {slug} = await params;
    // console.log(slug)
  return (
    <div>
      DocsPage let dynamic segment: {slug}
    </div>
  )
}

export default Docspage
