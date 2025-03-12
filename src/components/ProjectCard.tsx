
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  category,
  description,
  imageUrl,
  link,
  delay = 0,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card animationDelay={delay} className="group h-full flex flex-col">
      <div
        className="relative h-64 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <span className="badge badge-primary mb-2">{category}</span>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        <Link
          to={link}
          className="text-primary font-medium hover:underline inline-flex items-center self-start"
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
