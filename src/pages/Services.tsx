import { useState, useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Building2, 
  Truck, 
  Wrench, 
  PaintBucket, 
  Ruler, 
  Lightbulb, 
  Shield, 
  LayoutPanelLeft,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((section, index) => {
      if (!section) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            section.classList.add('reveal');
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach((observer) => {
        if (observer) {
          observer.disconnect();
        }
      });
    };
  }, []);

  const services = [
    {
      id: "residential",
      title: "Residential Construction",
      description: "We build custom homes and residential complexes with attention to detail and quality craftsmanship.",
      icon: <Home className="h-6 w-6" />,
      features: [
        "Custom home design and construction",
        "Multi-family residential buildings",
        "Luxury villa development",
        "Affordable housing solutions",
        "Energy-efficient home construction"
      ],
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "commercial",
      title: "Commercial Construction",
      description: "From office buildings to retail spaces, we deliver commercial properties that meet modern business needs.",
      icon: <Building2 className="h-6 w-6" />,
      features: [
        "Office building construction",
        "Retail and shopping centers",
        "Hotels and hospitality buildings",
        "Medical facilities",
        "Educational institutions"
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "infrastructure",
      title: "Infrastructure & Roads",
      description: "We build essential infrastructure with durability and public safety at the forefront.",
      icon: <Truck className="h-6 w-6" />,
      features: [
        "Highway and road construction",
        "Bridge development",
        "Water supply systems",
        "Drainage and sewage systems",
        "Public facilities"
      ],
      image: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "renovation",
      title: "Renovation & Remodeling",
      description: "Transform existing structures with our expert renovation and remodeling services.",
      icon: <Wrench className="h-6 w-6" />,
      features: [
        "Complete building renovations",
        "Interior remodeling",
        "Historical building restoration",
        "Commercial space upgrades",
        "Facade improvements"
      ],
      image: "https://images.unsplash.com/photo-1581726707445-75cbe4efc586?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "finishing",
      title: "Interior Finishing",
      description: "We provide high-quality interior finishing work that brings spaces to life with elegance and functionality.",
      icon: <PaintBucket className="h-6 w-6" />,
      features: [
        "Custom cabinetry and millwork",
        "Flooring installation",
        "Wall finishing and painting",
        "Ceiling treatments",
        "Decorative elements"
      ],
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "design",
      title: "Architectural Design",
      description: "Our architectural team creates innovative designs that blend aesthetics with practical functionality.",
      icon: <Ruler className="h-6 w-6" />,
      features: [
        "Custom architectural design",
        "3D visualization",
        "Space planning and optimization",
        "Green building design",
        "Cultural and contextual architecture"
      ],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
    },
    {
      id: "consultancy",
      title: "Construction Consultancy",
      description: "Benefit from our expertise in construction planning, management, and optimization.",
      icon: <Lightbulb className="h-6 w-6" />,
      features: [
        "Project feasibility studies",
        "Construction planning",
        "Cost estimation and budgeting",
        "Quality assurance consulting",
        "Project management services"
      ],
      image: "https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "maintenance",
      title: "Building Maintenance",
      description: "Keep your property in optimal condition with our comprehensive maintenance services.",
      icon: <Shield className="h-6 w-6" />,
      features: [
        "Preventive maintenance programs",
        "Emergency repair services",
        "Building systems maintenance",
        "Exterior maintenance",
        "Facility management"
      ],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We begin with a detailed discussion of your project requirements, goals, and vision."
    },
    {
      step: "02",
      title: "Project Planning",
      description: "Our team develops comprehensive plans, including designs, timelines, and budgeting."
    },
    {
      step: "03",
      title: "Material Selection",
      description: "We help you select quality materials that align with your project goals and budget."
    },
    {
      step: "04",
      title: "Construction Phase",
      description: "Our skilled team executes the construction with precision and attention to detail."
    },
    {
      step: "05",
      title: "Quality Assurance",
      description: "Rigorous inspections ensure all work meets our high standards and your expectations."
    },
    {
      step: "06",
      title: "Project Completion",
      description: "Final walkthrough, handover, and ongoing support after project completion."
    }
  ];

  return (
    <>
      <Hero
        title="Our Construction Services"
        subtitle="Discover our comprehensive range of construction solutions delivered with expertise and excellence."
        imageUrl="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
        overlayOpacity="bg-navy-900/70"
      />

      {/* Services Overview */}
      <section className="py-20">
        <div className="container">
          <div
            ref={(el) => (sectionRefs.current[0] = el)}
            className="text-center max-w-3xl mx-auto mb-16 reveal-animation"
          >
            <span className="badge badge-primary mb-2">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-muted-foreground">
              EthioConstruct provides a wide range of construction services tailored to meet diverse client needs. From residential to commercial projects, our team delivers exceptional quality and service at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.slice(0, 8).map((service, index) => (
              <div 
                key={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="bg-navy-50 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <a href={`#${service.id}`} className="text-primary font-medium inline-flex items-center hover:underline">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-navy-50">
        <div className="container">
          <div
            ref={(el) => (sectionRefs.current[1] = el)}
            className="text-center max-w-3xl mx-auto mb-16 reveal-animation"
          >
            <span className="badge badge-primary mb-2">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How We Work
            </h2>
            <p className="text-muted-foreground">
              Our proven construction process ensures quality, efficiency, and client satisfaction from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md relative overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-navy-50 rounded-full flex items-center justify-center opacity-20">
                  <span className="text-4xl font-bold text-navy-800">{item.step}</span>
                </div>
                <div className="relative z-10">
                  <span className="text-2xl font-bold text-navy-300 mb-4 block">{item.step}</span>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div className={`${index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                <div className="bg-navy-50 w-14 h-14 rounded-lg flex items-center justify-center text-primary mb-4">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                <p className="text-muted-foreground mb-8">{service.description}</p>
                
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className="btn btn-primary inline-flex items-center p-2">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-navy-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Construction Project?
            </p>
            <p className="text-navy-100 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and get a personalized quote from our expert team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Get a Free Quote
              </Link>
              <Link to="/projects" className="btn btn-outline border-white text-white hover:bg-white/10 btn-lg">
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
