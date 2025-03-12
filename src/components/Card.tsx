
import { useState, useEffect, useRef } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  animationDelay?: number;
}

const Card = ({ children, className = '', animationDelay = 0 }: CardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, animationDelay);
          if (cardRef.current) {
            observer.unobserve(cardRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [animationDelay]);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
