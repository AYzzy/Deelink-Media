import { Shield, Clock, Star, Zap } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Verified, Skilled Freelancers',
    description: 'Every professional in our network is thoroughly vetted for skills, reliability, and professionalism.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Clock,
    title: 'Fast Response & Flexible Pricing',
    description: 'Quick turnaround times and competitive pricing that adapts to your budget and timeline.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Star,
    title: 'Powered by 10+ Years Experience',
    description: 'Backed by Deelink Media\'s decade of excellence in the Nigerian media industry.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Zap,
    title: 'Seamless Project Management',
    description: 'From booking to delivery, we handle all coordination so you can focus on your event.',
    color: 'from-orange-500 to-orange-600'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Deelink Connect?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just another booking platform. We're your trusted partner in creating 
            exceptional media experiences that exceed expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-orange-600/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">Successful Projects</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">48hr</div>
              <div className="text-gray-300">Average Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;