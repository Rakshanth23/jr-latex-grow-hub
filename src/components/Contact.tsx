import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, MapPin, Clock, Users } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919042696159', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919042696159', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:apsarrajegan@gmail.com', '_blank');
  };

  const handleAgroEmail = () => {
    window.open('mailto:rakshanthjegan1@gmail.com', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch for bulk orders, pricing, or any inquiries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center text-card-foreground">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Key Contacts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-card-foreground">Roji Jegan</h4>
                  <p className="text-muted-foreground">Managing Director</p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Rakshanth Jegan</h4>
                  <p className="text-muted-foreground">Operations & Customer Relations</p>
                  <p className="text-sm text-muted-foreground">Son of Late U. Jegan (Founder)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center text-card-foreground">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-card-foreground">+91 9042696159</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-card-foreground">apsarrajegan@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-card-foreground">Mon-Sat: 8AM-6PM</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center text-card-foreground">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  Agro AI Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Advanced Agricultural Technology</p>
                <p className="text-card-foreground">Rakshanth Jegan</p>
                <p className="text-muted-foreground">rakshanthjegan1@gmail.com</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Quick Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="whatsapp"
                  onClick={handleWhatsApp}
                  className="w-full text-lg py-6"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Direct Chat
                </Button>
                
                <Button 
                  variant="nature"
                  onClick={handleCall}
                  className="w-full text-lg py-6"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={handleEmail}
                  className="w-full text-lg py-6"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Languages Supported</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-secondary rounded-lg">
                    <span className="font-semibold text-secondary-foreground">தமிழ்</span>
                  </div>
                  <div className="p-3 bg-secondary rounded-lg">
                    <span className="font-semibold text-secondary-foreground">हिंदी</span>
                  </div>
                  <div className="p-3 bg-secondary rounded-lg">
                    <span className="font-semibold text-secondary-foreground">English</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;