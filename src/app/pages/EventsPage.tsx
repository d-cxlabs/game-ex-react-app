import { Calendar, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "Gaming Tournament 2026",
    date: "March 12, 2026",
    location: "Pune, India",
    participants: 120,
    description:
      "Compete with top gamers, climb the leaderboard, and win exciting prizes.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200",
  },
  {
    id: 2,
    title: "Indie Game Showcase",
    date: "April 05, 2026",
    location: "Mumbai, India",
    participants: 80,
    description:
      "Discover upcoming indie games, meet developers, and experience innovation.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200",
  },
  {
    id: 3,
    title: "Esports Bootcamp",
    date: "May 20, 2026",
    location: "Online",
    participants: 200,
    description:
      "Training sessions with professional esports players and strategists.",
    image:
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1200",
  },
];

// animation containers
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function EventsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-14 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-4xl font-semibold tracking-tight mb-3"
        >
          Explore Events
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45 }}
          className="text-gray-600 max-w-2xl"
        >
          Discover tournaments, showcases, and gaming experiences happening near
          you and online.
        </motion.p>
      </section>

      {/* Events grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="rounded-2xl border bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden"
            >
              {/* image */}
              <div className="h-44 w-full overflow-hidden">
                <motion.img
                  src={event.image}
                  alt={event.title}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{event.title}</h2>

                <p className="text-gray-600 text-sm mb-4">
                  {event.description}
                </p>

                {/* metadata */}
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {event.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {event.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    {event.participants} participants
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 w-full rounded-xl bg-blue-600 text-white py-2.5 text-sm font-medium hover:bg-blue-700 transition"
                >
                  Register Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
