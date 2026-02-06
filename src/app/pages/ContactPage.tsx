import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: ['support@gameex.com', 'events@gameex.com'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 98765 43211'],
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['GameEx Headquarters', 'Andheri East, Mumbai 400069', 'Maharashtra, India'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden py-20">
        <div 
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ backgroundColor: '#1FB6FF' }}
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
              <Send size={16} style={{ color: '#0B5ED7' }} />
              <span style={{ color: '#0B5ED7' }} className="text-sm font-medium">
                Get In Touch
              </span>
            </motion.div>
            
            <h1 
              className="text-5xl md:text-7xl mb-6"
              style={{ color: '#1F2937' }}
            >
              Contact <span style={{ color: '#0B5ED7' }}>Us</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
              style={{ color: '#6B7280' }}
            >
              Have questions about our events or services? We're here to help! Reach out to us and we'll get back to you as soon as possible.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border shadow-lg"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#E5E7EB',
              }}
            >
              <h2 
                className="text-3xl mb-6"
                style={{ color: '#1F2937' }}
              >
                Send us a <span style={{ color: '#0B5ED7' }}>Message</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium mb-2"
                      style={{ color: '#1F2937' }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border outline-none focus:border-[#0B5ED7] transition-colors"
                      style={{
                        backgroundColor: '#F9FAFB',
                        borderColor: '#E5E7EB',
                        color: '#1F2937',
                      }}
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium mb-2"
                      style={{ color: '#1F2937' }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border outline-none focus:border-[#0B5ED7] transition-colors"
                      style={{
                        backgroundColor: '#F9FAFB',
                        borderColor: '#E5E7EB',
                        color: '#1F2937',
                      }}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="phone" 
                      className="block text-sm font-medium mb-2"
                      style={{ color: '#1F2937' }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border outline-none focus:border-[#0B5ED7] transition-colors"
                      style={{
                        backgroundColor: '#F9FAFB',
                        borderColor: '#E5E7EB',
                        color: '#1F2937',
                      }}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="subject" 
                      className="block text-sm font-medium mb-2"
                      style={{ color: '#1F2937' }}
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border outline-none focus:border-[#0B5ED7] transition-colors"
                      style={{
                        backgroundColor: '#F9FAFB',
                        borderColor: '#E5E7EB',
                        color: '#1F2937',
                      }}
                    >
                      <option value="">Select a subject</option>
                      <option value="event">Event Registration</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#1F2937' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border outline-none focus:border-[#0B5ED7] transition-colors resize-none"
                    style={{
                      backgroundColor: '#F9FAFB',
                      borderColor: '#E5E7EB',
                      color: '#1F2937',
                    }}
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-lg font-medium shadow-md flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: '#0B5ED7',
                    color: '#FFFFFF',
                  }}
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl border shadow-sm"
                  style={{
                    backgroundColor: '#FFFFFF',
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
                    className="text-lg font-semibold mb-3"
                    style={{ color: '#1F2937' }}
                  >
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail) => (
                      <p 
                        key={detail}
                        className="text-sm"
                        style={{ color: '#6B7280' }}
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 
              className="text-3xl mb-4"
              style={{ color: '#1F2937' }}
            >
              Need Immediate <span style={{ color: '#0B5ED7' }}>Assistance?</span>
            </h2>
            <p 
              className="text-lg mb-8 max-w-2xl mx-auto"
              style={{ color: '#6B7280' }}
            >
              For urgent matters or event-day support, our dedicated team is available 24/7 during active events.
            </p>
            <motion.a
              href="tel:+919876543210"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium shadow-md"
              style={{
                backgroundColor: '#0B5ED7',
                color: '#FFFFFF',
              }}
            >
              <Phone size={20} />
              Call Emergency Hotline
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
