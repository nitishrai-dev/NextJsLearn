"use client";
import { submitUser } from "@/action/action"
import { useRouter } from "next/navigation";
const formPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Create User</h1>
      <form action={submitUser}>
        <input type="text" name="name" placeholder="Enter your name" />

        <input type="email" name="email" placeholder="Enter your email" />

        <button type="submit">Submit</button>

      </form>

      <h1>Search Form</h1>
      <form action={"/search"}>
        <input type="text" name="query" placeholder="Search post id here" />
        <button type="submit">Search</button>
      </form>

      <button onClick={()=>router.back()}> Go Back</button>
    </div>
  )
}

export default formPage
