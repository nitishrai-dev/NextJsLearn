import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans bg-zinc-900  dark:bg-black">
      <Button variant={"default"}>Click Me</Button>
    </div>
  );
}
