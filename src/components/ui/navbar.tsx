import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b-2 border-blue-200 bg-background">
      <div>
        <Link 
          href="/" 
          className="
            inline-block 
            px-3 py-2 
            rounded-md 
            transition-all 
            duration-200 
            hover:bg-blue-100
            hover:shadow-sm
          "
        >
          <span className="font-bold text-2xl">Home</span>
        </Link>
      </div>
      <div className="flex gap-4">
        <Link 
          href="/about" 
          className="
            inline-block 
            px-3 py-2 
            rounded-md 
            transition-all 
            duration-200 
            hover:bg-blue-100 
            hover:shadow-sm
          "
        >
          <Button variant="ghost">About</Button>
        </Link>
        <Link 
          href="/contact" 
          className="
            inline-block 
            px-3 py-2 
            rounded-md 
            transition-all 
            duration-200 
            hover:bg-blue-100 
            hover:shadow-sm
          "
        >
          <Button variant="ghost">Contact</Button>
        </Link>
        <Link 
          href="/catPhotos" 
          className="
            inline-block 
            px-3 py-2 
            rounded-md 
            transition-all 
            duration-200 
            hover:bg-blue-100 
            hover:shadow-sm
          "
        >
          <Button variant="ghost">Cat Photos</Button>
        </Link>
        <Link 
          href="/otherPhotos" 
          className="
            inline-block 
            px-3 py-2 
            rounded-md 
            transition-all 
            duration-200 
            hover:bg-blue-100 
            hover:shadow-sm
          "
        >
          <Button variant="ghost">Other Photos</Button>
        </Link>
      </div>
    </nav>
  );
}