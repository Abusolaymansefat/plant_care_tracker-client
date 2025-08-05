import { useState } from 'react'
import DeleteModal from '../../Modal/DeleteModal'
import axios from 'axios'

const CustomerOrderDataRow = ({ order, refetch }) => {
  let [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)

  const [currentStatus, setCurrentStatus] = useState(order.status)

  // Cancel Handler (Server Update সহ)
  const handleCancel = async () => {
    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}/orders/${order._id}`, {
        status: 'Cancelled',
      })

      setCurrentStatus('Cancelled')
      if (refetch) refetch()
      setIsOpen(false)
    } catch (error) {
      console.error('Error cancelling order:', error)
    }
  }

  const { plantImage, plantName, quantity, plantCategory, price } = order

  return (
    <tr className="bg-gray-200 text-black">
      <td className='px-5 py-5 border-b border-gray-300 text-sm'>
        <img
          alt='plant'
          src={plantImage}
          className='mx-auto object-cover rounded h-10 w-15 '
        />
      </td>

      <td className='px-5 py-5 border-b border-gray-300 text-sm'>
        {plantName}
      </td>

      <td className='px-5 py-5 border-b border-gray-300 text-sm'>
        {plantCategory}
      </td>

      <td className='px-5 py-5 border-b border-gray-300 text-sm'>
        ${price}
      </td>

      <td className='px-5 py-5 border-b border-gray-300 text-sm'>
        {quantity}
      </td>

      <td className='px-5 py-5 border-b border-gray-300 text-sm'>
        <span
          className={`font-bold ${
            currentStatus === 'Cancelled' ? 'text-red-600' : 'text-green-700'
          }`}
        >
          {currentStatus}
        </span>
      </td>

      <td className='px-5 py-5 border-b border-gray-300 text-sm'>
        <button
          onClick={() => setIsOpen(true)}
          disabled={currentStatus === 'Cancelled'}
          className='relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-lime-900 leading-tight'
        >
          <span className='absolute inset-0 bg-red-200 opacity-50 rounded-full'></span>
          <span className='relative'>Cancel</span>
        </button>

        {/* Delete Modal */}
        <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          onConfirm={handleCancel}
        />
      </td>
    </tr>
  )
}

export default CustomerOrderDataRow
