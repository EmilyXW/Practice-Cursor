import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b-[2px] border-[rgba(40,0,133,0.1)] bg-[rgb(0,51,90)]">
      <div className="ml-1">
        <Link 
          href="/" 
          className="
            inline-block 
            px-3 py-2 
            rounded-md 
            transition-all 
            duration-200 
            hover:bg-[rgba(250,169,142,0.6)]
            hover:shadow-sm
            hover:text-[rgb(255,255,255)]
            text-[rgb(255,255,255)]
          "
        >
          <span className="font-bold text-2xl">✨</span>
        </Link>
      </div>
      <div className="flex gap-4 mr-0">
        <Link 
          href="/about" 
          className="
            inline-block 
            px-5 py-2 
            rounded-md 
            transition-all 
            duration-200 
            hover:bg-[rgba(250,169,142,0.6)]
            hover:shadow-sm
            hover:text-[rgb(255,255,255)]
            text-[rgb(255,255,255)]
          "
        >
          <Button variant="ghost">About</Button>
        </Link>
        <Link 
          href="/projects" 
          className="
            inline-block 
            px-3 py-2 
            rounded-md 
            transition-all 
            duration-200 
            hover:bg-[rgba(250,169,142,0.6)]
            hover:shadow-sm
            hover:text-[rgb(255,255,255)]
            text-[rgb(255,255,255)]
          "
        >
          <Button variant="ghost">Projects</Button>
        </Link>
        <Link 
          href="/gallery" 
          className="
            inline-block 
            px-3 py-2 
            rounded-md 
            transition-all 
            duration-200 
            hover:bg-[rgba(250,169,142,0.6)]
            hover:shadow-sm
            hover:text-[rgb(255,255,255)]
            text-[rgb(255,255,255)]
          "
        >
          <Button variant="ghost">Gallery</Button>
        </Link>
      </div>
    </nav>
  );
}