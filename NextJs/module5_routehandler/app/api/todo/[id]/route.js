export async function PUT(request,{params}){
    const data = await request.json();

    const updatedTodo = {id:params.id, ...data};
    // assumin that we are updating the data into the database

    return Response.json({todo:updatedTodo});
}


export async function PATCH(request,{params}){
    const data = await request.json();

    const updatedTodo = {id:params.id, ...data};
    // assumin that we are updating the data into the database

    return Response.json({todo:updatedTodo});
}


export async function DELETE(request,{params}){
    const data = await request.json();

    const updatedTodo = {id:params.id, ...data};
    // assumin that we are updating the data into the database

    return Response.json({todo:updatedTodo});
}