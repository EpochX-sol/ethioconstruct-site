import { useState, useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Calendar, Users, Target, ArrowRight } from 'lucide-react';

const About = () => {
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

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every project, delivering quality that exceeds expectations.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical standards in all our business dealings.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and methods to improve our construction processes and outcomes.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Reliability",
      description: "We deliver on our promises, completing projects on time and within budget.",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      title: "Teamwork",
      description: "We believe in collaborative effort, working together with clients and partners for mutual success.",
      icon: <Users className="h-6 w-6" />,
    },
  ];

  const teamMembers = [
    {
      name: "Alemayehu Tadesse",
      position: "Chief Executive Officer",
      bio: "With over 30 years in construction, Alemayehu founded EthioConstruct with a vision to transform Ethiopia's construction industry. He holds a Master's in Civil Engineering from Addis Ababa University.",
      imageUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Frehiwot Bekele",
      position: "Chief Operations Officer",
      bio: "Frehiwot has 20 years of experience managing large-scale construction projects. She ensures operational excellence and timely project delivery across all EthioConstruct endeavors.",
      imageUrl: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=2086&auto=format&fit=crop",
    },
    {
      name: "Yonas Kebede",
      position: "Chief Technical Officer",
      bio: "A structural engineering expert with experience in international projects, Yonas oversees the technical aspects of all construction projects, ensuring highest quality standards.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Hiwot Mekonnen",
      position: "Architecture Director",
      bio: "Award-winning architect with a passion for blending modern designs with Ethiopian cultural elements, Hiwot leads our architectural planning and design department.",
      imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2087&auto=format&fit=crop",
    },
  ];

  const timeline = [
    {
      year: "1998",
      title: "Company Founded",
      description: "EthioConstruct was established in Addis Ababa with a team of 10 construction professionals."
    },
    {
      year: "2003",
      title: "First Major Project",
      description: "Completed our first large-scale commercial building in the center of Addis Ababa."
    },
    {
      year: "2008",
      title: "Expansion to Regional Cities",
      description: "Opened offices in Hawassa and Bahir Dar, expanding operations throughout Ethiopia."
    },
    {
      year: "2013",
      title: "International Recognition",
      description: "Received African Construction Excellence Award for the Oromia Cultural Center project."
    },
    {
      year: "2018",
      title: "Adoption of Green Building Practices",
      description: "Pioneered sustainable construction methods in Ethiopia, completing our first LEED-certified building."
    },
    {
      year: "2023",
      title: "25th Anniversary",
      description: "Celebrating 25 years of excellence in construction with over 200 successful projects completed."
    },
  ];

  return (
    <>
      <Hero
        title="About EthioConstruct"
        subtitle="Learn about our journey, mission, and the dedicated team behind Ethiopia's premier construction company."
        imageUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
        overlayOpacity="bg-black/60"
      />

      {/* Mission and Vision */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              ref={(el) => (sectionRefs.current[0] = el)}
              className="reveal-animation"
            >
              <span className="badge badge-primary mb-2">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building Excellence Since 1998
              </h2>
              <p className="text-muted-foreground mb-6">
                For over two decades, EthioConstruct has been at the forefront of Ethiopia's construction industry, delivering exceptional quality and innovative solutions for a wide range of projects.
              </p>
              <p className="text-muted-foreground mb-6">
                What began as a small team of dedicated professionals has grown into one of the country's most respected construction companies, with a portfolio spanning residential, commercial, and infrastructure projects throughout Ethiopia.
              </p>
              <p className="text-muted-foreground">
                Our commitment to excellence, integrity, and customer satisfaction has earned us a reputation for reliability and quality that continues to drive our success today.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-navy-50 p-8 rounded-lg border border-navy-100">
                <h3 className="text-xl font-semibold mb-4 text-navy-800">Our Mission</h3>
                <p className="text-navy-700">
                  To deliver exceptional construction services that contribute to Ethiopia's development while maintaining the highest standards of quality, safety, and customer satisfaction.
                </p>
              </div>
              
              <div className="bg-navy-800 p-8 rounded-lg text-white">
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-navy-100">
                  To be the most trusted and innovative construction company in East Africa, known for excellence in building infrastructure that improves lives and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div
            ref={(el) => (sectionRefs.current[1] = el)}
            className="text-center max-w-3xl mx-auto mb-16 reveal-animation"
          >
            <span className="badge badge-primary mb-2">Core Values</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Principles That Guide Our Work
            </h2>
            <p className="text-muted-foreground">
              At EthioConstruct, our core values define how we approach every project and relationship. These principles are the foundation of our success and reputation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="bg-navy-50 w-14 h-14 flex items-center justify-center rounded-lg mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container">
          <div
            ref={(el) => (sectionRefs.current[2] = el)}
            className="text-center max-w-3xl mx-auto mb-16 reveal-animation"
          >
            <span className="badge badge-primary mb-2">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The EthioConstruct Timeline
            </h2>
            <p className="text-muted-foreground">
              From our humble beginnings to becoming a leading construction company in Ethiopia, our journey has been defined by growth, innovation, and excellence.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-navy-200 transform md:translate-x-px"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 translate-y-px z-10 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 px-4 pb-12 md:pb-0 md:px-16">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-xs font-semibold text-primary mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-navy-50">
        <div className="container">
          <div
            ref={(el) => (sectionRefs.current[3] = el)}
            className="text-center max-w-3xl mx-auto mb-16 reveal-animation"
          >
            <span className="badge badge-primary mb-2">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-muted-foreground">
              Our experienced leadership team brings decades of combined expertise in construction, engineering, and project management to every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <div className="text-sm text-secondary font-medium mb-4">{member.position}</div>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p  className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work With Us?
            </p>
            <p className="text-navy-100 text-lg mb-8 max-w-2xl mx-auto">
              Join the hundreds of satisfied clients who have trusted EthioConstruct with their construction projects.
            </p>
            <Link to="/contact" className="btn btn-secondary btn-lg inline-flex items-center group">
              Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
