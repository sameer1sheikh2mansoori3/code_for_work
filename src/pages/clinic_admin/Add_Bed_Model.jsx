'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function BedMasterModel() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="relative">
      <button 
        onClick={openModal}
        className="px-4 py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700"
      >
        Add bed
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-md p-6 bg-white rounded-2xl animate-fadeIn">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-50">
                  <span className="text-2xl text-teal-600">+</span>
                </div>
                <h2 className="text-xl font-semibold">Add bed</h2>
              </div>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={(e) => {
              e.preventDefault()
              // Handle form submission here
              closeModal()
            }}>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Ward Name */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Ward name <span className="text-red-500">*</span>
                  </label>
                  <select 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    defaultValue="Ward 4"
                  >
                    <option value="Ward 4">Ward 4</option>
                    <option value="Ward 5">Ward 5</option>
                    <option value="Ward 6">Ward 6</option>
                  </select>
                </div>

                {/* Room Number */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Room number <span className="text-red-500">*</span>
                  </label>
                  <select 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    defaultValue="24"
                  >
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                  </select>
                </div>

                {/* Bed Number */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Bed number <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text"
                    defaultValue="12"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                {/* Bed Charges */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Bed charges <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text"
                    defaultValue="1000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

// Add this to your global CSS or tailwind.config.js
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.2s ease-out;
  }
`