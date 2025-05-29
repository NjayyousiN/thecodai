"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

interface StatCardProps {
  value: string;
  label: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      className="bg-foreground p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      <div className="text-caption text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-title mb-3">{title}</h3>
      <p className="text-subtitle leading-relaxed">{description}</p>
    </motion.div>
  );
};

export const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <motion.div
    className="text-center"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <div className="text-5xl font-bold text-foreground mb-2">{value}</div>
    <div className="text-xl text-foreground opacity-80">{label}</div>
  </motion.div>
);
