import { Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer 
      className="py-12 border-t"
      style={{ backgroundColor: '#F9FAFB', borderColor: '#E5E7EB' }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-8 h-8 rounded flex items-center justify-center"
                style={{ backgroundColor: '#0B5ED7' }}
              >
                <Trophy size={16} style={{ color: '#FFFFFF' }} />
              </div>
              <span 
                className="text-xl font-bold"
                style={{ color: '#1F2937' }}
              >
                GAME<span style={{ color: '#0B5ED7' }}>EX</span>
              </span>
            </div>
            <p style={{ color: '#6B7280' }} className="text-sm">
              Empowering sports communities through innovative event management.
            </p>
          </div>
          
          <div>
            <h3 
              className="text-sm font-semibold mb-4"
              style={{ color: '#1F2937' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'Events', 'Results', 'Register'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm hover:text-[#0B5ED7] transition-colors"
                    style={{ color: '#6B7280' }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 
              className="text-sm font-semibold mb-4"
              style={{ color: '#1F2937' }}
            >
              Sports
            </h3>
            <ul className="space-y-2">
              {['Cricket', 'Football', 'Basketball', 'Esports'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm hover:text-[#0B5ED7] transition-colors"
                    style={{ color: '#6B7280' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 
              className="text-sm font-semibold mb-4"
              style={{ color: '#1F2937' }}
            >
              Contact
            </h3>
            <ul className="space-y-2">
              {['support@gameex.com', '+91 98765 43210', 'Mumbai, India'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm hover:text-[#0B5ED7] transition-colors"
                    style={{ color: '#6B7280' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div 
          className="pt-8 border-t text-center"
          style={{ borderColor: '#E5E7EB' }}
        >
          <p style={{ color: '#6B7280' }} className="text-sm">
            © 2026 GameEx. All rights reserved. Built for champions.
          </p>
        </div>
      </div>
    </footer>
  );
}
