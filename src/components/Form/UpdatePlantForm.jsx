import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const UpdatePlantForm = ({ plant, closeModal, onUpdate }) => {
  const axiosSecure = useAxiosSecure();

  const [formData, setFormData] = useState({
    name: "",
    category: "Indoor",
    description: "",
    price: "",
    quantity: "",
    image: "",
  });

  useEffect(() => {
    if (plant) {
      setFormData({
        name: plant.name || "",
        category: plant.category || "Indoor",
        description: plant.description || "",
        price: plant.price || "",
        quantity: plant.quantity || "",
        image: plant.image || "",
      });
    }
  }, [plant]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files[0]) {
      setFormData({ ...formData, image: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Only send relevant fields, no _id
      const payload = {
        name: formData.name,
        category: formData.category,
        description: formData.description,
        price: Number(formData.price),
        quantity: Number(formData.quantity),
        image: formData.image,
      };

      const res = await axiosSecure.patch(`/plant/${plant._id}`, payload);

      if (res.data.modifiedCount > 0) {
        toast.success("Plant updated ✅");
        onUpdate({ ...plant, ...payload });
        closeModal();
      } else {
        toast.error("No changes detected ❌");
      }
    } catch (err) {
      console.error(err);
      toast.error("Update failed ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Name */}
      <div className="flex flex-col">
        <label className="text-gray-600">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-lime-500"
        />
      </div>

      {/* Category */}
      <div className="flex flex-col">
        <label className="text-gray-600">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-lime-500"
        >
          <option>Indoor</option>
          <option>Outdoor</option>
          <option>Succulent</option>
          <option>Flowering</option>
        </select>
      </div>

      {/* Description */}
      <div className="flex flex-col">
        <label className="text-gray-600">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full h-28 px-4 py-2 border rounded-md focus:outline-lime-500 resize-none"
        />
      </div>

      {/* Price & Quantity */}
      <div className="flex gap-4 flex-wrap">
        <div className="flex-1 flex flex-col">
          <label className="text-gray-600">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-lime-500"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <label className="text-gray-600">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-lime-500"
          />
        </div>
      </div>

      {/* Image */}
      <div className="flex flex-col">
        <label className="text-gray-600">Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
        {formData.image && (
          <img
            src={formData.image}
            alt="Preview"
            className="mt-2 w-28 rounded"
          />
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-lime-500 text-white py-2 rounded-md hover:bg-lime-600"
      >
        Update Plant
      </button>
    </form>
  );
};

export default UpdatePlantForm;
