import { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";

const SellerOrderDataRow = ({ order = {}, onStatusChange, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const {
    _id,
    quantity = 1,
    status = "Pending",
    shippingAddress,
    address,
    customer,
    email,
    plant,
    plantName,
    price: flatPrice,
  } = order;

  // plant name & price handle
  const name = plant?.name || plantName || order?.name || "Unnamed";
  const price = plant?.price || flatPrice || order?.price || 0;

  const customerEmail =
    (typeof customer === "object" ? customer?.email : customer) ||
    email ||
    "N/A";
  const shipping = shippingAddress || address || "Unknown";

  return (
    <tr>
      <td className="px-5 py-5 border-b bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{name}</p>
      </td>
      <td className="px-5 py-5 border-b bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{customerEmail}</p>
      </td>
      <td className="px-5 py-5 border-b bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">${price}</p>
      </td>
      <td className="px-5 py-5 border-b bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{quantity}</p>
      </td>
      <td className="px-5 py-5 border-b bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{shipping}</p>
      </td>
      <td className="px-5 py-5 border-b bg-white text-sm">
        <select
          required
          className="p-1 border-2 border-lime-300 focus:outline-lime-500 rounded-md bg-white"
          name="status"
          value={status}
          onChange={(e) => onStatusChange?.(_id, e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">Start Processing</option>
          <option value="Delivered">Deliver</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </td>

      <td className="px-5 py-5 border-b bg-white text-sm">
        <button
          onClick={() => setIsOpen(true)}
          className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Delete</span>
        </button>

        <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          onConfirm={() => {
            onDelete?.(_id);
            closeModal();
          }}
        />
      </td>
    </tr>
  );
};

export default SellerOrderDataRow;
