
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Calendar, Building2 } from 'lucide-react';
import { projectsData } from './Projects';
import { cn } from '@/lib/utils';

// Array of construction-related images for the gallery
const constructionGalleryImages = [
  "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=800&q=80"
];

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [currentProject, setCurrentProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState<string>('');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Generate gallery images for the project
  const generateGalleryImages = () => {
    return constructionGalleryImages;
  };

  useEffect(() => {
    // Find the project that matches the URL parameter
    const foundProject = projectsData.find(project => 
      project.title.toLowerCase().replace(/\s+/g, '-') === projectId
    );
    
    if (foundProject) {
      const gallery = generateGalleryImages();
      
      // Create a mock gallery for the project
      const projectWithGallery = {
        ...foundProject,
        gallery: gallery,
        fullDescription: `
          <p class="mb-4">The ${foundProject.title} is one of our flagship ${foundProject.category.toLowerCase()} projects completed in ${foundProject.completionDate}.</p>
          
          <p class="mb-4">This project demonstrates our commitment to excellence in construction, utilizing cutting-edge technologies and sustainable materials throughout the building process.</p>
          
          <h3 class="text-xl font-semibold my-4">Key Features:</h3>
          <ul class="list-disc pl-5 mb-4 space-y-2">
            <li>Sustainable design with energy-efficient systems</li>
            <li>Locally sourced materials to reduce carbon footprint</li>
            <li>Advanced structural engineering for maximum safety</li>
            <li>Innovative space utilization for optimal functionality</li>
            <li>State-of-the-art technological integration</li>
          </ul>
          
          <p class="mb-4">Our team of experts worked diligently to ensure this project was completed on time and within budget, while exceeding client expectations in terms of quality and craftsmanship.</p>
          
          <h3 class="text-xl font-semibold my-4">Project Challenges:</h3>
          <p class="mb-4">During construction, we overcame several challenges including difficult terrain conditions, material supply constraints, and complex regulatory requirements. Our problem-solving approach and technical expertise allowed us to navigate these obstacles successfully.</p>
          
          <p>The ${foundProject.title} stands as a testament to our company's dedication to delivering exceptional construction projects across Ethiopia.</p>
        `
      };
      
      setCurrentProject(projectWithGallery);
      setMainImage(gallery[0]);
    }
    
    setLoading(false);
  }, [projectId]);

  const handleThumbnailClick = (image: string, index: number) => {
    setMainImage(image);
    setActiveImageIndex(index);
  };

  if (loading) {
    return (
      <div className="container px-4 py-16 mx-auto">
        <div className="flex justify-center items-center h-64">
          <div className="text-2xl">Loading project details...</div>
        </div>
      </div>
    );
  }

  if (!currentProject) {
    return (
      <div className="container px-4 py-16 mx-auto">
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Project Not Found</h2>
          <p>Sorry, we couldn't find the project you're looking for.</p>
          <Link to="/projects" className="mt-4 inline-block text-primary hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-16 mx-auto">
      <Link to="/projects" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Gallery */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
            <img 
              src={mainImage || currentProject?.image} 
              alt={currentProject?.title} 
              className="w-full h-[400px] object-cover"
            />
          </div>

          {currentProject?.gallery && (
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-8">
              {currentProject.gallery.map((image: string, index: number) => (
                <div 
                  key={index}
                  className={cn(
                    "cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300",
                    activeImageIndex === index ? "border-primary" : "border-transparent hover:border-primary/50"
                  )}
                  onClick={() => handleThumbnailClick(image, index)}
                >
                  <img 
                    src={image} 
                    alt={`${currentProject.title} - view ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Project Details */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="inline-block badge bg-primary/20 text-primary px-2 py-1 rounded-full text-sm font-medium mb-4">
              {currentProject?.category}
            </div>

            <h1 className="text-3xl font-bold mb-4">{currentProject?.title}</h1>

            <div className="space-y-4 mb-6">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Completed: {currentProject?.completionDate}</span>
              </div>
              
              <div className="flex items-center text-muted-foreground">
                <Building2 className="h-5 w-5 mr-2" />
                <span>{currentProject?.category} Project</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mt-6">
              <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
              <p className="text-muted-foreground mb-6">{currentProject?.description}</p>
            </div>

            <div className="bg-navy-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Contact Us About This Project</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Interested in learning more about this project or working with us on something similar?
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring w-full"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Section */}
      <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Project Details</h2>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: currentProject?.fullDescription }}></div>
      </div>

      {/* Related Projects */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Other Projects You Might Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData
            .filter(project => project.id !== currentProject?.id)
            .slice(0, 3)
            .map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="badge bg-primary/20 text-primary px-2 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
                  <Link 
                    to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-primary font-medium hover:text-secondary transition-colors inline-flex items-center mt-3"
                  >
                    View Details
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
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
