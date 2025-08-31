import CountUp from "react-countup";
import { Leaf, Users, BookOpen, ThumbsUp } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function SuccessStats() {
  const stats = [
    {
      id: 1,
      icon: <Leaf className="w-10 h-10 text-green-600" />,
      value: 1200,
      title: "Plants Added",
    },
    {
      id: 2,
      icon: <Users className="w-10 h-10 text-green-600" />,
      value: 800,
      title: "Happy Gardeners",
    },
    {
      id: 3,
      icon: <BookOpen className="w-10 h-10 text-green-600" />,
      value: 300,
      title: "Care Guides",
    },
    {
      id: 4,
      icon: <ThumbsUp className="w-10 h-10 text-green-600" />,
      value: 95,
      title: "Survival Rate (%)",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our <span className="text-green-600">Success</span> in Numbers
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="flex flex-col items-center justify-center bg-green-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <motion.div
                className="mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {stat.icon}
              </motion.div>

              {/* Number */}
              <h3 className="text-3xl font-bold text-gray-800">
                <CountUp end={stat.value} duration={2.5} />
              </h3>

              {/* Title */}
              <p className="mt-2 text-gray-600">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
