import { Carousel, CarouselItem, CarouselContent } from "@/components/ui/carousel";
import { Navbar } from "@/components/ui/navbar";
import { Header } from "@/components/header";
export default function CatPhotos() {
  return (
    <div>
      <Navbar />
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img
              src="/catnipMouse.jpeg"
              alt="cat with catnip mouse"
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
      </Carousel>
      <Header title = "Cat Photos" />
    </div>
  );
}
