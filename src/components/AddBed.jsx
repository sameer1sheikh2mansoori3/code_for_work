// import { ChevronLeft, ChevronRight, FileText, Filter, Search } from 'lucide-react'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom' // Import useNavigate
// import BedMasterModel from '../pages/clinic_admin/Add_Bed_Model'
// import Ward from './bedMaster/Ward'
// const AddBed = () => {
//   const navigate = useNavigate() // Initialize useNavigate
//   const paginationNumbers = Array.from({ length: 6 }, (_, i) => i + 1)

//   // Add dummy data
//   const dummyBeds = Array(12)
//     .fill(null)
//     .map((_, i) => ({
//       id: i + 1,
//       bedNumber: "12",
//       ward: "Pediatric ward",
//       roomNo: "12",
//       price: "INR 5000",
//     }))

//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
//   const [activeTab, setActiveTab] = useState("bed") // Default active tab
//   const [searchQuery, setSearchQuery] = useState("")
//   const [currentPage, setCurrentPage] = useState(1)
//   const [totalPages, setTotalPages] = useState(30)

//   // Function to handle tab clicks and navigation
//   const handleTabClick = (tab) => {
//     setActiveTab(tab.toLowerCase()) // Update the active tab
//     navigate(`/bed-master/${tab.toLowerCase()}`) // Navigate to the corresponding route
//   }

//   // Render content based on the active tab
//   const renderContent = () => {
//     switch (activeTab) {
//       case "ward":
//         return <div>Ward Component Content</div> // Replace with your Ward component
//       case "room":
//         return <div>Room Component Content</div> // Replace with your Room component
//       case "bed":
//       default:
//         return (
//           <>
//             {/* Bed Grid */}
//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
//               {dummyBeds.map((bed) => (
//                 <div key={bed.id} className="p-4 bg-white rounded-lg shadow-sm">
//                   <div className="flex items-center justify-between mb-2">
//                     <h3 className="text-sm font-medium">Bed number: {bed.bedNumber}</h3>
//                     <button className="text-teal-500 hover:text-teal-600">
//                       <FileText className="w-4 h-4" />
//                     </button>
//                   </div>
//                   <div className="space-y-1 text-sm text-gray-600">
//                     <p>Ward: {bed.ward}</p>
//                     <p>Room no: {bed.roomNo}</p>
//                     <div className="inline-block px-2 py-1 mt-2 text-xs font-medium text-teal-700 rounded-full bg-teal-50">
//                       {bed.price}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Pagination */}
//             <div className="flex items-center justify-between mt-6">
//               <p className="text-sm text-gray-500">
//                 Page {currentPage} of {totalPages}
//               </p>
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//                   disabled={currentPage === 1}
//                   className="p-2 text-gray-400 border rounded hover:bg-gray-50 disabled:opacity-50"
//                 >
//                   <ChevronLeft className="w-4 h-4" />
//                 </button>
//                 {paginationNumbers.map((num) => (
//                   <button
//                     key={num}
//                     onClick={() => setCurrentPage(num)}
//                     className={`px-3 py-1 rounded ${
//                       currentPage === num ? "bg-teal-600 text-white" : "text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     {num}
//                   </button>
//                 ))}
//                 <button
//                   onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
//                   disabled={currentPage === totalPages}
//                   className="p-2 text-gray-400 border rounded hover:bg-gray-50 disabled:opacity-50"
//                 >
//                   <ChevronRight className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           </>
//         )
//     }
//   }

//   return (
//     <>
//       {/* Main Content */}
//       <div className="flex-1 overflow-auto">
//         <div className="p-8">
//           {/* Expand Sidebar Button */}
//           {isSidebarCollapsed && (
//             <button onClick={() => setIsSidebarCollapsed(false)} className="p-2 mb-4 rounded-lg hover:bg-gray-100">
//               <ChevronLeft className="w-5 h-5 rotate-180" />
//             </button>
//           )}

//           <h1 className="mb-6 text-2xl font-semibold text-gray-900">Bed Master</h1>

//           {/* Tabs */}
//           <div className="mb-6 border-b border-gray-200">
//             <div className="flex gap-8">
//               {["Ward", "Room", "Bed"].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => handleTabClick(tab)} // Use handleTabClick for navigation
//                   className={`pb-4 px-2 text-sm font-medium relative ${
//                     activeTab === tab.toLowerCase()
//                       ? "text-teal-600 border-b-2 border-teal-600"
//                       : "text-gray-500 hover:text-gray-700"
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Search and Actions */}
//           <div className="flex gap-4 mb-8">
//             <div className="relative flex-1">
//               <Search className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2" />
//               <input
//                 type="text"
//                 placeholder="Search"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//             </div>
//             <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
//               <Filter className="w-5 h-5" />
//               Filter
//             </button>
//             <BedMasterModel />
//           </div>

//           {/* Render Content Based on Active Tab */}
//           {renderContent()}
//         </div>
//       </div>
//     </>
//   )
// }

// export default AddBed
import { ChevronLeft, ChevronRight, FileText, Filter, Search } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Import useNavigate
import BedMasterModel from '../pages/clinic_admin/Add_Bed_Model'
import Ward from './bedMaster/Ward' // Import Ward component
import Room from './bedMaster/Rooms' // Import Room component



const AddBed = () => {
  const navigate = useNavigate() // Initialize useNavigate
  const paginationNumbers = Array.from({ length: 6 }, (_, i) => i + 1)

  // Add dummy data
  const dummyBeds = Array(12)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      bedNumber: "12",
      ward: "Pediatric ward",
      roomNo: "12",
      price: "INR 5000",
    }))

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [activeTab, setActiveTab] = useState("bed") // Default active tab
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(30)

  // Function to handle tab clicks and navigation
  const handleTabClick = (tab) => {
    setActiveTab(tab.toLowerCase()) // Update the active tab
    navigate(`/bed-master/${tab.toLowerCase()}`) // Navigate to the corresponding route
  }

  // Render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "ward":
        return <Ward /> // Render the Ward component
      case "room":
        return <Room /> // Render the Room component
      case "bed":
      default:
        return (
          <>
            {/* Bed Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {dummyBeds.map((bed) => (
                <div key={bed.id} className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium">Bed number: {bed.bedNumber}</h3>
                    <button className="text-teal-500 hover:text-teal-600">
                      <FileText className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Ward: {bed.ward}</p>
                    <p>Room no: {bed.roomNo}</p>
                    <div className="inline-block px-2 py-1 mt-2 text-xs font-medium text-teal-700 rounded-full bg-teal-50">
                      {bed.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <p className="text-sm text-gray-500">
                Page {currentPage} of {totalPages}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 text-gray-400 border rounded hover:bg-gray-50 disabled:opacity-50"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {paginationNumbers.map((num) => (
                  <button
                    key={num}
                    onClick={() => setCurrentPage(num)}
                    className={`px-3 py-1 rounded ${
                      currentPage === num ? "bg-teal-600 text-white" : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {num}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 text-gray-400 border rounded hover:bg-gray-50 disabled:opacity-50"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        )
    }
  }

  return (
    <>
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Expand Sidebar Button */}
          {isSidebarCollapsed && (
            <button onClick={() => setIsSidebarCollapsed(false)} className="p-2 mb-4 rounded-lg hover:bg-gray-100">
              <ChevronLeft className="w-5 h-5 rotate-180" />
            </button>
          )}

          <h1 className="mb-6 text-2xl font-semibold text-gray-900">Bed Master</h1>

          {/* Tabs */}
          <div className="mb-6 border-b border-gray-200">
            <div className="flex gap-8">
              {["Ward", "Room", "Bed"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)} // Use handleTabClick for navigation
                  className={`pb-4 px-2 text-sm font-medium relative ${
                    activeTab === tab.toLowerCase()
                      ? "text-teal-600 border-b-2 border-teal-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Search and Actions */}
          <div className="flex gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-5 h-5" />
              Filter
            </button>
            <BedMasterModel />
          </div>

          {/* Render Content Based on Active Tab */}
          {renderContent()}
        </div>
      </div>
    </>
  )
}

export default AddBed