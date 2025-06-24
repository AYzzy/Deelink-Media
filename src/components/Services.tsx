import { Video, Camera, Monitor, Mic, Bone as Drone, Edit, Radio, MapPin, Wifi } from 'lucide-react';

const services = [
  {
    icon: Radio,
    title: 'Livestreaming & Broadcasting',
    description: 'Professional live streaming for events, conferences, and church services with multi-camera setups.',
    image: '/WhatsApp Image 2025-06-23 at 23.58.11.jpeg'
  },
  {
    icon: Video,
    title: 'Event Video Coverage',
    description: 'Complete video documentation of your events with cinematic quality and professional editing.',
    image: '/WhatsApp Image 2025-06-23 at 23.58.12 (1).jpeg'
  },
  {
    icon: Camera,
    title: 'Wedding Shoots',
    description: 'Capture your special moments with artistic photography and videography that tells your story.',
    image: '/WhatsApp Image 2025-06-23 at 23.58.12 (2).jpeg'
  },
  {
    icon: Monitor,
    title: 'LED Screens & Stage Branding',
    description: 'High-resolution LED displays and custom stage branding to elevate your event presentation.',
    image: '/WhatsApp Image 2025-06-23 at 23.58.11 (1).jpeg'
  },
  {
    icon: Drone,
    title: 'Drone & Photography',
    description: 'Aerial cinematography and professional photography for unique perspectives and stunning visuals.',
    image: '/WhatsApp Image 2025-06-23 at 23.58.12.jpeg'
  },
  {
    icon: Mic,
    title: 'Sound & PA Systems',
    description: 'Crystal clear audio solutions with professional sound engineering for any venue size.',
    image: '/WhatsApp Image 2025-06-23 at 23.58.11.jpeg'
  },
  {
    icon: Edit,
    title: 'Church & Corporate Media',
    description: 'Specialized media services for religious and corporate events with broadcast-quality production.',
    image: '/WhatsApp Image 2025-06-23 at 23.58.12 (1).jpeg'
  },
  {
    icon: MapPin,
    title: 'Venue & Locations',
    description: 'Access to premium venues and unique locations across Nigeria for your perfect event setting.',
    image: '/WhatsApp Image 2025-06-23 at 23.58.12 (2).jpeg'
  },
  {
    icon: Wifi,
    title: 'Virtual & Hybrid Events',
    description: 'Seamless virtual and hybrid event solutions connecting global audiences with local experiences.',
    image: '/WhatsApp Image 2025-06-23 at 23.58.11 (1).jpeg'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive media services delivered by verified professionals across Nigeria. 
            From concept to completion, we handle every aspect of your event's media needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;