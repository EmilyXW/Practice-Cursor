import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Navbar } from "@/components/ui/navbar";
import { Header } from "@/components/ui/header";

export default function About() {

  return (
    <div>
      <Header title="About" />
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img
              src="/nightSky.jpeg"
              alt="night sky"
              style={{
                margin: "0 auto",
                maxWidth: "100%",
                height: "60vh",
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
      <p className="p_spaced">
        wertyuiojhgfdcfvgbhnjm,m qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
      </p>
    </div>
  );
}
