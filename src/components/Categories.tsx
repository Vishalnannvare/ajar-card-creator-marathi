
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Cake, Crown, Users, Gift, Star } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      icon: Heart,
      title: "Wedding Invitations",
      description: "लग्नाचे निमंत्रण",
      count: "50+ Templates",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50"
    },
    {
      icon: Cake,
      title: "Birthday Cards",
      description: "वाढदिवसाचे कार्ड",
      count: "30+ Templates",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50"
    },
    {
      icon: Crown,
      title: "Festival Invites",
      description: "सणांचे निमंत्रण",
      count: "40+ Templates",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      icon: Users,
      title: "Family Functions",
      description: "कौटुंबिक समारंभ",
      count: "25+ Templates",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50"
    },
    {
      icon: Gift,
      title: "Baby Shower",
      description: "गोडभराई",
      count: "20+ Templates",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: Star,
      title: "Special Events",
      description: "विशेष कार्यक्रम",
      count: "35+ Templates",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50"
    }
  ];

  return (
    <section id="categories" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Invitation Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of categories perfect for every occasion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className={`group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br ${category.bgGradient} hover:scale-105 cursor-pointer`}>
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.gradient} mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{category.title}</h3>
                <p className="text-lg font-marathi mb-3 text-gray-700">{category.description}</p>
                <p className="text-sm text-gray-500 bg-white/60 px-3 py-1 rounded-full inline-block">{category.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
