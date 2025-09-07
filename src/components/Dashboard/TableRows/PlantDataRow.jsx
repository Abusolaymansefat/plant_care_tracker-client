import { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
import UpdatePlantModal from "../../Modal/UpdatePlantModal";

const PlantDataRow = ({ plant, onDelete, onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <tr>
      {/* Image */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <img
          alt={plant.name}
          src={plant.image}
          className="mx-auto object-cover rounded h-10 w-15"
        />
      </td>

      {/* Name */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {plant.name}
      </td>

      {/* Category */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {plant.category}
      </td>

      {/* Price */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        ${plant.price}
      </td>

      {/* Quantity */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {plant.quantity}
      </td>

      {/* Delete */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          onClick={() => setIsOpen(true)}
          className="cursor-pointer px-3 py-1 text-red-600 font-semibold"
        >
          Delete
        </span>
        <DeleteModal
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          plantId={plant._id}
          onConfirm={() => onDelete(plant._id)}
        />
      </td>

      {/* Update */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          onClick={() => setIsEditModalOpen(true)}
          className="cursor-pointer px-3 py-1 text-green-600 font-semibold"
        >
          Update
        </span>
        <UpdatePlantModal
          isOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          plant={plant}
          onUpdate={onUpdate}
        />
      </td>
    </tr>
  );
};

export default PlantDataRow;
