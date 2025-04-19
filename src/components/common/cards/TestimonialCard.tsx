import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TestimonialCardProps } from '../../../types';
import { cn } from '../../../utils/cn';

export const TestimonialCard = ({ data, className }: TestimonialCardProps) => {
  const { name, designation, company, testimonial, image } = data;
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={cn(
        "relative p-8 rounded-2xl backdrop-blur-xl bg-adit-glass border border-white/10",
        "shadow-[0_0_15px_rgba(0,245,255,0.1)]",
        className
      )}
    >
      <Quote className="absolute text-adit-aqua/20 w-12 h-12 -top-2 -left-2" />
      
      <div className="flex items-start gap-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border-2 border-adit-aqua/30"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-adit-blue-dark to-adit-blue-light flex items-center justify-center text-white font-semibold">
            {getInitials(name)}
          </div>
        )}
        
        <div className="flex-1">
          <p className="text-white/90 mb-4 leading-relaxed">
            "{testimonial}"
          </p>
          
          <div>
            <h4 className="font-semibold text-white">{name}</h4>
            {(designation || company) && (
              <p className="text-sm text-white/60">
                {designation}
                {designation && company && ' • '}
                {company}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};