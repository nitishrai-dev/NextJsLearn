// Get request handler
import { headers, cookies } from "next/headers";
export async function GET(req){
    // const reqHeader = new Headers(req.headers);
    // console.log(reqHeader.get("Authorization"));


    // const username = req.cookies.get("username");
    // console.log(username);

    const cookieStore = await cookies();
    cookieStore.set("theme","dark");
    const theme = cookieStore.get("theme");
    console.log(theme);
    return new Response("<h1>Hello world</h1>",
        {
            headers:{
                "content-type":"text.html",
                "set-cookie":"username=nitish"
            }
        }
    );
}
