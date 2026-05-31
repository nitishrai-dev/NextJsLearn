import React, {useEffect} from 'react';
import {usePostStore} from '../store/postStore';

function Post() {
    const {posts, loading, error, fetchPosts} = usePostStore(); 
    useEffect(()=>{
        fetchPosts();
    }, [fetchPosts])

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>
    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map((p)=>(
                    <li key={p.id}>{p.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Post;