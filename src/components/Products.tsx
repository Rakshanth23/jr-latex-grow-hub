import { Card, CardContent } from "@/components/ui/card";

const Products = () => {
  const productImages = [
    {
      src: "/lovable-uploads/eccc42fb-a0cc-40ef-9612-9493cba3337d.png",
      alt: "Rubber Forest Plantation",
      title: "Natural Rubber Source"
    },
    {
      src: "/lovable-uploads/b43862ba-21d4-444e-aad1-3b8b0866137b.png",
      alt: "Rubber Tapping Process",
      title: "Fresh Latex Collection"
    },
    {
      src: "/lovable-uploads/5061cf69-d5b4-4d14-8061-a5c45f002777.png",
      alt: "Latex Flow Collection",
      title: "Quality Latex Processing"
    },
    {
      src: "/lovable-uploads/62b8357b-2da8-4c97-b198-39033b89411f.png",
      alt: "Latex Collection Bowl",
      title: "Professional Collection Methods"
    }
  ];

  const productCategories = [
    "RSS Grade 1-5 Rubber Sheets",
    "Crepe Rubber Sheets",
    "Raw Rubber Latex",
    "Rubber Scraps & Off-cuts",
    "Processed Rubber Compounds"
  ];

  return (
    <section id="products" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium quality rubber products from source to finish
          </p>
        </div>

        {/* Product Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {productImages.map((image, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-nature transition-all duration-300 border-border bg-card">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-card-foreground text-center">{image.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Product Categories */}
        <div className="bg-accent/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Available Products</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-4 text-center">
                <p className="font-semibold text-card-foreground">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;