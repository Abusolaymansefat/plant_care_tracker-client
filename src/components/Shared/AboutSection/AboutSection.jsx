import { FaLeaf, FaDraftingCompass, FaGift, FaShoppingCart } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-100  my-10">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-black mb-12">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Service 1: Interior Plant Service */}
          <div className="flex flex-col items-center  p-6 bg-white rounded-lg shadow transition-transform duration-300 hover:scale-105">
            {/* Icon with hover color */}
            <div className="text-5xl mb-4 text-black  transition-colors duration-300 hover:text-green-500 cursor-pointer">
              <FaLeaf />
            </div>
            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 text-black ">
              Interior Plant Service
            </h3>
            {/* Description */}
            <p className="text-center text-gray-600 ">
              This item includes installation and maintenance.
            </p>
          </div>

          {/* Service 2: Interior Landscaping Design */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow transition-transform duration-300 hover:scale-105">
            <div className="text-5xl mb-4 text-black  transition-colors duration-300 hover:text-blue-500 cursor-pointer">
              <FaDraftingCompass />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black ">
              Interior Landscaping Design
            </h3>
            <p className="text-center text-gray-600 ">
              We offer a complete range of design services.
            </p>
          </div>

          {/* Service 3: Season Holiday Decorating */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow transition-transform duration-300 hover:scale-105">
            <div className="text-5xl mb-4 text-black  transition-colors duration-300 hover:text-pink-500 cursor-pointer">
              <FaGift />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black ">
              Season Holiday Decorating
            </h3>
            <p className="text-center text-gray-600 ">
              We have a lot of creative & easy decorating ideas.
            </p>
          </div>

          {/* Service 4: Landscaping Products */}
          <div className="flex flex-col items-center p-6 bg-white  rounded-lg shadow transition-transform duration-300 hover:scale-105">
            <div className="text-5xl mb-4 text-black  transition-colors duration-300 hover:text-yellow-500 cursor-pointer">
              <FaShoppingCart />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black ">
              Landscaping Products
            </h3>
            <p className="text-center text-gray-600 ">
              We have a wide range of landscaping products.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
