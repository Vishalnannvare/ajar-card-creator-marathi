
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              InviteCard Pro
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Create beautiful Marathi invitation cards with professional templates and easy-to-use editing tools.
            </p>
            <div className="flex gap-4">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-lg">
                <Heart className="h-4 w-4" />
              </div>
              <span className="text-sm text-gray-300">Made with love in India</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-200">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#templates" className="text-gray-300 hover:text-white transition-colors">Templates</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#categories" className="text-gray-300 hover:text-white transition-colors">Categories</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-200">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Wedding Cards</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Birthday Invitations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Festival Cards</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Baby Shower</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-200">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">hello@invitecardpro.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 InviteCard Pro. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
