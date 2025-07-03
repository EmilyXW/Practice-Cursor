import { Carousel, CarouselItem, CarouselContent } from "@/components/ui/carousel";

export default function Home() {
  return (
    <div>
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
      <h1 style={{ textAlign: 'center', fontSize: 100, marginTop: 32, fontFamily: 'Shanfe, cursive' }}>
        Nellie
      </h1>
    </div>
  );
}