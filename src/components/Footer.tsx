import { Video, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube,Linkedin} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img
              src="/efacdad2-dcce-4c1a-9abf-b3337941f074.jpg"
              alt="Deelink Connect Logo"
              className="h-10 w-10 object-cover rounded"
            />
              <div>
                <h3 className="text-xl font-bold">Deelink Connect</h3>
                <p className="text-sm text-gray-400">Media Professionals</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Connecting you to verified media professionals across Nigeria. From livestreaming to video coverage, 
              we make your events unforgettable with our network of skilled freelancers.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <a href="tel:08083990808" className="text-gray-300 hover:text-white transition-colors">
                  08083990808
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:info@deelinkconnect.com" className="text-gray-300 hover:text-white transition-colors">
                  info@deelinkconnect.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">Nigeria & Beyond</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 text-red-400" />
                <span className="text-gray-300">Nigeria & Beyond</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Livestreaming</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Video Coverage</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Wedding Shoots</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">LED Screens</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Sound Systems</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Drone Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-orange-400 transition-colors">How It Works</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Join Our Crew</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a
                href="https://www.instagram.com/raphealidowu_?igsh=MWV5NTdvaGlra3lpdw%3D%3D&utm_source=qr"
                className="text-gray-400 hover:text-pink-400 transition-colors"
                target="_blank"
                rel="noopener"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rapheal-idowu-67255a6a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 Deelink Connect. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Powered by Deelink Media - 10+ Years of Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;