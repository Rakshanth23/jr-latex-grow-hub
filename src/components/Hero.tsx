import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919042696159', '_blank');
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative bg-hero-gradient"
      style={{
        backgroundImage: `url('/lovable-uploads/eccc42fb-a0cc-40ef-9612-9493cba3337d.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="absolute inset-0 bg-hero-gradient"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            JR Latex Raw Rubber
          </h1>
          <p className="text-xl md:text-2xl text-latex-white mb-8 max-w-2xl mx-auto">
            Premium Quality Rubber Sheets | Raw Latex Processing | Drying Services
          </p>
          <p className="text-lg text-latex-white/90 mb-12">
            Family Business • All Grades Available • Bulk Orders Welcome
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="nature"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-4 h-auto"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
            <Button 
              variant="whatsapp"
              size="lg"
              onClick={handleWhatsApp}
              className="text-lg px-8 py-4 h-auto"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;