import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Trophy } from 'lucide-react';

export function Header() {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Stories', path: '/stories' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className="sticky top-0 z-50 border-b backdrop-blur-lg shadow-sm"
      style={{ 
        borderColor: '#E5E7EB',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: '#0B5ED7' }}
            >
              <Trophy size={20} style={{ color: '#FFFFFF' }} />
            </div>
            <span 
              className="text-2xl font-bold"
              style={{ color: '#1F2937' }}
            >
              GAME<span style={{ color: '#0B5ED7' }}>EX</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm font-medium hover:text-[#0B5ED7] transition-colors"
                style={{ color: location.pathname === item.path ? '#0B5ED7' : '#6B7280' }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full font-medium shadow-md"
            style={{
              backgroundColor: '#0B5ED7',
              color: '#FFFFFF',
            }}
          >
            Register Event
          </motion.button>
        </div>
      </div>
    </header>
  );
}
