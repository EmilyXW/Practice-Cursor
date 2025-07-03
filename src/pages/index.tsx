import { Carousel, CarouselItem, CarouselContent } from "@/components/ui/carousel";
import { Navbar } from "@/components/ui/navbar";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img
              src="/clouds.jpeg"
              alt="cloud and koi unfinished painting"
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
      <Header title = "Home" />
      <p>
          wertyuiojhgfdcfvgbhnjm,m qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq  
      </p>
    </div>
  );
}
