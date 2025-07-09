import { ArrowRight, Play, Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const stats = [
  { label: 'Events Covered', value: 500, suffix: '+' },
  { label: 'Verified Pros', value: 200, suffix: '+' },
  { label: 'States Covered', value: 36 },
  { label: 'Years Experience', value: 10, suffix: '+' },
];

const StatCounter: React.FC<{ value: number; suffix?: string; duration?: number }> = ({ value, suffix = '', duration = 800 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(value / (duration / 16));
    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [value, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/WhatsApp Image 2025-06-23 at 23.58.12.jpeg" 
          alt="Professional video equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-orange-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm font-medium">Trusted by 500+ Events</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Book Trusted
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"> Media Professionals</span>
            <br />for Any Event
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            From livestreaming to video coverage, LED screens to editing, stage setting to crystal clear sound—we connect you to verified pros across Nigeria.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <a 
              href="#contact"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
            >
              <span>Book Your Crew Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://m.youtube.com/@RaphealIdowu_MediaBro/streams"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {stats.map((stat) => (
              <div className="text-center" key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <StatCounter value={stat.value} suffix={stat.suffix} duration={3000}/>
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;