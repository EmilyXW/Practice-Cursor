import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Header } from "@/components/ui/header";
export default function Gallery() {
  return (
    <div>
      <Header title="Gallery" />
      <div className="carousel-main">
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
              src="/salmonSky.jpeg"
              alt="salmon sky"
              className="carousel-image"/>
          </CarouselItem>
          <CarouselItem>
            <img
              style={{ transform: 'rotate(90deg)' }}
              src="/frozenGorge.jpeg"
              alt="frozen gorge"
              className="carousel-image"/>
          </CarouselItem>
          <CarouselItem>
            <img
              src="/cloudRoad.jpeg"
              alt="cloud road"
              className="carousel-image"/>
          </CarouselItem>
          <CarouselItem>
            <img
              src="/catnipMouse.jpeg"
              alt="Nellie with catnip mouse"
              className="carousel-image"/>
          </CarouselItem>
          <CarouselItem>
            <img
              style={{ transform: 'rotate(90deg)' }}
              src="/wshPiano.jpeg"
              alt="wsh piano"
              className="carousel-image"/>
          </CarouselItem>
          </CarouselContent>
          <CarouselPrevious size="lg" className="-left-12 bg-white/80 hover:bg-white" />
          <CarouselNext size="lg" className="-right-12 bg-white/80 hover:bg-white" />
        </Carousel>
      </div>
<div className="mt-24"></div>
      <div className="carousel-main">
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
              src="/salmonSky.jpeg"
              alt="salmon sky"
              className="carousel-image"/>
          </CarouselItem>
          <CarouselItem>
            <img
              style={{ transform: 'rotate(90deg)' }}
              src="/frozenGorge.jpeg"
              alt="frozen gorge"
              className="carousel-image"/>
          </CarouselItem>
          <CarouselItem>
            <img
              src="/cloudRoad.jpeg"
              alt="cloud road"
              className="carousel-image"/>
          </CarouselItem>
          <CarouselItem>
            <img
              src="/catnipMouse.jpeg"
              alt="Nellie with catnip mouse"
              className="carousel-image"/>
          </CarouselItem>
          <CarouselItem>
            <img
              style={{ transform: 'rotate(90deg)' }}
              src="/wshPiano.jpeg"
              alt="wsh piano"
              className="carousel-image"/>
          </CarouselItem>
          </CarouselContent>
          <CarouselPrevious size="lg" className="-left-12 bg-white/80 hover:bg-white" />
          <CarouselNext size="lg" className="-right-12 bg-white/80 hover:bg-white" />
        </Carousel>
      </div>
    </div>
  );
}
