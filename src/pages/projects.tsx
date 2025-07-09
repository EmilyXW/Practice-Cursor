import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Header } from "@/components/ui/header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
export default function Projects() {
  return (
    <div>
      <Header title="Projects" />

      <Accordion type="single" collapsible className="mt-5 mb-5">
        <AccordionItem value="item-1" className="p-3 bg-[rgba(0,51,90,0.6)]">
          <AccordionTrigger className="text-white">Project 1</AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center gap-8 p-8">
              <div className="flex-1">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <img
                        src="/catnipMouse.jpeg"
                        alt="Nellie with catnip mouse"
                        className="carousel-image"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src="/salmonSky.jpeg"
                        alt="salmon sky"
                        className="carousel-image"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src="/cloudRoad.jpeg"
                        alt="cloud road"
                        className="carousel-image"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div className="flex-1 text-white">
                <h2 className="text-3xl font-bold mb-4">Some Title</h2>
                <p className="text-lg">
                  I'll probably describe a project here.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="p-3 bg-[rgba(0,51,90,0.6)]">
          <AccordionTrigger className="text-white">Project 2</AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center gap-8 p-8">
              <div className="flex-1">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <img
                        src="/catnipMouse.jpeg"
                        alt="Nellie with catnip mouse"
                        className="carousel-image"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src="/salmonSky.jpeg"
                        alt="salmon sky"
                        className="carousel-image"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src="/cloudRoad.jpeg"
                        alt="cloud road"
                        className="carousel-image"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div className="flex-1 text-white">
                <h2 className="text-3xl font-bold mb-4">Some Title</h2>
                <p className="text-lg">
                  I'll probably describe a project here.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
