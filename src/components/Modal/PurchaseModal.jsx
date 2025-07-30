import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const PurchaseModal = ({ closeModal, isOpen, plant }) => {
  const { user } = useAuth();

  const { name, category, price, _id, quantity, image, seller } = plant || {};
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  const [orderData, setOrderData] = useState({
    customer: {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    },
    seller,
    plantId: _id,
    quantity: 1,
    price: price,
    plantName: name,
    plantCategory: category,
    plantImage: image,
  });

  useEffect(() => {
    if (user) {
      setOrderData(prev => ({
        ...prev,
        customer: {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        }
      }));
    }
  }, [user]);

  const handleQuantity = (value) => {
    const totalQuantity = Math.max(1, parseInt(value) || 1);

    if (totalQuantity > quantity) {
      toast.error("You cannot purchase more than available quantity.");
      return;
    }
    const calculatedPrice = totalQuantity * price;
    setSelectedQuantity(totalQuantity);
    setTotalPrice(calculatedPrice);
    setOrderData(prev => ({
      ...prev,
      price: calculatedPrice,
      quantity: totalQuantity,
    }));
  };

   

  return (
    <Dialog open={isOpen} as="div" className="relative z-10" onClose={closeModal}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/30">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            className="w-full max-w-md bg-white p-6 shadow-xl rounded-2xl"
          >
            <DialogTitle className="text-lg font-medium text-center text-gray-900">
              Review Info Before Purchase
            </DialogTitle>

            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p><strong>Plant:</strong> {name}</p>
              <p><strong>Category:</strong> {category}</p>
              <p><strong>Customer:</strong> {user?.displayName}</p>
              <p><strong>Price per Unit:</strong> $ {price}</p>
              <p><strong>Available Quantity:</strong> {quantity}</p>
            </div>

            <hr className="my-3" />

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#dacabd]">
                Enter Quantity:
              </label>
              <input
                value={selectedQuantity}
                onChange={(e) => handleQuantity(e.target.value)}
                type="number"
                min={1}
                className="border rounded px-3 py-1 text-sm text-[#e96b04]"
              />
              <p className="text-sm text-gray-500">Selected Quantity: {selectedQuantity}</p>
              <p className="text-sm text-gray-500">Total Price: $ {totalPrice}</p>
            </div>

            {/* Stripe checkout from  */}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default PurchaseModal;
