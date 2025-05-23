
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Edit, Eye, Heart } from "lucide-react";

const Templates = () => {
  const templates = [
    {
      id: "birthday-template",
      title: "First Birthday Celebration",
      titleMarathi: "प्रथम वाढदिवस सोहळा",
      category: "Birthday",
      image: "/lovable-uploads/8ea36766-93bc-4297-85f1-1db528100bbb.png", // Updated to use uploaded image
      isPremium: false,
      likes: 245
    },
    {
      id: "wedding-template",
      title: "Traditional Wedding",
      titleMarathi: "पारंपारिक लग्न",
      category: "Wedding",
      image: "/placeholder.svg?height=400&width=300",
      isPremium: true,
      likes: 189
    },
    {
      id: "festival-template",
      title: "Ganesh Chaturthi",
      titleMarathi: "गणेश चतुर्थी",
      category: "Festival",
      image: "/placeholder.svg?height=400&width=300",
      isPremium: false,
      likes: 156
    },
    {
      id: "baby-shower-template",
      title: "Baby Shower Invitation",
      titleMarathi: "गोडभराई निमंत्रण",
      category: "Baby Shower",
      image: "/placeholder.svg?height=400&width=300",
      isPremium: true,
      likes: 134
    }
  ];

  return (
    <section id="templates" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Beautiful Templates
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start with our professionally designed templates and customize them to your heart's content
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={template.image} 
                  alt={template.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {template.isPremium && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      PRO
                    </span>
                  )}
                  <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <Heart className="h-3 w-3 text-red-500" />
                    <span className="text-xs font-semibold">{template.likes}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Eye className="h-4 w-4 mr-1" />
                    Preview
                  </Button>
                  <Link to={`/editor/${template.id}`}>
                    <Button size="sm" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                      <Edit className="h-4 w-4 mr-1" />
                      Customize
                    </Button>
                  </Link>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-purple-600 font-semibold mb-2">{template.category}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{template.title}</h3>
                <p className="text-sm font-marathi text-gray-600">{template.titleMarathi}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3">
            View All Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Templates;
