import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Leaf } from "lucide-react";
import agroDrone from "@/assets/agro-drone.jpg";
import cropMonitoring from "@/assets/crop-monitoring.jpg";
import agroRobot from "@/assets/agro-robot.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About JR Latex</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A trusted family business built on quality, reliability, and generations of expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Our Story</h3>
            <div className="space-y-4 text-foreground">
              <p className="text-lg">
                Founded by the late <strong>U. Jegan</strong>, JR Latex Raw Rubber has been serving the rubber industry with dedication and excellence.
              </p>
              <p className="text-lg">
                Today, managed by <strong>Roji Jegan</strong>, we continue the legacy of providing premium quality rubber products and services.
              </p>
              <p className="text-lg">
                <strong>Rakshanth Jegan</strong>, son of U. Jegan, leads our operations and customer relations, bringing modern expertise to traditional values.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <Card className="border-border bg-card">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-card-foreground mb-2">Family Business</h4>
                <p className="text-muted-foreground">Generations of expertise and trust</p>
              </CardContent>
            </Card>
            
            <Card className="border-border bg-card">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-card-foreground mb-2">Quality Assured</h4>
                <p className="text-muted-foreground">Premium grades and standards</p>
              </CardContent>
            </Card>
            
            <Card className="border-border bg-card">
              <CardContent className="p-6 text-center">
                <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-card-foreground mb-2">Natural Process</h4>
                <p className="text-muted-foreground">Sustainable rubber processing</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Agro AI Services */}
        <div className="bg-accent/50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-primary text-center mb-6">Agro AI Services</h3>
          <p className="text-lg text-foreground text-center mb-6">
            Advanced agricultural technology solutions provided by <strong>Rakshanth Jegan</strong>
          </p>
          
          {/* Agro AI Image Gallery */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="relative overflow-hidden rounded-lg shadow-nature">
              <img 
                src={agroDrone} 
                alt="Agricultural AI Drone Technology"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold">AI Drone Monitoring</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-nature">
              <img 
                src={cropMonitoring} 
                alt="Smart Crop Monitoring System"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold">Smart Monitoring</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-nature">
              <img 
                src={agroRobot} 
                alt="Agricultural Automation Robot"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold">Automated Farming</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-2">Contact for AI Solutions:</p>
            <p className="text-foreground">
              <a href="mailto:rakshanthjegan1@gmail.com" className="text-primary hover:underline font-semibold">
                rakshanthjegan1@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;