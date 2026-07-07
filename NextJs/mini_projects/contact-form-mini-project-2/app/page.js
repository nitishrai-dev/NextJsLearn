import Image from "next/image";
// import connectDB from "@/lib/db.js";
import ContactForm from "@/components/ContactForm.jsx";
import { createContact } from "@/actions/contact";
export default function  Home() {
  // await connectDB();
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">
        Contact Us
      </h1>
      <ContactForm action={createContact}/>
    </div>
  );
}
