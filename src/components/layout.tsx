import { Navbar } from "@/components/ui/navbar";
import { ParallaxBackground } from "./ParallaxBackground";

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <ParallaxBackground speed={0.3}>
            <div className="relative">
                {/* Left blue column */}
                <div className="fixed left-0 top-0 w-8 h-full bg-[rgb(0,51,90)] bg-opacity-60 z-50"></div>
                
                {/* Right blue column */}
                <div className="fixed right-0 top-0 w-8 h-full bg-[rgb(0,51,90)] bg-opacity-60 z-50"></div>
                
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