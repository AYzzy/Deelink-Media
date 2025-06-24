import { useState, useEffect } from 'react';
import { Menu, X, Video, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-2 rounded-lg">
              <Video className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Deelink Connect
              </h1>
              <p className={`text-xs transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-gray-200'
              }`}>
                Media Professionals
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className={`font-medium transition-colors hover:text-orange-500 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Services
            </a>
            <a href="#how-it-works" className={`font-medium transition-colors hover:text-orange-500 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              How It Works
            </a>
            <a href="#contact" className={`font-medium transition-colors hover:text-orange-500 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Contact
            </a>
            <a 
              href="tel:08083990808" 
              className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>08083990808</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 font-medium hover:text-orange-500 transition-colors">
                Services
              </a>
              <a href="#how-it-works" className="text-gray-700 font-medium hover:text-orange-500 transition-colors">
                How It Works
              </a>
              <a href="#contact" className="text-gray-700 font-medium hover:text-orange-500 transition-colors">
                Contact
              </a>
              <a 
                href="tel:08083990808" 
                className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-3 rounded-full font-semibold text-center flex items-center justify-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>08083990808</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;