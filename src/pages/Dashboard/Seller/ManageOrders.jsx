import { useEffect, useState } from "react";
import SellerOrderDataRow from "../../../components/Dashboard/TableRows/SellerOrderDataRow";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useRole from "../../../hooks/useRole";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const ManageOrders = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [role, isRoleLoading] = useRole();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch orders for this seller
  useEffect(() => {
    if (isRoleLoading) return;
    if (role !== "seller") return;
    if (!user?.email) return;

    const fetchOrders = async () => {
      try {
        setLoading(true);
        const res = await axiosSecure.get(
          `/order/seller/${user.email}?paidOnly=false`
        );
        console.log("Seller Orders:", res.data); // ✅ debug
        setOrders(res.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [axiosSecure, user, role, isRoleLoading]);

  // status change
  const handleStatusChange = async (id, newStatus) => {
    try {
      await axiosSecure.patch(`/orders/${id}`, { status: newStatus });
      setOrders((prev) =>
        prev.map((o) => (o._id === id ? { ...o, status: newStatus } : o))
      );
    } catch (err) {
      console.error(err);
    }
  };

  // delete
  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`/orders/${id}`);
      setOrders((prev) => prev.filter((o) => o._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading)
    return (
      <p className="p-8 text-center">
        <LoadingSpinner />
      </p>
    );

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 bg-white border-b text-gray-800 text-left text-sm uppercase font-normal">
                    Plant
                  </th>
                  <th className="px-5 py-3 bg-white border-b text-gray-800 text-left text-sm uppercase font-normal">
                    Customer
                  </th>
                  <th className="px-5 py-3 bg-white border-b text-gray-800 text-left text-sm uppercase font-normal">
                    Price
                  </th>
                  <th className="px-5 py-3 bg-white border-b text-gray-800 text-left text-sm uppercase font-normal">
                    Quantity
                  </th>
                  <th className="px-5 py-3 bg-white border-b text-gray-800 text-left text-sm uppercase font-normal">
                    Address
                  </th>
                  <th className="px-5 py-3 bg-white border-b text-gray-800 text-left text-sm uppercase font-normal">
                    Status
                  </th>
                  <th className="px-5 py-3 bg-white border-b text-gray-800 text-left text-sm uppercase font-normal">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <SellerOrderDataRow
                    key={order._id}
                    order={order}
                    onStatusChange={handleStatusChange}
                    onDelete={handleDelete}
                  />
                ))}
                {orders.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-5 py-10 text-center text-gray-500"
                    >
                      No orders found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
