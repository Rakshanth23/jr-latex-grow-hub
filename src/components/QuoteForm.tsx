import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone } from "lucide-react";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    productType: '',
    quantity: '',
    requirements: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `
*Quote Request - JR Latex Raw Rubber*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Company:* ${formData.company}
*Product Type:* ${formData.productType}
*Quantity:* ${formData.quantity}
*Requirements:* ${formData.requirements}
    `.trim();

    const whatsappUrl = `https://wa.me/919042696159?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      company: '',
      productType: '',
      quantity: '',
      requirements: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="quote" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Request Quote</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get competitive pricing for bulk orders
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-card-foreground">
                Bulk Order Quote Request
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="productType">Product Type *</Label>
                    <Select value={formData.productType} onValueChange={(value) => handleChange('productType', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select product type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rss-grade-1">RSS Grade 1</SelectItem>
                        <SelectItem value="rss-grade-2">RSS Grade 2</SelectItem>
                        <SelectItem value="rss-grade-3">RSS Grade 3</SelectItem>
                        <SelectItem value="rss-grade-4">RSS Grade 4</SelectItem>
                        <SelectItem value="rss-grade-5">RSS Grade 5</SelectItem>
                        <SelectItem value="crepe-rubber">Crepe Rubber</SelectItem>
                        <SelectItem value="raw-latex">Raw Latex</SelectItem>
                        <SelectItem value="rubber-scraps">Rubber Scraps</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="quantity">Quantity Required *</Label>
                    <Input
                      id="quantity"
                      type="text"
                      value={formData.quantity}
                      onChange={(e) => handleChange('quantity', e.target.value)}
                      placeholder="e.g., 500 kg, 1 ton"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="requirements">Specific Requirements</Label>
                  <Textarea
                    id="requirements"
                    value={formData.requirements}
                    onChange={(e) => handleChange('requirements', e.target.value)}
                    placeholder="Any specific quality requirements, delivery timeline, etc."
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit" 
                    variant="nature"
                    className="flex-1 text-lg py-6"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Quote Request
                  </Button>
                  
                  <Button 
                    type="button"
                    variant="whatsapp"
                    onClick={() => window.open('https://wa.me/919042696159', '_blank')}
                    className="flex-1 text-lg py-6"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Direct WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;