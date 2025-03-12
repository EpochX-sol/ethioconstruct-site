
import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  delay?: number;
}

const AnimatedCounter = ({ end, duration = 2000, suffix = '', delay = 0 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setTimeout(() => {
            animateCount();
            setHasAnimated(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [hasAnimated, delay]);

  const animateCount = () => {
    const start = 0;
    const step = Math.ceil(end / 50);
    let current = start;
    const timer = setInterval(() => {
      current += step;
      if (current > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / 50);
  };

  return (
    <div ref={countRef} className="text-4xl md:text-5xl font-bold text-secondary mb-2">
      {count}
      {suffix}
    </div>
  );
};

export default AnimatedCounter;
