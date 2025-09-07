import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import UpdatePlantForm from "../Form/UpdatePlantForm";

const UpdatePlantModal = ({ isOpen, setIsEditModalOpen, plant, onUpdate }) => {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10"
      onClose={() => setIsEditModalOpen(false)}
    >
      <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
        <DialogPanel className="bg-white p-6 rounded-xl w-full max-w-md">
          <DialogTitle className="text-lg font-semibold text-center">
            Update Plant Info
          </DialogTitle>

          <UpdatePlantForm
            plant={plant}
            onUpdate={onUpdate}
            closeModal={() => setIsEditModalOpen(false)}
          />
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default UpdatePlantModal;
