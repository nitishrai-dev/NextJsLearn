"use client";
import { useState } from "react";

const Home = ()=> {
  const [name,setName] = useState('Rahul');
  // const data = await fetch('https://jsonplaceholder.typicode.com/todos')
  // const res = await data.json();
  // console.log(res)
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      Main Page
      <button onClick={()=>{alert("hello")}}>Click me</button>
      {name}
      <button onClick={()=>{setName("Nitish")}}>Change Name</button>
      {/* {JSON.stringify(res)} */}
    </div>
  );
}
//  dark:bg-black
//  bg-zinc-50 font-sans

export default Home;