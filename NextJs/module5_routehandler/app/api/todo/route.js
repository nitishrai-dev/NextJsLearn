// import { NextResponse } from 'next/server';

export async function POST(request){
    // step 1 Parse the json body from the client
    const body = await request.json();

    // destructure your body example (optional)
    const {title, completed} = body;

    // you can do database logic here.

    return Response.json({
        success: true,
        message: "Todo created successfully",
        todo: { title, completed }
    })
}
