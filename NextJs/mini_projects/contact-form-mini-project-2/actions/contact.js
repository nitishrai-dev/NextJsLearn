"use server";
import { connectDB } from "@/lib/db.js";
import Contact from "@/lib/models/contact.js";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function createContact(formData){
    await connectDB();

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const contact = await Contact.create({
        name,
        email,
        message
    });

    redirect("/dashboard");
}

export async function updateStatus(id){
    await connectDB();
    const contact = await Contact.findByIdAndUpdate(id, {status: "resolved"});
    revalidatePath("/dashboard"); // this will revalidate the dashboard page and fetch the updated data from the server 
    // an caching strategy is used in nextjs to cache the data and serve it from the cache instead of fetching it from the server every time, so we need to revalidate the page to fetch the updated data from the server
    // if(!contact){
    //     throw new Error("Contact not found");
    // }
    // contact.status = "resolved";
    // await contact.save();
}