"use client";

import {useMutation, useQueryClient} from "@tanstack/react-query";

async function addPost(newPost){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers:{
            "Content-Type":"application/json",
        }
    })

    return res.json();
}

// Adding data to the cache after adding a new post

export default function AddPost(){
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: addPost,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey: ["posts"]})
            alert("Post Added!")
        },
        onError:()=>{
            alert("Error adding post")
        }
    })


    return(
        <button className="bg-amber-700 text-white px-4 py-2 mt-4 rounded hover:bg-amber-300" onClick={()=>mutation.mutate({
            title: "New Post",
            body: "This is a new post",
            userId: 1
        })}>
            Add Post
        </button>
    )
}