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
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: '#0B5ED7' }}
            >
              <Trophy size={20} className="text-white" />
            </div>
            <span className="text-lg font-semibold">GameEx</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    active ? 'text-blue-600' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-lg text-white text-sm font-medium"
            style={{ backgroundColor: '#0B5ED7' }}
          >
            Join Now
          </motion.button>

        </div>
      </div>
    </header>
  );
}


