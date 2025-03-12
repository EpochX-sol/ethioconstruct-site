
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  imageUrl: string;
  overlayOpacity?: string;
}

const Hero = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  imageUrl,
  overlayOpacity = 'bg-black/50',
}: HeroProps) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    if (buttonLink) {
      navigate(buttonLink);
    }
  };

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat image-parallax"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: 'scale(1.1)',
        }}
      ></div>
      
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity}`}></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className={`max-w-3xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              {subtitle}
            </p>
            {buttonText && (
              <button
                onClick={handleButtonClick}
                className="btn btn-secondary btn-lg flex items-center group"
              >
                {buttonText}
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center p-1">
          <div className="w-1.5 h-3 bg-white/80 rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
        <span className="text-white/80 text-xs mt-2">Scroll Down</span>
      </div>
    </div>
  );
};

export default Hero;
