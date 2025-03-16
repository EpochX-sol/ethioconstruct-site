import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import { BuildingIcon, HardHat, Ruler, Truck, LandPlot, Home } from 'lucide-react';

const Index = () => {
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
      title: 'Residential Construction',
      description: 'Building quality homes with attention to detail and personalized approach to meet your unique requirements.',
      icon: <Home className="h-6 w-6" />,
      link: '/services',
    },
    {
      title: 'Commercial Construction',
      description: 'From office buildings to retail spaces, we construct commercial properties with efficiency and reliability.',
      icon: <BuildingIcon className="h-6 w-6" />,
      link: '/services',
    },
    {
      title: 'Road Construction',
      description: 'Developing infrastructure with cutting-edge technology to ensure durability and safety for all road users.',
      icon: <Truck className="h-6 w-6" />,
      link: '/services',
    },
    {
      title: 'Architectural Design',
      description: 'Innovative architectural solutions that blend aesthetics with functionality for both residential and commercial projects.',
      icon: <Ruler className="h-6 w-6" />,
      link: '/services',
    },
  ];

  const projects = [
    {
      title: 'Addis Skyline Tower',
      category: 'Commercial',
      description: 'A 20-story office building in the heart of Addis Ababa, featuring modern design and sustainable materials.',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop',
      icon: <BuildingIcon className="h-5 w-5" />,
    },
    {
      title: 'Green Valley Residences',
      category: 'Residential',
      description: 'Luxury residential complex with 50 premium apartments surrounded by beautiful landscaped gardens.',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2074&auto=format&fit=crop',
      icon: <Home className="h-5 w-5" />,
    },
    { 
      title: "Dire Dawa Highway Project",
      category: "Infrastructure",
      description: "A 120km highway construction project connecting major economic zones with modern safety features.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
      icon: <LandPlot className="h-5 w-5" />,
 
    }
  ];

  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '200+', label: 'Projects Completed' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '15+', label: 'Industry Awards' },
  ];

  const testimonials = [
    {
      quote: "EthioConstruct delivered our office building on time and within budget. Their attention to detail and quality of work exceeded our expectations.",
      author: "Abebe Bekele",
      position: "CEO, Global Finance Ethiopia",
    },
    {
      quote: "Working with EthioConstruct was a seamless experience. Their team was professional, responsive, and skilled at every level.",
      author: "Tigist Haile",
      position: "Real Estate Developer",
    },
    {
      quote: "The road construction project was completed with exceptional quality. We were impressed by their technical expertise and commitment to safety.",
      author: "Daniel Mekonnen",
      position: "Transport Ministry Official",
    },
  ];

  return (
    <>
      <Hero
        title="Building Ethiopia's Future With Excellence"
        subtitle="With over 25 years of experience, EthioConstruct delivers top-quality construction services across Ethiopia. We build with integrity, innovation, and precision."
        buttonText="Explore Our Projects"
        buttonLink="/projects"
        imageUrl="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
      />

      {/* About Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              ref={(el) => (sectionRefs.current[0] = el)} 
              className="reveal-animation"
            >
              <span className="badge badge-primary mb-2">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Trusted Construction Partner in Ethiopia
              </h2>
              <p className="text-muted-foreground mb-6">
                Founded in 1998, EthioConstruct has grown to become one of Ethiopia's leading construction companies. We specialize in residential, commercial, and infrastructure projects, bringing international standards to the local market.
              </p>
              <p className="text-muted-foreground mb-8">
                Our mission is to contribute to Ethiopia's development through high-quality construction services that stand the test of time. With a team of experienced professionals and a commitment to excellence, we turn visions into reality.
              </p>
              <Link to="/about" className="btn btn-primary p-2">
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform translate-x-4 translate-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" 
                  alt="Construction workers discussing plans" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute inset-0 bg-navy-100 rounded-lg transform -translate-x-4 -translate-y-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-navy-900 py-16 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.number}</div>
                <div className="text-navy-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div 
            ref={(el) => (sectionRefs.current[1] = el)} 
            className="text-center max-w-3xl mx-auto mb-16 reveal-animation"
          >
            <span className="badge badge-primary mb-2">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-muted-foreground">
              We offer a wide range of construction services to meet diverse client needs. Our expert team delivers exceptional results from concept to completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                delay={index * 100}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-outline inline-flex items-center">
              View All Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container">
          <div 
            ref={(el) => (sectionRefs.current[2] = el)} 
            className="text-center max-w-3xl mx-auto mb-16 reveal-animation"
          >
            <span className="badge badge-primary mb-2">Our Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Featured Construction Projects
            </h2>
            <p className="text-muted-foreground">
              Explore our portfolio of successful projects across Ethiopia, showcasing our expertise and commitment to quality in every construction endeavor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.image}
                icon={project.icon}
                delay={index * 100}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn btn-outline inline-flex items-center">
              View All Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-navy-50">
        <div className="container">
          <div 
            ref={(el) => (sectionRefs.current[3] = el)} 
            className="text-center max-w-3xl mx-auto mb-16 reveal-animation"
          >
            <span className="badge badge-primary mb-2">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground">
              Don't just take our word for it. Hear from our satisfied clients about their experience working with EthioConstruct.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg relative"
              >
                <div className="absolute -top-5 left-8 text-navy-500 text-6xl">"</div>
                <p className="text-navy-800 mb-6 relative z-10">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-navy-200 rounded-full flex items-center justify-center text-navy-600 font-semibold">
                    {testimonial.author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Construction Project?
            </p>
            <p className="text-navy-100 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a consultation and quote. Our team is ready to bring your vision to life with expertise and precision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Get a Free Quote
              </Link>
              <Link to="/projects" className="btn btn-outline border-white text-white hover:bg-white/10 btn-lg">
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
