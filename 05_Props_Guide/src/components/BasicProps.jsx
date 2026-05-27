// import React from 'react'
import {useState} from 'react'

function Button({text, color, size, onClick, disabled}) {
  return (
    <button 
    onClick={onClick} 
    disabled={disabled}
    className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 
    ${size==='small'? 'text-sm px-3 py-1' : ''}
    ${size==='large'? 'text-lg px-8 py-3' : ''}
    ${size==='medium'? 'text-md px-4 py-2' : ''}

    ${color==='primary'? 'bg-blue-500 text-white hover:bg-blue-600' : ''}
    ${color==='secondary'?'bg-gray-500 text-white hover:bg-gray-600': ''}
    ${color==='danger'? 'bg-red-500 text-white hover:bg-red-600' : ''}
    ${color==='success'?'bg-green-500 text-white hover:bg-green-600':''}
    
    ${disabled?'opacity-50 cursor-not-allowed':'cursor-pointer'}`}
    >{text}</button>
  )
}

function BasicProps() {
  const [clickCount, setClickCount] = useState(0);
  return (
    <section className='p-8 bg-white rounded-xl shadow-2xl'>
      <h2 className='text-2xl font-bold mb-4'>Basic Props</h2>
      <p> 
          Hey! everybody this is the Basic Props example and wonderful place to see them in action. Here we are using a reusable Button component and passing different props to it to see how it behaves. We are passing props like text, color, size, onClick and disabled to the Button component and based on these props the Button component is rendering different styles and behavior. Try clicking the buttons and see the count increase! Also try the disabled button to see how it behaves.
      </p>
      <hr className="my-4" />
      <div className='space-y-4'>
        <h3 className="text-xl font-semibold">Different colors</h3>
        <div className='flex flex-wrap gap-3'>
          <Button   
            text="Primary button"
            color='primary'
            onClick={()=>setClickCount(clickCount+1)}
          />
          <Button   
            text="Secondary button"
            color='secondary'
            onClick={()=>setClickCount(clickCount+1)}
          />
          <Button   
            text="Danger button"
            color='danger'
            onClick={()=>setClickCount(clickCount+1)}
          />
          <Button   
            text="Success button"
            color='success'
            onClick={()=>setClickCount(clickCount+1)}
          />
        </div>
      </div>
      <hr className="my-4" />
      <div className='space-y-4'>
        <h3 className="text-xl font-semibold">Different Sizes</h3>
        <div className='flex flex-wrap gap-3'>
          <Button   
            text="Small"
            color='primary'
            size='small'
            onClick={()=>setClickCount(clickCount+1)}
          />
          <Button   
            text="Medium Button"
            color='primary'
            size='medium'
            onClick={()=>setClickCount(clickCount+1)}
          />
          <Button   
            text="Large"
            color='primary'
            size='large'
            onClick={()=>setClickCount(clickCount+1)}
          />
        </div>
      </div>
      <hr className="my-4" />
      <div className='space-y-4'>
        <h3 className="text-xl font-semibold">Disabled buttons</h3>
        <div className='flex flex-wrap gap-3'>
          <Button   
            text="Enabled Button"
            color='primary'
            size='small'
            onClick={()=>setClickCount(clickCount+1)}
          />
          <Button   
            text="Disabled Button"
            color='primary'
            size='small'
            disabled={true}
            onClick={()=>setClickCount(clickCount+1)}
          />
        </div>
      </div>

      <div className='bg-amber-100 px-3 py-3 mt-4 '>Count: {clickCount}</div>
    </section>
  )
}

export default BasicProps
