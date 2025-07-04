import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Navbar } from "@/components/ui/navbar";
import { Header } from "@/components/ui/header";

export default function Home() {
  return (
    <div>
      <div className="bg-red-500 text-white p-4">If this is red, Tailwind works!</div>
      <Navbar />
      
      {/* Add container with padding to make buttons visible */}
      <div className="px-16 py-4">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <img
                src="/clouds.jpeg"
                alt="clouds"
                style={{
                  width: "100%",
                  height: 300,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/catnipMouse.jpeg"
                alt="Nellie with catnip mouse"
                style={{
                  width: "100%",
                  height: 300,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      
      <Header title="Home" />
      <p>
        wertyuiojhgfdcfvgbhnjm,m qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
      </p>
    </div>
  );
}
