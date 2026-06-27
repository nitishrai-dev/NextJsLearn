"use server";
export async function createTodo(formData){
    const title = formData.get("title");
    console.log("Creating a todo",title)
} 

export async function updateTodo(title, desc, isCompleted){
    const newTodo = {
        title,
        desc,
        isCompleted
    }

    // db action

    return {
        success:true,
        
        message:"Updated successfully"
    }
}