import { useEffect, useState } from "react";
import PlantDataRow from "../../../components/Dashboard/TableRows/PlantDataRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyInventory = () => {
  const axiosSecure = useAxiosSecure();
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const res = await axiosSecure.get("/plants");
        setPlants(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPlants();
  }, [axiosSecure]);

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Image
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Name
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Category
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Price
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Quantity
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Delete
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Update
                  </th>
                </tr>
              </thead>
              <tbody>
                {plants.map((plant) => (
                  <PlantDataRow
                    key={plant._id}
                    plant={plant}
                    onDelete={(id) =>
                      setPlants((prev) => prev.filter((p) => p._id !== id))
                    }
                    onUpdate={(updated) =>
                      setPlants((prev) =>
                        prev.map((p) => (p._id === updated._id ? updated : p))
                      )
                    }
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInventory;
