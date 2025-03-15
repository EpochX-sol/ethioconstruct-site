
import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Building, Building2, LandPlot } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

export const projectsData = [
  {
    id: 1,
    title: "Addis Skyline Tower",
    category: "Commercial",
    description: "A 25-story commercial building in the heart of Addis Ababa, featuring modern design and sustainable materials.",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=800&q=80",
    icon: <Building className="h-5 w-5" />,
    completionDate: "2022",
  },
  {
    id: 2,
    title: "Hawassa Industrial Park",
    category: "Industrial",
    description: "A large-scale industrial park development with advanced infrastructure and eco-friendly waste management systems.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    icon: <Building2 className="h-5 w-5" />,
    completionDate: "2021",
  },
  {
    id: 3,
    title: "Mekelle Residential Complex",
    category: "Residential",
    description: "A modern residential complex with 200 units, communal spaces, and integrated green areas.",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80",
    icon: <LandPlot className="h-5 w-5" />,
    completionDate: "2023",
  },
  {
    id: 4,
    title: "Bahir Dar University Campus Extension",
    category: "Educational",
    description: "Extension of the Bahir Dar University campus, including new lecture halls, laboratories, and student facilities.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    icon: <Building className="h-5 w-5" />,
    completionDate: "2021",
  },
  {
    id: 5,
    title: "Dire Dawa Highway Project",
    category: "Infrastructure",
    description: "A 120km highway construction project connecting major economic zones with modern safety features.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    icon: <LandPlot className="h-5 w-5" />,
    completionDate: "2022",
  },
  {
    id: 6,
    title: "Gondar Heritage Hotel",
    category: "Hospitality",
    description: "A luxury hotel that blends traditional Ethiopian architecture with modern amenities and sustainability features.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    icon: <Building2 className="h-5 w-5" />,
    completionDate: "2023",
  }
];

const Projects = () => {
  return (
    <div className="container px-4 py-16 mx-auto">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-display animate-fade-in">Our Projects</h1>
        <p className="text-xl text-muted-foreground max-w-3xl animate-fade-in-slow">
          Explore our portfolio of successful projects across Ethiopia, showcasing our expertise in various construction domains.
        </p>
      </div>
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-4xl font-bold text-primary mb-2">
            <AnimatedCounter end={25} duration={2000} />+
          </div>
          <p className="text-muted-foreground">Years Experience</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-4xl font-bold text-primary mb-2">
            <AnimatedCounter end={200} duration={2000} />+
          </div>
          <p className="text-muted-foreground">Projects Completed</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-4xl font-bold text-primary mb-2">
            <AnimatedCounter end={50} duration={2000} />+
          </div>
          <p className="text-muted-foreground">Expert Team Members</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-4xl font-bold text-primary mb-2">
            <AnimatedCounter end={15} duration={2000} />+
          </div>
          <p className="text-muted-foreground">Industry Awards</p>
        </div>
      </div>
      
      {/* CTA Section with updated text color */}
      <div className="bg-navy-50 p-8 rounded-lg shadow-lg mb-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-secondary">Ready to Start Your Construction Project?</h2>
        <p className="text-navy-700 mb-6 max-w-2xl mx-auto">
          Let's turn your vision into reality. Our team of experts is ready to help you bring your construction project to life.
        </p>
        <a href="/contact" className="btn btn-primary btn-lg">Get in Touch</a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            category={project.category}
            description={project.description}
            image={project.image}
            icon={project.icon}
            completionDate={project.completionDate}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
