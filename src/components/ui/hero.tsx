"use client";

import { useState, useEffect, useRef, JSX } from "react";
import { motion, useInView } from "framer-motion";
import { HeroButton } from "../buttons";

const createSeededRandom = (seed: number) => {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
};

const generateStars = (): JSX.Element[] => {
  const seededRandom = createSeededRandom(42);
  return [...Array(30)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-foreground rounded-full opacity-70"
      style={{
        left: `${seededRandom() * 100}%`,
        top: `${seededRandom() * 100}%`,
      }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: 2 + seededRandom() * 3,
        repeat: Infinity,
        delay: seededRandom() * 2,
      }}
    />
  ));
};

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const heroRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  useEffect(() => {
    if (isHeroInView) {
      setIsVisible(true);
    }
  }, [isHeroInView]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen bg-gradient-to-br from-title via-subtitle to-caption flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-title bg-opacity-10"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">{generateStars()}</div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Revolutionize Your
          <span className="block bg-gradient-to-r from-foreground to-caption bg-clip-text text-transparent">
            Code Intelligence
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-foreground mb-8 opacity-90 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Transform
          your development workflow with AI-powered solutions.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <HeroButton scrollTo="contact-us" primary>
            Get Started
          </HeroButton>
          <HeroButton scrollTo="about-us">Learn More</HeroButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
