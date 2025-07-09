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
        <AccordionItem value="item-1" className="p-3 bg-[rgba(255,211,197,0.6)]">
          <AccordionTrigger>Project 1</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="p-3 bg-[rgba(255,211,197,0.6)]">
          <AccordionTrigger>Project 2</AccordionTrigger>
          <AccordionContent>
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <img
                    src="/goose.jpeg"
                    alt="canada goose in grass"
                    className="w-full h-[300px] object-cover block"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="/catnipMouse.jpeg"
                    alt="Nellie with catnip mouse"
                    className="w-full h-[300px] object-cover block"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
