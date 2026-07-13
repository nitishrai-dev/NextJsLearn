"use client";
import { useQuery } from "@tanstack/react-query";

async function fetchPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}

export default function PostsList() {
    const {data, isLoading, error} = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts
    })

    if(isLoading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>Error: {error.message}</div>
    }


  return (
    <div>
      <h1>{data.slice(0, 5).map(post => (<p key={post.id}>{post.title}</p>))}</h1>
    </div>
  )
}
