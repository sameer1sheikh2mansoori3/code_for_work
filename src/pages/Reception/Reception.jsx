import React from 'react'
import { useState } from "react"
import { X, Shield, UserPlus, Stethoscope, Microscope, Package, Pill, Calendar, Settings, LogOut } from "lucide-react"

const Reception = () => {
      const [activeMenu, setActiveMenu] = useState("Patient Master")

  const menuItems = ["New Patient Registration", "Patient Master", "Services"]
  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <div className="w-[96px] bg-teal-800 flex flex-col items-center justify-between">
      <div className="flex flex-col items-center w-full">
        {/* Logo */}
        <div className="p-4 text-teal-300 text-4xl font-bold">H</div>

        {/* Main Navigation Icons */}
        <div className="flex flex-col items-center gap-8 mt-4 w-full">
          <button className="p-3 text-white hover:bg-teal-700 w-full flex justify-center">
            <Shield size={28} className="text-white" />
          </button>

          <button className="p-3 bg-teal-700 text-white w-full flex justify-center">
            <div className="relative">
              <UserPlus size={28} className="text-teal-300" />
            </div>
          </button>

          <button className="p-3 text-white hover:bg-teal-700 w-full flex justify-center">
            <Stethoscope size={28} className="text-white" />
          </button>

          <button className="p-3 text-white hover:bg-teal-700 w-full flex justify-center">
            <Microscope size={28} className="text-white" />
          </button>

          <button className="p-3 text-white hover:bg-teal-700 w-full flex justify-center">
            <Package size={28} className="text-white" />
          </button>

          <button className="p-3 text-white hover:bg-teal-700 w-full flex justify-center">
            <Pill size={28} className="text-white" />
          </button>

          <button className="p-3 text-white hover:bg-teal-700 w-full flex justify-center">
            <Calendar size={28} className="text-white" />
          </button>
        </div>
      </div>

      {/* Bottom Icons */}
      <div className="flex flex-col items-center gap-8 mb-8 w-full">
        <button className="p-3 text-white hover:bg-teal-700 w-full flex justify-center">
          <Settings size={28} className="text-white" />
        </button>

        <button className="p-3 text-white hover:bg-teal-700 w-full flex justify-center">
          <LogOut size={28} className="text-white" />
        </button>
      </div>
    </div>

    {/* Main Content */}
    <div className="flex-1 border-l w-[70%]  border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-teal-800">Reception</h1>
        <button className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>

      {/* Menu Items */}
      <div className="border-b w-[50%] justify-items-start  flex flex-col border-gray-200">
        {menuItems.map((item) => (
          <button
            key={item}
            className={`px-6 py-4 text-lg ${
              activeMenu === item ? "text-teal-600 font-medium" : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveMenu(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="p-6">{/* Content would go here based on selected menu item */}</div>
    </div>
  </div>
  )
}

export default Reception