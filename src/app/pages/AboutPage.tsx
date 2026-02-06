import { motion } from 'motion/react';
import { Trophy, Target, Users, Award, Zap, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'We strive for excellence in every event, ensuring world-class experiences for athletes and spectators.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building strong sports communities through inclusive and engaging events that bring people together.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology to revolutionize sports event management and participation.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for sports drives us to create memorable experiences that inspire and motivate athletes.',
    },
  ];

  const stats = [
    { value: '250+', label: 'Events Organized' },
    { value: '10,000+', label: 'Active Athletes' },
    { value: '50+', label: 'Championships' },
    { value: '15+', label: 'Sports Categories' },
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/flagged/photo-1568407371446-a239664fb4f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhdGhsZXRlcyUyMGRpdmVyc2UlMjB0ZWFtfGVufDF8fHx8MTc3MDM4OTg4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1759446334429-bb1f2d1d9f13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB0ZWFtJTIwY2VsZWJyYXRpb24lMjB0cm9waHl8ZW58MXx8fHwxNzcwMzg5ODg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Aditya Patel',
      role: 'Technology Director',
      image: 'https://images.unsplash.com/photo-1767584412923-f66fb341a2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBldmVudCUyMG1hbmFnZW1lbnQlMjBzdGFkaXVtfGVufDF8fHx8MTc3MDM4OTg4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden py-20">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ backgroundColor: '#00E5FF' }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                backgroundColor: 'rgba(11, 94, 215, 0.1)',
                border: '1px solid #0B5ED7',
              }}
            >
              <Award size={16} style={{ color: '#0B5ED7' }} />
              <span style={{ color: '#0B5ED7' }} className="text-sm font-medium">
                About GameEx
              </span>
            </motion.div>
            
            <h1 
              className="text-5xl md:text-7xl mb-6"
              style={{ color: '#1F2937' }}
            >
              Empowering Sports
              <br />
              <span 
                className="relative inline-block"
                style={{ color: '#0B5ED7' }}
              >
                Communities
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              GameEx is India's leading sports event management platform, dedicated to creating exceptional experiences for athletes, organizers, and sports enthusiasts. Since our inception, we've been at the forefront of revolutionizing how sports events are organized and experienced.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl border"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#E5E7EB',
              }}
            >
              <div 
                className="text-4xl font-bold mb-2"
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
            </motion.div>
          ))}
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
              className="text-4xl mb-4"
              style={{ color: '#1F2937' }}
            >
              Our <span style={{ color: '#0B5ED7' }}>Mission</span>
            </h2>
            <p 
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#6B7280' }}
            >
              To democratize access to world-class sports events and create a thriving ecosystem where athletes, organizers, and fans can connect, compete, and celebrate the spirit of sports.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl border shadow-sm"
                  style={{
                    backgroundColor: '#F9FAFB',
                    borderColor: '#E5E7EB',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#0B5ED7' }}
                  >
                    <Icon size={24} style={{ color: '#FFFFFF' }} />
                  </div>
                  <h3 
                    className="text-xl font-semibold mb-2"
                    style={{ color: '#1F2937' }}
                  >
                    {value.title}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ color: '#6B7280' }}
                  >
                    {value.description}
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
            className="text-4xl mb-4"
            style={{ color: '#1F2937' }}
          >
            Meet Our <span style={{ color: '#0B5ED7' }}>Team</span>
          </h2>
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ color: '#6B7280' }}
          >
            Passionate professionals dedicated to delivering exceptional sports experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to top, rgba(11, 94, 215, 0.6) 0%, transparent 60%)',
                  }}
                />
              </div>
              <h3 
                className="text-xl font-semibold mb-1"
                style={{ color: '#1F2937' }}
              >
                {member.name}
              </h3>
              <p style={{ color: '#0B5ED7' }} className="font-medium">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
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
              className="text-4xl mb-6"
              style={{ color: '#1F2937' }}
            >
              Ready to Join the <span style={{ color: '#0B5ED7' }}>Action?</span>
            </h2>
            <p 
              className="text-xl mb-8"
              style={{ color: '#6B7280' }}
            >
              Whether you're an athlete, organizer, or fan, GameEx has something for everyone. Let's create unforgettable sports moments together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-medium shadow-lg text-lg"
              style={{
                backgroundColor: '#0B5ED7',
                color: '#FFFFFF',
              }}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
