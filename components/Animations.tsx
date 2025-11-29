import React, { useState, useEffect, useRef, ReactNode } from 'react';

// Helper component for the counting animation
interface CountUpProps {
  end: number;
  duration?: number;
}

export const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Start counting up
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out quart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeProgress * end));
            
            if (progress < 1) {
              animationRef.current = window.requestAnimationFrame(step);
            }
          };
          
          if (animationRef.current) cancelAnimationFrame(animationRef.current);
          animationRef.current = window.requestAnimationFrame(step);
        } else {
          // Reset when out of view for repeatable animation
          if (animationRef.current) cancelAnimationFrame(animationRef.current);
          setCount(0);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [end, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
};

// Helper component for scroll reveal animation
interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [offsetClass, setOffsetClass] = useState('translate-y-12');
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          // Determine the direction the element exited or is currently positioned relative to viewport
          // If boundingClientRect.top > 0, it is below the viewport (needs to slide up on entry)
          // If boundingClientRect.top < 0, it is above the viewport (needs to slide down on entry)
          if (entry.boundingClientRect.top > 0) {
            setOffsetClass('translate-y-12');
          } else {
            setOffsetClass('-translate-y-12');
          }
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out transform-gpu ${
        isVisible ? 'opacity-100 translate-y-0' : `opacity-0 ${offsetClass}`
      } ${className}`}
      style={{ 
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        willChange: 'transform, opacity', 
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
    >
      {children}
    </div>
  );
};