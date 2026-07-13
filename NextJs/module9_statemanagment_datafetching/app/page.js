"use client";

import AddPost from "@/components/add-post";
import PostsList from "@/components/Post-list";

// import {useState, useEffect} from "react";
// import {useQuery} from "@tanstack/react-query";

export default function Home() {
  // const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fetchUserData = async()=>{
  //   try{
  //     setIsLoading(true);
  //     const res = await fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10');
  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   }catch(err){
  //     setError(err);
  //   }
  // }

  // useEffect(()=>{
  //   fetchUserData();
  // },[])

  // const {data, isLoading, error} = useQuery({
  //   queryKey: ['users'],
  //   queryFn:()=>fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10').then(res=>res.json()) })

  // if(isLoading){
  //   return <div>Loading...</div>
  // }

  // if(error){
  //   return <div>Error: {error.message}</div>
  // }

  return (
    <div>
      <h1>Posts</h1>
      <PostsList />
      <AddPost/>
    </div>
  );
}
