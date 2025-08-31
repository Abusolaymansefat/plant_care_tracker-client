import { FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "/img/user1.jpg",
      review:
        "This app helped me save my plants! The watering reminders are super helpful and easy to follow.",
      rating: 5,
    },
    {
      id: 2,
      name: "David Lee",
      image: "/img/user2.jpg",
      review:
        "I love the detailed plant care guides. As a beginner, I finally feel confident growing indoor plants.",
      rating: 4,
    },
    {
      id: 3,
      name: "Emma Watson",
      image: "/img/user3.jpg",
      review:
        "Amazing experience! The community tips and care tracker feature keep my plants thriving.",
      rating: 5,
    },
    {
      id: 4,
      name: "Michael Brown",
      image: "/img/user4.jpg",
      review:
        "Great app for plant lovers! The reminders and guides are very easy to follow.",
      rating: 4,
    },
    {
      id: 5,
      name: "Sophia Martinez",
      image: "/img/user5.jpg",
      review:
        "I’ve never had healthier plants before. The app is simple and very effective!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our <span className="text-green-600">Community</span> Says
        </h2>

        {/* Marquee Effect */}
        <Marquee pauseOnHover={true} speed={60} gradient={false}>
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl shadow-md p-6 text-center mx-4 w-80 hover:shadow-lg transition"
            >
              {/* User Image */}
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
              />

              {/* User Name */}
              <h3 className="text-lg font-semibold">{review.name}</h3>

              {/* Stars */}
              <div className="flex justify-center my-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600">{review.review}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
