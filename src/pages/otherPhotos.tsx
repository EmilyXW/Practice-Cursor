import { Carousel, CarouselItem, CarouselContent } from "@/components/ui/carousel";
import { Navbar } from "@/components/ui/navbar";
import { Header } from "@/components/header";
export default function OtherPhotos() {
  return (
    <div>
      <Navbar />
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img
              src="/goose.jpeg"
              alt="canada goose in grass"
              style={{
                margin: "0 auto",
                maxWidth: "100%",
                height: "60vh",
                objectFit: "contain",
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
      <Header title = "Other Photos" />
    </div>
  );
}
