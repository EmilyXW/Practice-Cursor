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
          <AccordionTrigger className="text-white text-xl font-bold ">Toy Car Accessibility</AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center gap-8 p-8">
              <div className="flex-1">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <img
                        src="/CAT1.jpg"
                        alt="Emily working with toy car wiring"
                        className="carousel-image"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src="/CAT2.jpg"
                        alt="CAT project team working on almost finished toy car"
                        className="carousel-image"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div className="flex-1 text-white">
                <p className="text-lg">
                  As part of the Cornell Assistive Technologies (CAT) team, I worked on the GoBabyGo project modifying toy cars for children with disabilities.
                  Pictures of the car I modified can be seen to the left. I rewired the car such that it could be moved with the push of a button and added
                  in the safety feature of an emergency turn-off switch. I also contributed
                  to mechanical modifications to the car, such as adding higher sidewalls and a larger seat. This project was incredibly rewarding and I hope to
                  continue making a difference with future projects.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="p-3 bg-[rgba(0,51,90,0.6)]">
          <AccordionTrigger className="text-white text-xl font-bold ">TrustFall Hip Protector</AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center gap-8 p-8">
              <div className="flex-1">
                <iframe
                  src="/TrustFallPoster.pdf"
                  className="w-full h-96"
                  title="TrustFall poster"
                />
              </div>
              <div className="flex-1 text-white">
                <p className="text-lg">
                  <p>Our goal was to address the problem of hip injuries in older
                    adults. Hip fractures become more likely with age, though most elders
                    do not use hip protectors due to uncomfortable designs or concerns of
                    social stigma. Thus, we wanted to make a comfortable and discrete
                    protective device to encourage the implementation of hip protection,
                    especially amongst older adults. Our device would detect a fall using machine learning,
                    then deploy airbags to cushion the fall. Our prototype places an
                    airbag at each hip, with a pouch in front for the safe storage of
                    other elements of the device, such as the Arduino, accelerometer, and
                    CO<sub>2</sub> canisters.
                  </p>
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
