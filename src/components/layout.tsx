import { Navbar } from "@/components/ui/navbar";
import { ParallaxBackground } from "./ParallaxBackground";

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <ParallaxBackground speed={0.3}>
            <div>
                {/*navbar to appear on every page*/}
                <Navbar />

                {/*main content container*/}
                <main className="container mx-auto px-4 py-8">
                    {children}
                </main>
            </div>
        </ParallaxBackground>
    );
}