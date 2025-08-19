import Card from "./Card";
import Container from "../Shared/Container";
import { useLoaderData } from "react-router";
import EmptyState from "../Shared/EmptyState";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Plants = () => {
  const plants = useLoaderData();

  return (
    <Container>
      <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-center text-gray-900 mt-5"
            >
              Best Tree <span className="text-green-600">Collection</span>
            </motion.h2>
      {plants && plants.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {plants.map((plant) => (
            <Card key={plant._id} plant={plant} />
          ))}
        </div>
      ) : (
        <EmptyState message= 'NO plant data availabe right now? '/>
      )}
    </Container>
  );
};

export default Plants;
