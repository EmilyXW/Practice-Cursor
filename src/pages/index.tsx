import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Header } from "@/components/ui/header";

export default function Home() {
  return (
    <div>
      
      <div className="relative w-full min-h-screen overflow-hidden flex items-center">
        <div className="flex w-full items-center justify-center px-8">
          <div className="flex-1 max-w-lg text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Welcome</h2>
            <p className="text-xl md:text-2xl mb-6 opacity-90">
              Discover my collection.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[rgb(255,203,47)] rounded-full"></div>
                <span className="text-base md:text-lg">Cat Photography</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[rgb(255,203,47)] rounded-full"></div>
                <span className="text-base md:text-lg">Quiet Landscapes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[rgb(255,203,47)] rounded-full"></div>
                <span className="text-base md:text-lg">Creative Projects</span>
              </div>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center ml-16">
            {/* gradient boxes behind image*/}
            <div className="absolute -left-20 -top-6 -bottom-6 right-0 bg-[rgb(109,67,90)] rounded-lg -z-20"></div>
            <div className="absolute -left-40 -top-2 -bottom-2 right-0 bg-[#b35c3d] rounded-lg -z-30"></div>
            {/* Rectangle background behind the image */}
            <div className="absolute -inset-10 bg-[rgb(0,51,90)] rounded-lg -z-10 mr-10"></div>
            <img
              src="/nightSky.jpeg"
              alt="Night sky"
              className="max-w-[50vw] max-h-[80vh] object-contain relative z-10 pr-10 pl-20"
            />
          </div>
        </div>
      </div>
      
      
    </div>
  );
}
