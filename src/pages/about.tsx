import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Navbar } from "@/components/ui/navbar";
import { Header } from "@/components/ui/header";

export default function About() {

  return (
    <div>
      <Header title="About" />
      
      <p className="p_spaced">
        My name is Emily Wang. I like cats. My cat is very roly poly.
      </p>
    </div>
  );
}
