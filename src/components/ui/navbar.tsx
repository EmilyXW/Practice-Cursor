import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        borderBottom: "1px solid #eee",
        background: "var(--background)",
      }}
    >
      <div>
        <Link href="/">
          <span style={{ fontWeight: "bold", fontSize: 24 }}>Home</span>
        </Link>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
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