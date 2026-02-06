import { motion } from 'motion/react';
import { StoryCard } from '../components/StoryCard';
import { Trophy, Calendar, Users, Gamepad2 } from 'lucide-react';

const stories = [
  {
    id: 1,
    title: 'GameEx Championship 2026: The Ultimate Showdown',
    excerpt: 'Over 500 teams competed in the biggest multi-sport tournament of the year. From intense cricket matches to electrifying esports battles, witness the highlights.',
    category: 'Tournament Recap',
    readTime: '8 min read',
    date: 'Feb 5, 2026',
    image: 'https://images.unsplash.com/photo-1767455471543-055dbc6c6700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwdG91cm5hbWVudCUyMGdhbWluZyUyMGFyZW5hfGVufDF8fHx8MTc3MDM4OTIxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
  },
  {
    id: 2,
    title: 'Thunder FC Dominates Inter-College Football League',
    excerpt: 'An incredible performance by Thunder FC as they clinch the championship with a stunning 3-1 victory in the finals.',
    category: 'Football',
    readTime: '5 min read',
    date: 'Feb 4, 2026',
    image: 'https://images.unsplash.com/photo-1549923015-badf41b04831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHN0YWRpdW0lMjBjcm93ZHxlbnwxfHx8fDE3NzAzNjE3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Rising Stars: Meet the U-21 Basketball Phenoms',
    excerpt: 'These young athletes are redefining the game with their skills, teamwork, and dedication. Get to know the future champions.',
    category: 'Player Spotlight',
    readTime: '6 min read',
    date: 'Feb 2, 2026',
    image: 'https://images.unsplash.com/photo-1762860799648-0a957a2e51a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwZ2FtZSUyMGFjdGlvbnxlbnwxfHx8fDE3NzAyODA0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    title: 'Cricket Premier League: A Night to Remember',
    excerpt: 'Packed stadium, nail-biting finish, and an unforgettable last-ball six. Relive the most thrilling moments from CPL Finals.',
    category: 'Cricket',
    readTime: '7 min read',
    date: 'Jan 31, 2026',
    image: 'https://images.unsplash.com/photo-1730739463889-34c7279277a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwbWF0Y2glMjBzdGFkaXVtfGVufDF8fHx8MTc3MDM2MTY1MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    title: 'Badminton Championship: Speed, Precision, Victory',
    excerpt: 'Witness the incredible agility and mental strength of athletes competing at the highest level in the Regional Badminton Championship.',
    category: 'Badminton',
    readTime: '4 min read',
    date: 'Jan 29, 2026',
    image: 'https://images.unsplash.com/photo-1613918702390-48771f69c133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWRtaW50b24lMjBwbGF5ZXIlMjBjb21wZXRpdGlvbnxlbnwxfHx8fDE3NzAzMzk4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    title: 'Behind the Scenes: Organizing a 5000+ Participant Event',
    excerpt: 'Event management insights from the team that made GameEx Championship possible. Learn the strategies behind seamless execution.',
    category: 'Event Management',
    readTime: '10 min read',
    date: 'Jan 27, 2026',
    image: 'https://images.unsplash.com/photo-1558008322-9793c57cb73b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjB0b3VybmFtZW50JTIwY3Jvd2R8ZW58MXx8fHwxNzcwMjY4NjYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const categories = [
  { name: 'All Events', icon: Trophy },
  { name: 'Tournaments', icon: Calendar },
  { name: 'Player Stories', icon: Users },
  { name: 'Esports', icon: Gamepad2 },
];

export function StoriesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ backgroundColor: '#00E5FF' }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 animate-pulse"
          style={{ 
            backgroundColor: '#1FB6FF',
            animationDelay: '1s',
          }}
        />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
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
              <Trophy size={16} style={{ color: '#0B5ED7' }} />
              <span style={{ color: '#0B5ED7' }} className="text-sm font-medium">
                Featured Stories & Highlights
              </span>
            </motion.div>
            
            <h1 
              className="text-5xl md:text-7xl mb-6"
              style={{ color: '#1F2937' }}
            >
              Champions, Moments &
              <br />
              <span 
                className="relative inline-block"
                style={{ color: '#0B5ED7' }}
              >
                Victory Stories
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                  style={{ 
                    backgroundColor: '#0B5ED7',
                    boxShadow: '0 0 15px rgba(11, 94, 215, 0.3)',
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl mb-12 max-w-2xl mx-auto"
              style={{ color: '#6B7280' }}
            >
              From record-breaking performances to inspiring athlete journeys - dive into the stories that define sports excellence at GameEx.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-8"
            >
              {[
                { label: 'Events Hosted', value: '250+' },
                { label: 'Active Athletes', value: '10K+' },
                { label: 'Championships', value: '50+' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div 
                    className="text-3xl font-bold mb-1"
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
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <section className="border-y bg-white" style={{ borderColor: '#E5E7EB' }}>
        <div className="container mx-auto px-6 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 border shadow-sm"
                  style={{
                    backgroundColor: index === 0 ? '#0B5ED7' : '#FFFFFF',
                    borderColor: index === 0 ? '#0B5ED7' : '#E5E7EB',
                    color: index === 0 ? '#FFFFFF' : '#4B5563',
                  }}
                >
                  <Icon size={18} />
                  <span className="font-medium">{category.name}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>
      
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stories.map((story) => (
            <StoryCard
              key={story.id}
              {...story}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-medium border-2 transition-all duration-300 shadow-md"
            style={{
              borderColor: '#0B5ED7',
              color: '#0B5ED7',
              backgroundColor: '#FFFFFF',
            }}
          >
            Load More Stories
          </motion.button>
        </motion.div>
      </section>
      
      <section 
        className="border-y py-20"
        style={{ 
          borderColor: '#E5E7EB',
          backgroundColor: '#FFFFFF',
        }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 
              className="text-4xl mb-4"
              style={{ color: '#1F2937' }}
            >
              Never Miss a <span style={{ color: '#0B5ED7' }}>Victory</span>
            </h2>
            <p 
              className="mb-8"
              style={{ color: '#6B7280' }}
            >
              Subscribe to get the latest tournament updates, player stories, and event highlights delivered to your inbox.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border outline-none focus:border-[#0B5ED7] transition-colors shadow-sm"
                style={{
                  backgroundColor: '#F9FAFB',
                  borderColor: '#E5E7EB',
                  color: '#1F2937',
                }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full font-medium shadow-md"
                style={{
                  backgroundColor: '#0B5ED7',
                  color: '#FFFFFF',
                }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
