import { Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface StoryCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
}

export function StoryCard({ 
  title, 
  excerpt, 
  category, 
  readTime, 
  date, 
  image, 
  featured = false 
}: StoryCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-2xl border shadow-lg ${
        featured ? 'col-span-full lg:col-span-2' : ''
      }`}
      style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 229, 255, 0.08) 0%, transparent 70%)',
        }}
      />
      
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(255, 255, 255, 0.95) 0%, transparent 60%)',
          }}
        />
        
        <div 
          className="absolute top-4 left-4 px-4 py-1.5 rounded-full backdrop-blur-md"
          style={{
            backgroundColor: 'rgba(11, 94, 215, 0.15)',
            border: '1px solid #0B5ED7',
            color: '#0B5ED7',
          }}
        >
          <span className="text-sm font-medium">{category}</span>
        </div>
      </div>
      
      <div className="p-6 relative">
        <div className="flex items-center gap-4 mb-4">
          <time style={{ color: '#6B7280' }} className="text-sm">
            {date}
          </time>
          <div className="flex items-center gap-1.5">
            <Clock size={14} style={{ color: '#6B7280' }} />
            <span style={{ color: '#6B7280' }} className="text-sm">
              {readTime}
            </span>
          </div>
        </div>
        
        <h3 
          className="text-2xl mb-3 group-hover:text-[#0B5ED7] transition-colors duration-300"
          style={{ color: '#1F2937' }}
        >
          {title}
        </h3>
        
        <p 
          className="mb-6 leading-relaxed"
          style={{ color: '#4B5563' }}
        >
          {excerpt}
        </p>
        
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <span 
            className="font-medium"
            style={{ color: '#1FB6FF' }}
          >
            Read Story
          </span>
          <ArrowRight 
            size={18} 
            style={{ color: '#1FB6FF' }}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </motion.div>
      </div>
      
      <div 
        className="absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{
          background: 'linear-gradient(90deg, transparent, #1FB6FF, transparent)',
          boxShadow: '0 0 15px rgba(31, 182, 255, 0.4)',
        }}
      />
    </motion.article>
  );
}
