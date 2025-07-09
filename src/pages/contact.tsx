import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Navbar } from "@/components/ui/navbar";
import { Header } from "@/components/ui/header";

export default function Contact() {
  return (
    <div>
      <Header title="Contact" />
      <div className="max-w-sm md:max-w-lg lg:max-w-2xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
            containScroll: "trimSnaps"
          }}
        >
          <CarouselContent>
            <CarouselItem>
              <img
                src="/trees.jpeg"
                alt="tree leaves"
                className="w-full h-[150px] md:h-[200px] lg:h-[300px] object-cover block"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/catnipMouse.jpeg"
                alt="Nellie with catnip mouse"
                className="w-full h-[150px] md:h-[200px] lg:h-[300px] object-cover block"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious size="lg" className="left-2 bg-white/80 hover:bg-white" />
          <CarouselNext size="lg" className="right-2 bg-white/80 hover:bg-white" />
        </Carousel>
      </div>
    </div>
  );
}
