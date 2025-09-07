import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";


const DeleteModal = ({ closeModal, isOpen, plantId, onConfirm }) => {
  const axiosSecure = useAxiosSecure();

  const handleDelete = async () => {
    try {
      const res = await axiosSecure.delete(`/plant/${plantId}`);
      if (res.data.deletedCount > 0) {
        toast.success("Plant deleted ✅");
        onConfirm(); // UI থেকে remove
        closeModal();
      }
    } catch (err) {
      toast.error("Failed to delete ❌");
      console.error(err);
    }
  };

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-10">
      <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
        <DialogPanel className="bg-white p-6 rounded-xl w-full max-w-md">
          <DialogTitle className="text-lg font-medium text-gray-900">
            Are you sure?
          </DialogTitle>
          <p className="mt-2 text-sm text-gray-500">
            You cannot undo once it&apos;s done!
          </p>
          <div className="flex mt-6 justify-around">
            <button
              type="button"
              onClick={handleDelete}
              className="px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Yes
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
            >
              No
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default DeleteModal;
