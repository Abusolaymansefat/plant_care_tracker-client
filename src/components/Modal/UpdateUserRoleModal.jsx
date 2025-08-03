import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

const UpdateUserRoleModal = ({ isOpen, setIsOpen, role }) => {
  const [updatedRole, setUpdatedRole] = useState(role);
  console.log(role)
  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/30">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white dark:bg-gray-800 
                         p-6 shadow-xl duration-300 ease-out 
                         data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-lg font-semibold text-gray-900 dark:text-white"
              >
                Update User Role
              </DialogTitle>
              <form>
                <div>
                  <select
                    value={updatedRole}
                    onChange={(e) => setUpdatedRole(e.target.value)}
                    className="w-full my-2 border border-gray-100 rounded-xl px-2 py-1 bg-[#816d5c]"
                    name="role"
                    id=""
                  >
                    <option value="customer">Customer</option>
                    <option value="seller">Seller</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div className="flex justify-between mt-8">
                  <button
                    type="submit"
                    className="bg-[#42e48b] hover:bg-[#85f19d] py-2 px-3 cursor-pointer rounded-xl text-[#0f0e0e]"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    onClick={close}
                    className="bg-[#e44242] hover:bg-[#c27872] py-2 px-3 cursor-pointer rounded-xl text-[#fffff8]"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default UpdateUserRoleModal;
