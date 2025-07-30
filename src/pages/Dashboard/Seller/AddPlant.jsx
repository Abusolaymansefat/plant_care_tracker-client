import AddPlantForm from "../../../components/Form/AddPlantForm";
import { imageUpload } from "../../../api/utils";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";

const AddPlant = () => {
  const { user } = useAuth();
  const [isUploading, setIsUploading] = useState(false);

  const handleFromSbmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    const form = e.target;
    const name = form?.name?.value;
    const category = form?.category?.value;
    const description = form?.description?.value;
    const price = form?.price?.value;
    const quantity = form?.quantity?.value;
    const image = form?.image?.files[0];
    const imageUrl = await imageUpload(image);

    try {
      const plantData = {
        name,
        category,
        description,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        image: imageUrl,
        seller: {
          name: user?.displayName,
          email: user?.email,
          image: user?.photoURL
        },
      };

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-plant`,
        plantData
      );
      toast.success("Plant Data Added Successfully !!!");
      form.reset();
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      {/* Form */}
      <AddPlantForm handleFromSbmit={handleFromSbmit} isUploading={isUploading} />
    </div>
  );
};

export default AddPlant;
