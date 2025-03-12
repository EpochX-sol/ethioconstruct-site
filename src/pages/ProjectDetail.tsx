
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Calendar, Building2, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectImage {
  src: string;
  alt: string;
}

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [currentProject, setCurrentProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState<string>('');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Mock function to fetch project data (in a real app this would be an API call)
  useEffect(() => {
    // Importing the project data from the Projects page
    import('./Projects').then((module) => {
      const allProjects = module.default.type.render().props.children[2].props.children;
      
      // Find the project that matches the URL parameter
      const foundProject = allProjects.find((project: any) => 
        project.props.title.toLowerCase().replace(/\s+/g, '-') === projectId
      );
      
      if (foundProject) {
        const project = foundProject.props;
        // Get the full project data including gallery from projectsData
        const fullProject = module.projectsData.find((p: any) => 
          p.title.toLowerCase().replace(/\s+/g, '-') === projectId
        );
        
        if (fullProject) {
          setCurrentProject({...project, ...fullProject});
          setMainImage(fullProject.gallery[0]);
        }
      }
      
      setLoading(false);
    }).catch(error => {
      console.error("Failed to load project data:", error);
      setLoading(false);
    });
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
              src={mainImage || currentProject.image} 
              alt={currentProject.title} 
              className="w-full h-[400px] object-cover"
            />
          </div>

          {currentProject.gallery && (
            <div className="grid grid-cols-3 gap-4 mb-8">
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
              {currentProject.category}
            </div>

            <h1 className="text-3xl font-bold mb-4">{currentProject.title}</h1>

            <div className="space-y-4 mb-6">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Completed: {currentProject.completionDate}</span>
              </div>
              
              <div className="flex items-center text-muted-foreground">
                <Building2 className="h-5 w-5 mr-2" />
                <span>{currentProject.category} Project</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mt-6">
              <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
              <p className="text-muted-foreground mb-6">{currentProject.description}</p>
            </div>

            <div className="bg-navy-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Contact Us About This Project</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Interested in learning more about this project or working with us on something similar?
              </p>
              <Link 
                to="/contact" 
                className="btn btn-primary w-full"
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
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: currentProject.fullDescription }}></div>
      </div>

      {/* Related Projects */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Other Projects You Might Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* We'll show a few other projects here */}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
