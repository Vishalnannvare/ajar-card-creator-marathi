
import { Button } from "@/components/ui/button";
import { Palette, Crown, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-xl">
              <Palette className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent">
              InviteCard Pro
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#templates" className="text-gray-700 hover:text-purple-600 transition-colors">Templates</a>
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors">Pricing</a>
            <a href="#categories" className="text-gray-700 hover:text-purple-600 transition-colors">Categories</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-gray-700 hover:text-purple-600">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
              <Crown className="h-4 w-4 mr-2" />
              Get Pro
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
