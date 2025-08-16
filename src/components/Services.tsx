import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Droplets, Package, Recycle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Factory className="h-12 w-12 text-primary" />,
      title: "Rubber Sheet Manufacturing",
      description: "Premium quality rubber sheets in all grades and specifications"
    },
    {
      icon: <Droplets className="h-12 w-12 text-primary" />,
      title: "Latex Processing",
      description: "Raw rubber latex processing with modern techniques"
    },
    {
      icon: <Package className="h-12 w-12 text-primary" />,
      title: "Drying Services",
      description: "Professional rubber drying services for optimal quality"
    },
    {
      icon: <Recycle className="h-12 w-12 text-primary" />,
      title: "Rubber Scrap Handling",
      description: "Efficient processing and handling of rubber scraps"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive rubber processing solutions for all your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-nature transition-all duration-300 border-border bg-card">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;