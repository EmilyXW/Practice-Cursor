import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b bg-background">
      <div>
        <Link href="/">
          <span className="font-bold text-2xl">Home</span>
        </Link>
      </div>
      <div className="flex gap-4">
        <Link href="/about">
          <Button variant="ghost">About</Button>
        </Link>
        <Link href="/contact">
          <Button variant="ghost">Contact</Button>
        </Link>
        <Link href="/catPhotos">
          <Button variant="ghost">Cat Photos</Button>
        </Link>
        <Link href="/otherPhotos">
          <Button variant="ghost">Other Photos</Button>
        </Link>
      </div>
    </nav>
  );
}