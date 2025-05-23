
import { Card, CardContent } from "@/components/ui/card";
import { Type, Palette, Download, Smartphone, Globe, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Type,
      title: "Marathi Text Support",
      description: "Full support for Devanagari script with beautiful Marathi fonts",
      gradient: "from-pink-500 to-red-500"
    },
    {
      icon: Palette,
      title: "Professional Templates",
      description: "Stunning pre-designed templates for all occasions",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Zap,
      title: "Real-time Editing",
      description: "See your changes instantly as you customize your invitation",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Download,
      title: "HD Downloads",
      description: "Download high-quality images perfect for printing or sharing",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Create and edit invitations on any device, anywhere",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: Globe,
      title: "Easy Sharing",
      description: "Share your invitations directly via WhatsApp, social media",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create professional invitation cards with Marathi text support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
