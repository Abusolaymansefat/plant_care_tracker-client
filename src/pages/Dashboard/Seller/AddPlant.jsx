import AddPlantForm from "../../../components/Form/AddPlantForm";
import { imageUpload } from "../../../api/utils";
import axios from "axios";

const AddPlant = () => {
  const handleFromSbmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form?.name?.value;
    const category = form?.category?.value;
    const description = form?.description?.value;
    const price = form?.price?.value;
    const quantity = form?.quantity?.value;
    const image = form?.image?.files[0];
    const imageUrl =  await imageUpload(image);

    const plantData = {
      name,
      category,
      description,
      price,
      quantity,
      image: imageUrl,
    };
    console.log(plantData)

    const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/add-plant`, plantData)
    console.log(data)
  };
  return (
    <div>
      {/* Form */}
      <AddPlantForm handleFromSbmit={handleFromSbmit} />
    </div>
  );
};

export default AddPlant;
