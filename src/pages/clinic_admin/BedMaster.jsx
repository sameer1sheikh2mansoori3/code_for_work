// "use client"

// import { useState } from "react"
// import {
//   Search,
//   Filter,
//   Users,
//   Stethoscope,
//   Clipboard,
//   Package,
//   FileText,
//   BedDouble,
//   FileSpreadsheet,
//   Settings,
//   LogOut,
//   ChevronLeft,
//   ChevronRight,
//   ListCollapseIcon as CollapseIcon,
// } from "lucide-react"
// import BedMasterModel from "./Add_Bed_Model"
// import { useNavigate } from "react-router-dom"
// import AddBed from "../../components/AddBed"

// // Add dummy data
// const dummyBeds = Array(12)
//   .fill(null)
//   .map((_, i) => ({
//     id: i + 1,
//     bedNumber: "12",
//     ward: "Pediatric ward",
//     roomNo: "12",
//     price: "INR 5000",
//   }))

// export default function BedMaster() {
//   const navigate = useNavigate()
//   const [activeTab, setActiveTab] = useState("bed")
//   const [searchQuery, setSearchQuery] = useState("")
//   const [currentPage, setCurrentPage] = useState(1)
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

//   const sidebarItems = [
//     { icon: Users, label: "User Management" },
//     { icon: Clipboard, label: "Master Data", active: true },
//     { icon: Stethoscope, label: "Services" },
//     { icon: Package, label: "Tariff" },
//     { icon: Users, label: "Doctors" , link: "/doctors" },
//     { icon: FileText, label: "Test Parameters" },
//     { icon: BedDouble, label: "Bed master", highlight: true },
//     { icon: FileSpreadsheet, label: "Referral" },
//     { icon: FileText, label: "Templates" },
//   ]

//   // Generate pagination numbers
//   const paginationNumbers = Array.from({ length: 6 }, (_, i) => i + 1)

//   return (
//     <div className="flex h-screen w-64 border-2 border-red-500 bg-gray-50">
//       {/* Sidebar */}
//       <div
//         className={`${isSidebarCollapsed ? "w-24" : "w-64"} bg-[#004D40] text-white flex flex-col transition-all duration-300`}
//       >
//         {/* Logo Area */}
//         <div className="p-4 border-b border-teal-800">
//           <div className="flex items-center gap-2">
//           <span className="text-2xl font-bold">
//           <button
//             onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
//             className="text-gray-300 hover:text-white"
//           >
//             H
//           </button>
//           </span>
          
            
//             {!isSidebarCollapsed && (
//               <div className="flex items-center justify-between flex-1">
//                 <span className="font-medium">Admin Panel</span>
                
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Navigation Items */}
//         <nav className="flex-1 p-4">
//           <div className="space-y-2">
//             {sidebarItems.map((item, index) => (
//               <button
//                 key={index}
//                 onClick={() => navigate(item.link)}
//                 className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left ${
//                   item.highlight ? "text-teal-400" : "text-gray-300 hover:bg-teal-800"
//                 } ${item.active ? "bg-teal-800" : ""}`}
//               >
//                 <item.icon className="w-5 h-5" />
//                 {!isSidebarCollapsed && <span>{item.label}</span>}
//               </button>
//             ))}
//           </div>
//         </nav>

//         {/* Bottom Actions */}
//         <div className="p-4 border-t border-teal-800">
//           <button className="flex items-center w-full gap-3 px-3 py-2 text-gray-300 rounded-lg hover:bg-teal-800">
//             <Settings className="w-5 h-5" />
//             {!isSidebarCollapsed && <span>Settings</span>}
//           </button>
//           <button className="flex items-center w-full gap-3 px-3 py-2 text-gray-300 rounded-lg hover:bg-teal-800">
//             <LogOut className="w-5 h-5" />
//             {!isSidebarCollapsed && <span>Logout</span>}
//           </button>
//         </div>
//       </div>

      
//     </div>
//   )
// }

"use client"

import { useState } from "react"
import {
  Users,
  Stethoscope,
  Clipboard,
  Package,
  FileText,
  BedDouble,
  FileSpreadsheet,
  Settings,
  LogOut,
} from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"

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

export default function BedMaster() {
  const navigate = useNavigate()
  const location = useLocation() // Get the current location
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const sidebarItems = [
    { icon: Users, label: "User Management", link: "/user-management" },
    { icon: Clipboard, label: "Master Data", link: "/master-data" },
    { icon: Stethoscope, label: "Services", link: "/services" },
    { icon: Package, label: "Tariff", link: "/tariff" },
    { icon: Users, label: "Doctors", link: "/doctors" },
    { icon: FileText, label: "Test Parameters", link: "/test-parameters" },
    { icon: BedDouble, label: "Bed master", link: "/bed-master" },
   
    { icon: FileText, label: "Templates", link: "/templates" },
  ]

  return (
    <div className="flex h-screen w-64 border-2 border-red-500 bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${isSidebarCollapsed ? "w-24" : "w-64"} bg-[#004D40] text-white flex flex-col transition-all duration-300`}
      >
        {/* Logo Area */}
        <div className="p-4 border-b border-teal-800">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              <button
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                className="text-gray-300 hover:text-white"
              >
                H
              </button>
            </span>
            {!isSidebarCollapsed && (
              <div className="flex items-center justify-between flex-1">
                <span className="font-medium">Admin Panel</span>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.link)} // Navigate to the link
                className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left ${
                  location.pathname === item.link // Check if the current path matches the link
                    ? "bg-teal-800 text-white" // Active style
                    : "text-gray-300 hover:bg-teal-800" // Inactive style
                }`}
              >
                <item.icon className="w-5 h-5" />
                {!isSidebarCollapsed && <span>{item.label}</span>}
              </button>
            ))}
          </div>
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-teal-800">
          <button className="flex items-center w-full gap-3 px-3 py-2 text-gray-300 rounded-lg hover:bg-teal-800">
            <Settings className="w-5 h-5" />
            {!isSidebarCollapsed && <span>Settings</span>}
          </button>
          <button className="flex items-center w-full gap-3 px-3 py-2 text-gray-300 rounded-lg hover:bg-teal-800">
            <LogOut className="w-5 h-5" />
            {!isSidebarCollapsed && <span>Logout</span>}
          </button>
        </div>
      </div>
    </div>
  )
}