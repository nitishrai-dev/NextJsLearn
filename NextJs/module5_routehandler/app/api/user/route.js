// Get request handler
import { headers } from "next/headers";
export async function GET(req){
    const reqHeader = await headers();
    // const reqHeader = new Headers(req.headers);
    console.log(reqHeader.get("Authorization"));
    return new Response("<h1>Hello world</h1>",
        {
            headers:{
                "content-type":"text.html"
            }
        }
    );
}
