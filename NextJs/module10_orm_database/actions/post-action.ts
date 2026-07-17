"use server";
import {prisma} from "@/lib/db";

// create
export const createPost = async(formdata:FormData)=>{
    const title = formdata.get("title") as string;
    const content = formdata.get("content") as string;

    if(!title) return;

    const post = await prisma.post.create({
        data:{
            title:title,
            content:content,
            createdAt: new Date()
        }
    })
    return post;
}

// read
export const getAllPosts = async()=>{
    const posts = await prisma.post.findMany({
        orderBy:{
            updatedAt:"asc"
        }
    });
    return posts;
}
export const getPostById = async(id:string)=>{
    const post = await prisma.post.findUnique({
        where:{
            id:id
        }
    });
    return post;
}

// update
export const updatePost = async(id:string,formData:FormData)=>{
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    if(!title) return;
    const updatedPost = await prisma.post.update({
        where:{
            id:id
        },
        data:{
            title,
            content
        }
    })
}

// delete
export const deletePostById = async(id:string)=>{
    await prisma.post.delete({
        where:{
            id:id
        }
    })

    return {
        message:"Post deleted successfully"
    };
}