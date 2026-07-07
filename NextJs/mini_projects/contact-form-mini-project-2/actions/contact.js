"use server";
import { connectDB } from "@/lib/db.js";
import Contact from "@/lib/models/contact.js";
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