import {useRef, forwardRef} from 'react';

// Input component that accept a ref prop
// {label, placeholder, className} = normal props, ref = special prop that can be forwarded to the child component
const CustomInput = forwardRef(({label, placeholder, className}, ref)=>{
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">{label} </label>

      <input 
        type="text"
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}   
        placeholder={placeholder} 
        ref={ref} 
      />
    </div>
  )
})

CustomInput.displayName = 'CustomInput';

function RefProps() {

  const inputRef = useRef(null); // this hook has a current property that will hold the reference to the DOM element of the input, we can use this to interact with the input element directly 
  // properties like .current will give us access to the DOM element of the input, we can use this to focus the input, get its value, or clear it
  const secondInputRef = useRef(null);

  // inputRef.current will give us access to the DOM element of the input, we can use this to focus the input, get its value, or clear it

  // .focus() method will focus the input, .value will give us the current value of the input, and we can set .value to '' to clear it
  const focusInput = () => {
    inputRef.current?.focus();
  }

  // .value will give us the current value of the input, we can use this to alert the value of the input
  const getInputValue = () => {
    if(inputRef.current){
      alert(`Input Value: ${inputRef.current.value}`);
    }
  }

  // clearInput will set the value of the input to '' and focus it, we can use this to clear the input and focus it for the user to enter new text
  const clearInput = () => {
    if(inputRef.current){
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  }

  const focusSecondInput = ()=>{
    if(secondInputRef.current){
      secondInputRef.current.value = '';
      secondInputRef.current.focus();
    }
  }

  const getSecondInputValue = ()=>{
    if(secondInputRef.current){
      alert(`Second Input Value: ${secondInputRef.current.value}`);
    }
  }

  const clearSecondInput = ()=>{
    if(secondInputRef.current){
      secondInputRef.current.value = '';
      secondInputRef.current.focus();
    }
  }

  return (
    <section className="p-8  bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4"><strong>Ref Props</strong></h1>
      <p className="text-gray-600 mb-6">
        Refs provide a way to access DOM nodes or React elements directly. Use{" "}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">
          forwardRef
        </code>{" "}
        to pass refs to child components.
      </p>
<hr className="my-4 mb-4" />
      <div className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-lg">
           
          <h3 className="text-xl font-semibold mb-5">Try it out</h3>
          <CustomInput 
            ref={inputRef}  
            label="First Input (with ref)"
            placeholder="Enter text..."
            className="border-blue-500 focus:ring-blue-500"
          />  {/*here we are passing this ref which is connector */}

          <CustomInput 
            ref={secondInputRef}
            label="Second Input (with ref)"
            placeholder="Enter text..."
            className="border-green-500 focus:ring-green-500"
          />

          {/* add buttons to interact with the inputs */}
          <div className = "flex flex-wrap gap-4 mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl" onClick={focusInput}>Focus first input</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl" onClick={focusSecondInput}>Focus Second input</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl" onClick={getInputValue}>Get first input Value</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl" onClick={clearInput}>Clear first input Value </button>
          </div>

          <div className = "flex flex-wrap gap-4 mt-4">
            
            
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-4xl" onClick={getSecondInputValue}>Get Second input Value</button>
            
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-4xl" onClick={clearSecondInput}>Clear Second input Value </button>
          </div>
          
        </div>
<hr className="my-4 mb-4" />
        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h4 className="font-semibold text-gray-800 mb-2">
            When to use refs:
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Managing focus, text selection, or media playback</li>
            <li>Triggering imperative animations</li>
            <li>Integrating with third-party DOM libraries</li>
            <li>Accessing DOM measurements (scroll position, element size)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default RefProps