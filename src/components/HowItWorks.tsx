import { MessageSquare, Users, Award, CreditCard } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Tell Us Your Event Needs',
    description: 'Share your event details, requirements, and vision through our simple form or direct contact.',
    step: '01'
  },
  {
    icon: Users,
    title: 'We Assign the Best Team Near You',
    description: 'Our algorithm matches you with verified professionals in your area based on expertise and availability.',
    step: '02'
  },
  {
    icon: Award,
    title: 'Your Event is Captured in Excellence',
    description: 'Our professional crew delivers exceptional service, ensuring every moment is perfectly captured.',
    step: '03'
  },
  {
    icon: CreditCard,
    title: 'You Pay Us, We Handle the Pros',
    description: 'Simple, transparent pricing. Pay us directly and we take care of all professional payments.',
    step: '04'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting professional media coverage for your event is simple and straightforward. 
            Here's how we make it happen in just four easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center relative z-10 border border-gray-100">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="bg-gradient-to-r from-blue-100 to-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Connection Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8 mb-8">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-blue-200 to-orange-200"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of satisfied clients who trust Deelink Connect for their media needs.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;