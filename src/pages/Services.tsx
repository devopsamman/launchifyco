import React, { useEffect } from "react";
import { Megaphone, Palette, Smartphone, Code, Target, Zap, Users, BarChart3, CheckCircle, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainServices = [
    {
      id: "advertising",
      icon: <Megaphone size={32} />,
      title: "Advertising Services",
      description: "Drive traffic and boost sales with our comprehensive digital advertising solutions. From Google Ads to social media campaigns, we create data-driven strategies that deliver results.",
      image: "/lovable-uploads/708f9e32-840d-46a4-aaa4-75ad2689e16f.png",
      features: [
        "Google Ads & Shopping Campaigns",
        "Facebook & Instagram Advertising",
        "Performance Marketing",
        "Conversion Rate Optimization",
        "Analytics & Reporting",
        "A/B Testing & Optimization"
      ]
    },
    {
      id: "theme-development",
      icon: <Palette size={32} />,
      title: "Theme Development Services",
      description: "Custom Shopify themes that perfectly represent your brand and optimize for conversions. We create responsive, fast-loading themes tailored to your specific business needs.",
      image: "/lovable-uploads/becfc2e3-b59f-4f86-afca-b9f6fc7b7c14.png",
      features: [
        "Custom Shopify Theme Design",
        "Mobile-First Responsive Design",
        "Speed Optimization",
        "SEO-Friendly Structure",
        "Conversion-Focused Layouts",
        "Brand Integration & Customization"
      ]
    },
    {
      id: "app-development",
      icon: <Smartphone size={32} />,
      title: "Shopify App Development",
      description: "Extend your store's functionality with custom Shopify apps. From inventory management to customer engagement tools, we develop apps that streamline your business operations.",
      image: "https://images.unsplash.com/photo-1516873240891-4bf014728d44?auto=format&fit=crop&q=80",
      features: [
        "Custom Shopify App Development",
        "Third-party Integrations",
        "Automation Tools",
        "Analytics & Reporting Apps",
        "Customer Engagement Features",
        "Performance Monitoring"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹25,000",
      duration: "Starting from",
      description: "Perfect for small businesses getting started with ecommerce",
      features: [
        "Responsive Shopify store setup",
        "Up to 50 products",
        "Basic theme customization",
        "Payment gateway integration",
        "Basic SEO optimization",
        "1 month support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "₹75,000",
      duration: "Starting from",
      description: "Ideal for growing businesses with advanced requirements",
      features: [
        "Custom theme development",
        "Up to 500 products",
        "Advanced customizations",
        "Multi-payment options",
        "Advanced SEO & Analytics",
        "Social media integration",
        "3 months support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹1,50,000",
      duration: "Starting from",
      description: "Complete solution for large-scale ecommerce operations",
      features: [
        "Fully custom development",
        "Unlimited products",
        "Custom app development",
        "Multi-channel integration",
        "Advanced automation",
        "Performance optimization",
        "6 months support & maintenance"
      ],
      popular: false
    }
  ];

  const additionalServices = [
    {
      icon: <Code size={24} />,
      title: "API Integrations",
      description: "Connect your store with third-party tools and services."
    },
    {
      icon: <Target size={24} />,
      title: "Conversion Optimization",
      description: "Optimize your store for maximum sales and conversions."
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Optimization",
      description: "Speed up your store for better user experience."
    },
    {
      icon: <Users size={24} />,
      title: "Customer Support Setup",
      description: "Implement live chat and support systems."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Analytics & Reporting",
      description: "Track performance with detailed analytics dashboards."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Quality Assurance",
      description: "Comprehensive testing to ensure bug-free operation."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Ecommerce Solutions</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Transform your business with our comprehensive ecommerce solutions. From Shopify development to digital marketing, we help you build and grow your online presence.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow animate-fade-in animation-delay-200"
            >
              Get Started
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive ecommerce solutions to grow your online business
            </p>
          </div>
          
          {mainServices.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 mb-20 last:mb-0 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full lg:w-1/2">
                <div className="glassmorphism p-1 rounded-2xl h-full">
                  <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="object-cover w-full h-full aspect-video lg:aspect-auto transition-transform duration-10000 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="text-psyco-green-DEFAULT mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="bg-psyco-black-light rounded-xl p-6">
                  <h4 className="text-lg font-medium text-white mb-4">What's Included:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="text-psyco-green-DEFAULT mt-1 mr-2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66675 10.1148L12.7947 3.98608L13.7381 4.92875L6.66675 12.0001L2.42675 7.76008L3.36941 6.81741L6.66675 10.1148Z" fill="currentColor" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Pricing Plans */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Website Development Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your ecommerce website development needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`glassmorphism p-8 relative card-hover animate-fade-in ${plan.popular ? 'border-2 border-psyco-green-DEFAULT' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-psyco-green-DEFAULT text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-psyco-green-DEFAULT">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.duration}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="text-psyco-green-DEFAULT mt-1 mr-3">
                        <CheckCircle size={16} />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/booking"
                  className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white btn-glow' 
                      : 'bg-transparent border border-psyco-green-DEFAULT text-psyco-green-DEFAULT hover:bg-psyco-green-DEFAULT/10'
                  }`}
                >
                  Choose Plan
                  <MoveRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Additional Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized services to enhance your ecommerce business
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="glassmorphism p-6 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-psyco-green-DEFAULT mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="glassmorphism p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Launch Your Ecommerce Success?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Our team of ecommerce experts is ready to help you build, optimize, and grow your online business with cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/booking"
                  className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
                >
                  Get Started
                  <MoveRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/references"
                  className="bg-transparent border border-psyco-green-DEFAULT text-psyco-green-DEFAULT hover:bg-psyco-green-DEFAULT/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  View Our Portfolio
                </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
