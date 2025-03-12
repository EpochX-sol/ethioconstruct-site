import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Building, Building2, LandPlot } from 'lucide-react';

export const projectsData = [
  {
    id: 1,
    title: "Addis Skyline Tower",
    category: "Commercial",
    description: "A 25-story commercial building in the heart of Addis Ababa, featuring modern design and sustainable materials.",
    image: "/placeholder.svg",
    icon: <Building className="h-5 w-5" />,
    completionDate: "2022",
  },
  {
    id: 2,
    title: "Hawassa Industrial Park",
    category: "Industrial",
    description: "A large-scale industrial park development with advanced infrastructure and eco-friendly waste management systems.",
    image: "/placeholder.svg",
    icon: <Building2 className="h-5 w-5" />,
    completionDate: "2021",
  },
  {
    id: 3,
    title: "Mekelle Residential Complex",
    category: "Residential",
    description: "A modern residential complex with 200 units, communal spaces, and integrated green areas.",
    image: "/placeholder.svg",
    icon: <LandPlot className="h-5 w-5" />,
    completionDate: "2023",
  },
  {
    id: 4,
    title: "Bahir Dar University Campus Extension",
    category: "Educational",
    description: "Extension of the Bahir Dar University campus, including new lecture halls, laboratories, and student facilities.",
    image: "/placeholder.svg",
    icon: <Building className="h-5 w-5" />,
    completionDate: "2021",
  },
  {
    id: 5,
    title: "Dire Dawa Highway Project",
    category: "Infrastructure",
    description: "A 120km highway construction project connecting major economic zones with modern safety features.",
    image: "/placeholder.svg",
    icon: <LandPlot className="h-5 w-5" />,
    completionDate: "2022",
  },
  {
    id: 6,
    title: "Gondar Heritage Hotel",
    category: "Hospitality",
    description: "A luxury hotel that blends traditional Ethiopian architecture with modern amenities and sustainability features.",
    image: "/placeholder.svg",
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
