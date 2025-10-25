import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  Rocket, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Zap, 
  Target, 
  BarChart3, 
  Globe, 
  Mail, 
  Shield, 
  Server, 
  Code, 
  MessageSquare, 
  Video, 
  PenTool,
  Cloud,
  MoveRight,
  CheckCircle,
  Tag,
  Sparkles,
  Filter
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SaasDeals = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: "all", name: "All Deals", icon: <Sparkles size={16} /> },
    { id: "marketing", name: "Marketing", icon: <Target size={16} /> },
    { id: "development", name: "Development", icon: <Code size={16} /> },
    { id: "productivity", name: "Productivity", icon: <Zap size={16} /> },
    { id: "analytics", name: "Analytics", icon: <BarChart3 size={16} /> },
    { id: "communication", name: "Communication", icon: <MessageSquare size={16} /> }
  ];

  const featuredDeals = [
    {
      id: 1,
      name: "SendGrid",
      category: "marketing",
      discount: "Up to 50% OFF",
      description: "Email marketing platform with powerful APIs and deliverability features for startups.",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800",
      icon: <Mail size={32} />,
      savings: "$1,200/year",
      popular: true,
      features: [
        "100,000 free emails/month",
        "Advanced analytics",
        "Email API integration",
        "24/7 support"
      ]
    },
    {
      id: 2,
      name: "Vercel",
      category: "development",
      discount: "Pro Plan 3 Months Free",
      description: "Deploy and scale your web applications with zero configuration on the edge network.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
      icon: <Cloud size={32} />,
      savings: "$600 credit",
      popular: true,
      features: [
        "Edge network deployment",
        "Automatic CI/CD",
        "Preview deployments",
        "Team collaboration"
      ]
    },
    {
      id: 3,
      name: "Notion",
      category: "productivity",
      discount: "$1,000 in Credits",
      description: "All-in-one workspace for notes, docs, wikis, and project management.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
      icon: <PenTool size={32} />,
      savings: "$1,000 credit",
      popular: false,
      features: [
        "Unlimited pages & blocks",
        "Real-time collaboration",
        "Templates library",
        "Version history"
      ]
    },
    {
      id: 4,
      name: "Mixpanel",
      category: "analytics",
      discount: "$50,000 in Credits",
      description: "Product analytics platform to understand user behavior and drive growth.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      icon: <BarChart3 size={32} />,
      savings: "$50,000 credit",
      popular: true,
      features: [
        "User behavior tracking",
        "Funnel analysis",
        "Retention reports",
        "A/B testing"
      ]
    },
    {
      id: 5,
      name: "Slack",
      category: "communication",
      discount: "25% OFF First Year",
      description: "Team communication platform with channels, integrations, and workflows.",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&q=80&w=800",
      icon: <MessageSquare size={32} />,
      savings: "$750/year",
      popular: false,
      features: [
        "Unlimited message history",
        "App integrations",
        "Voice & video calls",
        "Workflow automation"
      ]
    },
    {
      id: 6,
      name: "AWS",
      category: "development",
      discount: "$5,000 in Credits",
      description: "Cloud infrastructure platform with extensive computing, storage, and database services.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      icon: <Server size={32} />,
      savings: "$5,000 credit",
      popular: false,
      features: [
        "Global infrastructure",
        "200+ services",
        "Enterprise security",
        "Scalability on demand"
      ]
    },
    {
      id: 7,
      name: "Stripe",
      category: "development",
      discount: "Fee Waiver up to $20,000",
      description: "Payment processing platform with APIs for online and in-person transactions.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
      icon: <DollarSign size={32} />,
      savings: "$20,000 waiver",
      popular: true,
      features: [
        "Global payment methods",
        "Subscription billing",
        "Fraud prevention",
        "Developer-friendly APIs"
      ]
    },
    {
      id: 8,
      name: "HubSpot",
      category: "marketing",
      discount: "90% OFF for 1 Year",
      description: "CRM platform with marketing, sales, and customer service tools for growing businesses.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      icon: <Users size={32} />,
      savings: "$5,400/year",
      popular: false,
      features: [
        "Contact management",
        "Email marketing",
        "Landing pages",
        "Marketing automation"
      ]
    },
    {
      id: 9,
      name: "Loom",
      category: "communication",
      discount: "6 Months Free",
      description: "Video messaging tool for async communication and screen recording.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
      icon: <Video size={32} />,
      savings: "$480 credit",
      popular: false,
      features: [
        "Screen recording",
        "Team library",
        "Video editing",
        "Viewer insights"
      ]
    }
  ];

  const filteredDeals = selectedCategory === "all" 
    ? featuredDeals 
    : featuredDeals.filter(deal => deal.category === selectedCategory);

  const benefits = [
    {
      icon: <DollarSign size={40} />,
      title: "Save $100k+ Per Year",
      description: "Access exclusive deals and discounts worth over $100,000 for early-stage startups."
    },
    {
      icon: <Zap size={40} />,
      title: "Instant Activation",
      description: "Get immediate access to all deals with a single application. No lengthy approval processes."
    },
    {
      icon: <Shield size={40} />,
      title: "Trusted by 10,000+ Founders",
      description: "Join thousands of successful entrepreneurs who have scaled their businesses with these tools."
    },
    {
      icon: <Globe size={40} />,
      title: "Global Access",
      description: "All deals are available worldwide, helping founders in any country build their dream business."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-0 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/5 rounded-full blur-3xl bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-psyco-green-muted border border-psyco-green-DEFAULT/20 px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Sparkles className="text-psyco-green-DEFAULT" size={16} />
              <span className="text-psyco-green-DEFAULT text-sm font-medium">Exclusive SaaS Deals for Founders</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in animation-delay-100">
              Save Over <span className="text-psyco-green-DEFAULT">$100,000</span> on Essential Tools
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-200">
              Get exclusive access to the best SaaS deals and discounts for entrepreneurs and founders. 
              Build your startup with enterprise-grade tools at a fraction of the cost.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-300">
              <Link
                to="/booking"
                className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Get Started Now
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#deals"
                className="bg-transparent border border-psyco-green-DEFAULT text-psyco-green-DEFAULT hover:bg-psyco-green-DEFAULT/10 font-medium py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                Explore Deals
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Founders Love Our Deals</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We've partnered with the best SaaS companies to bring you exclusive discounts and credits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="glassmorphism p-6 text-center card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-psyco-green-DEFAULT mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "$100k+", label: "Total Savings" },
              { value: "50+", label: "SaaS Partners" },
              { value: "10,000+", label: "Active Founders" },
              { value: "95%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-psyco-green-DEFAULT mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section id="deals" className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured SaaS Deals</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              Handpicked deals from top SaaS companies to help you build and scale your business
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <Filter className="text-psyco-green-DEFAULT h-4 w-4" />
              <span>Filter by category</span>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-psyco-green-DEFAULT text-white"
                    : "bg-psyco-black-light text-gray-300 hover:bg-psyco-black-card"
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Deal Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDeals.map((deal, index) => (
              <div 
                key={deal.id}
                className="glassmorphism overflow-hidden card-hover animate-fade-in relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {deal.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-psyco-green-DEFAULT text-white border-none">
                      Popular
                    </Badge>
                  </div>
                )}
                
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={deal.image} 
                    alt={deal.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-psyco-green-DEFAULT">
                    {deal.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{deal.name}</h3>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="text-psyco-green-DEFAULT" size={16} />
                    <span className="text-psyco-green-DEFAULT font-semibold">{deal.discount}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{deal.description}</p>
                  
                  <div className="bg-psyco-black-light rounded-lg p-3 mb-4">
                    <div className="text-xs text-gray-400 mb-2">What's Included:</div>
                    <ul className="space-y-1">
                      {deal.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="text-psyco-green-DEFAULT mr-2 flex-shrink-0 mt-0.5" size={14} />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div>
                      <div className="text-xs text-gray-400">Potential Savings</div>
                      <div className="text-lg font-bold text-psyco-green-DEFAULT">{deal.savings}</div>
                    </div>
                    <Button 
                      asChild
                      className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white"
                    >
                      <Link to="/booking">
                        Claim Deal
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredDeals.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No deals found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Getting access to exclusive SaaS deals is simple and fast
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <Rocket size={32} />,
                title: "Apply for Access",
                description: "Fill out a quick application form with your startup details and tell us about your needs."
              },
              {
                step: "02",
                icon: <CheckCircle size={32} />,
                title: "Get Approved",
                description: "Most applications are approved within 24 hours. We support startups at every stage."
              },
              {
                step: "03",
                icon: <TrendingUp size={32} />,
                title: "Start Saving",
                description: "Access all deals instantly and start building your startup with the best tools available."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="glassmorphism p-8 h-full">
                  <div className="text-psyco-green-DEFAULT/20 font-bold text-5xl mb-4">
                    {item.step}
                  </div>
                  <div className="text-psyco-green-DEFAULT mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <MoveRight className="text-psyco-green-DEFAULT/30" size={32} />
                  </div>
                )}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Save $100k+ on SaaS Tools?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Join thousands of successful founders who are building their dream startups with enterprise-grade tools at startup-friendly prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Apply for Deals
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="bg-transparent border border-psyco-green-DEFAULT text-psyco-green-DEFAULT hover:bg-psyco-green-DEFAULT/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaasDeals;
