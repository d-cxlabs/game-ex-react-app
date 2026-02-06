import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Trophy, Calendar, Users, Zap, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function HomePage() {
  const features = [
    {
      icon: Trophy,
      title: 'Championship Events',
      description: 'Host and participate in professional tournaments across multiple sports disciplines.',
    },
    {
      icon: Calendar,
      title: 'Easy Registration',
      description: 'Streamlined registration process for athletes, teams, and event organizers.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Connect with athletes, coaches, and sports enthusiasts from around the country.',
    },
    {
      icon: Zap,
      title: 'Real-Time Updates',
      description: 'Live scores, brackets, and event notifications delivered instantly to your device.',
    },
  ];

  const upcomingEvents = [
    {
      title: 'National Cricket Championship',
      date: 'March 15-20, 2026',
      location: 'Mumbai',
      sport: 'Cricket',
      image: 'https://images.unsplash.com/photo-1730739463889-34c7279277a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwbWF0Y2glMjBzdGFkaXVtfGVufDF8fHx8MTc3MDM2MTY1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Inter-State Football League',
      date: 'March 22-28, 2026',
      location: 'Bangalore',
      sport: 'Football',
      image: 'https://images.unsplash.com/photo-1549923015-badf41b04831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHN0YWRpdW0lMjBjcm93ZHxlbnwxfHx8fDE3NzAzNjE3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Basketball Pro Series',
      date: 'April 5-10, 2026',
      location: 'Delhi',
      sport: 'Basketball',
      image: 'https://images.unsplash.com/photo-1762860799648-0a957a2e51a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwZ2FtZSUyMGFjdGlvbnxlbnwxfHx8fDE3NzAyODA0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-32">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ backgroundColor: '#00E5FF' }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ 
            backgroundColor: '#1FB6FF',
            animationDelay: '1s',
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  backgroundColor: 'rgba(11, 94, 215, 0.1)',
                  border: '1px solid #0B5ED7',
                }}
              >
                <Trophy size={16} style={{ color: '#0B5ED7' }} />
                <span style={{ color: '#0B5ED7' }} className="text-sm font-medium">
                  India's #1 Sports Platform
                </span>
              </motion.div>
              
              <h1 
                className="text-5xl md:text-7xl mb-6 leading-tight"
                style={{ color: '#1F2937' }}
              >
                Where Champions
                <br />
                <span style={{ color: '#0B5ED7' }}>Come to Play</span>
              </h1>
              
              <p 
                className="text-xl mb-8 leading-relaxed"
                style={{ color: '#6B7280' }}
              >
                Join thousands of athletes competing in premier sports events across India. Register, compete, and celebrate your victories with GameEx.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full font-medium shadow-lg flex items-center gap-2"
                  style={{
                    backgroundColor: '#0B5ED7',
                    color: '#FFFFFF',
                  }}
                >
                  Register for Events
                  <ArrowRight size={20} />
                </motion.button>
                
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full font-medium border-2"
                    style={{
                      borderColor: '#0B5ED7',
                      color: '#0B5ED7',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
              
              <div className="flex flex-wrap gap-8 mt-12">
                {[
                  { value: '250+', label: 'Events' },
                  { value: '10K+', label: 'Athletes' },
                  { value: '50+', label: 'Championships' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div 
                      className="text-3xl font-bold"
                      style={{ color: '#0B5ED7' }}
                    >
                      {stat.value}
                    </div>
                    <div 
                      className="text-sm"
                      style={{ color: '#6B7280' }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1767016697775-001518392206?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzdGFkaXVtJTIwY3Jvd2QlMjBlbmVyZ3l8ZW58MXx8fHwxNzcwMzE3MDA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Sports Event"
                  className="w-full h-[600px] object-cover"
                />
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(11, 94, 215, 0.3) 0%, transparent 50%)',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section 
        className="py-20 border-y"
        style={{ 
          backgroundColor: '#FFFFFF',
          borderColor: '#E5E7EB',
        }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl md:text-5xl mb-4"
              style={{ color: '#1F2937' }}
            >
              Why Choose <span style={{ color: '#0B5ED7' }}>GameEx</span>
            </h2>
            <p 
              className="text-xl max-w-2xl mx-auto"
              style={{ color: '#6B7280' }}
            >
              Everything you need to compete, organize, and excel in sports events
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl border shadow-sm hover:shadow-lg transition-shadow duration-300"
                  style={{
                    backgroundColor: '#F9FAFB',
                    borderColor: '#E5E7EB',
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#0B5ED7' }}
                  >
                    <Icon size={28} style={{ color: '#FFFFFF' }} />
                  </div>
                  <h3 
                    className="text-xl font-semibold mb-2"
                    style={{ color: '#1F2937' }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="leading-relaxed"
                    style={{ color: '#6B7280' }}
                  >
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl mb-4"
            style={{ color: '#1F2937' }}
          >
            Upcoming <span style={{ color: '#0B5ED7' }}>Events</span>
          </h2>
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ color: '#6B7280' }}
          >
            Register now for these exciting tournaments and championships
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden border shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#E5E7EB',
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div 
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: '#0B5ED7',
                    color: '#FFFFFF',
                  }}
                >
                  {event.sport}
                </div>
              </div>
              <div className="p-6">
                <h3 
                  className="text-xl font-semibold mb-3"
                  style={{ color: '#1F2937' }}
                >
                  {event.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <p 
                    className="text-sm flex items-center gap-2"
                    style={{ color: '#6B7280' }}
                  >
                    <Calendar size={16} />
                    {event.date}
                  </p>
                  <p 
                    className="text-sm flex items-center gap-2"
                    style={{ color: '#6B7280' }}
                  >
                    <Trophy size={16} />
                    {event.location}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-lg font-medium"
                  style={{
                    backgroundColor: '#0B5ED7',
                    color: '#FFFFFF',
                  }}
                >
                  Register Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/stories">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-medium border-2 inline-flex items-center gap-2"
              style={{
                borderColor: '#0B5ED7',
                color: '#0B5ED7',
                backgroundColor: '#FFFFFF',
              }}
            >
              View All Events
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      <section 
        className="py-20 border-t"
        style={{ 
          backgroundColor: '#FFFFFF',
          borderColor: '#E5E7EB',
        }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 
              className="text-4xl md:text-5xl mb-6"
              style={{ color: '#1F2937' }}
            >
              Ready to Start Your <span style={{ color: '#0B5ED7' }}>Journey?</span>
            </h2>
            <p 
              className="text-xl mb-8"
              style={{ color: '#6B7280' }}
            >
              Join the GameEx community today and take your sports career to the next level
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-medium shadow-lg text-lg"
                style={{
                  backgroundColor: '#0B5ED7',
                  color: '#FFFFFF',
                }}
              >
                Create Account
              </motion.button>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full font-medium border-2 text-lg"
                  style={{
                    borderColor: '#0B5ED7',
                    color: '#0B5ED7',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
