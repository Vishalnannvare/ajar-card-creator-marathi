
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="bg-gradient-to-r from-pink-400 to-red-400 p-3 rounded-full shadow-lg">
          <Heart className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="absolute top-32 right-16 animate-bounce-slow">
        <div className="bg-gradient-to-r from-purple-400 to-indigo-400 p-3 rounded-full shadow-lg">
          <Calendar className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 animate-pulse-slow">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-3 rounded-full shadow-lg">
          <Sparkles className="h-6 w-6 text-white" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Create Stunning
            <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Marathi Invitations
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Professional invitation card maker with full Marathi text support. 
            <br className="hidden md:block" />
            Create beautiful digital invitations for weddings, birthdays, festivals & more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/editor/birthday-template">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                Start Creating Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg rounded-full">
              View Templates
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free to Start</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Marathi Font Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>HD Downloads</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span>Professional Templates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
