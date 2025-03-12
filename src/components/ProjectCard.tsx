
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

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
    <Card animationDelay={delay} className="group h-full flex flex-col transition-all duration-300 hover:shadow-xl">
      <div
        className="relative h-64 overflow-hidden rounded-t-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent opacity-90"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <div className="flex items-center space-x-2 mb-2">
            {icon && <div className="text-white">{icon}</div>}
            <span className="badge bg-primary/20 text-primary px-2 py-1 rounded-full text-sm font-medium">{category}</span>
          </div>
          <h3 className="text-xl font-semibold text-white group-hover:text-secondary transition-colors">{title}</h3>
          {completionDate && <p className="text-white/80 text-sm mt-1">Completed: {completionDate}</p>}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow bg-white rounded-b-lg">
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        <Link
          to={projectUrl}
          className="text-primary font-medium hover:text-secondary transition-colors inline-flex items-center self-start"
        >
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
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
    </Card>
  );
};

export default ProjectCard;
