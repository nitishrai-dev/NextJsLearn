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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quas debitis itaque odit alias eligendi dolores nihil cumque natus tempora temporibus nesciunt veritatis similique mollitia quis vero? Voluptates, officia explicabo!
      </p>
      <hr />
      <div className='space-y-4'>
        <h3>Different colors</h3>
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

      <div className='space-y-4'>
        <h3>Different Sizes</h3>
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

      <div className='space-y-4'>
        <h3>Disabled buttons</h3>
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
