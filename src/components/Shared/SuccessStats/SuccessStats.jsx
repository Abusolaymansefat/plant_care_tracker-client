import CountUp from "react-countup";
import { Leaf, Users, BookOpen, ThumbsUp } from "lucide-react";

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
        <h2 className="text-3xl font-bold text-center mb-12">
          Our <span className="text-green-600">Success</span> in Numbers
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center bg-green-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              {/* Icon */}
              <div className="mb-4">{stat.icon}</div>
              {/* Number */}
              <h3 className="text-3xl font-bold text-gray-800">
                <CountUp end={stat.value} duration={2.5} />
              </h3>
              {/* Title */}
              <p className="mt-2 text-gray-600">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
