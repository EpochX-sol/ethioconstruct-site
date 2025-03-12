
import { Link } from 'react-router-dom';
import Card from './Card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, link, delay = 0 }: ServiceCardProps) => {
  return (
    <Card animationDelay={delay} className="h-full flex flex-col hover:shadow-xl transition-shadow">
      <div className="p-6 flex flex-col h-full">
        <div className="bg-navy-50 w-14 h-14 flex items-center justify-center rounded-lg mb-4 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
        <Link 
          to={link} 
          className="text-primary font-medium hover:underline inline-flex items-center"
        >
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </Card>
  );
};

export default ServiceCard;
