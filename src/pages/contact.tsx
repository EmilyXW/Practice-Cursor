import { ContactCard } from "@/components/ContactCard";
import { Header } from "@/components/ui/header";

export default function Contact() {
  return (
    <div>
      <Header title="Contact" />
      <div className="p-8">
        <ContactCard 
          name="Emily Wang" 
          role="ECE Undergrad" 
          email="xuyouwang10@gmail.com" 
          avatarUrl=""
        /> 
      </div>
    </div>
  );
}
