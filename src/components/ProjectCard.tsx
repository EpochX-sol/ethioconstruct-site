
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
  completionDate?: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  category,
  description,
  image,
  icon,
  completionDate,
  delay = 0,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const projectUrl = `/projects/${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <Card animationDelay={delay} className="group h-full flex flex-col transition-all duration-300 hover:shadow-xl overflow-hidden">
      <div
        className="relative h-64 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/40 to-transparent opacity-90"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 ease-out">
          <div className="flex items-center space-x-2 mb-2">
            {icon && <div className="text-white bg-primary/70 p-2 rounded-full">{icon}</div>}
            <span className="badge bg-secondary/80 text-white px-3 py-1 rounded-full text-sm font-medium">{category}</span>
          </div>
          <h3 className="text-xl font-semibold text-white group-hover:text-secondary transition-colors">{title}</h3>
          {completionDate && (
            <div className="text-white/80 text-sm mt-1 flex items-center">
              <span className="bg-white/20 px-2 py-1 rounded">Completed: {completionDate}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow bg-white rounded-b-lg">
        <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
        <Link
          to={projectUrl}
          className="text-primary font-medium hover:text-secondary transition-colors inline-flex items-center self-start py-2 px-4 bg-navy-50 rounded-full hover:bg-navy-100 group"
        >
          View Project
          <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </Card>
  );
};

export default ProjectCard;
