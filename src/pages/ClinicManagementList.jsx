// import { useEffect, useState } from "react";
// import { Search, Filter, X, Check, Clock } from "lucide-react";
// import { useAuthStore } from "../store/authStore";


// const clinics = [
//   {
//     name: "Sunnyvale Health Clinic",
//     address: "123 Mango Lane, Bangalore, Karnataka, 560001, India.",
//     email: "contact@creativeexample.com",
//     salesBy: "Alice Johnson",
//     usersAllowed: 42,
//     status: "Activated",
//   },
//   {
//     name: "Greenwood Family Practice",
//     address: "456 Coconut Avenue, Mumbai, Maharashtra, 400001, India",
//     email: "info@uniqueaddress.com",
//     salesBy: "Michael Smith",
//     usersAllowed: 17,
//     status: "Deactivated",
//   },
// ];

// export default function ClinicManagement() {
//   const { clinicList, getClinicList } = useAuthStore();
//   useEffect(() => {
//     getClinicList()
//   },[])
//   console.log(clinicList)
//   console.log("we are in ClinicManagement")
//   const [showNotification, setShowNotification] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");

//   const StatusBadge = ({ status }) => {
//     const statusStyles = {
//       Activated: "bg-green-100 text-green-800 border-green-200",
//       Deactivated: "bg-red-100 text-red-800 border-red-200",
//       Pending: "bg-gray-100 text-gray-800 border-gray-200",
//     };

//     const StatusIcon = () => {
//       switch (status) {
//         case "Activated":
//           return <Check className="w-4 h-4" />;
//         case "Deactivated":
//           return <X className="w-4 h-4" />;
//         case "Pending":
//           return <Clock className="w-4 h-4" />;
//         default:
//           return null;
//       }
//     };

//     return (
//       <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full border ${statusStyles[status]}`}>
//         <StatusIcon />
//         {status}
//       </span>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white p-6">
//       {showNotification && (
//         <div className="fixed top-4 right-4 flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg shadow-lg">
//           <Check className="w-5 h-5 text-green-600" />
//           <div>
//             <p className="font-medium">New clinic added</p>
//             <p className="text-sm text-green-700">Clinic {"<Name>"} added successfully</p>
//           </div>
//           <button onClick={() => setShowNotification(false)} className="ml-4 text-green-600 hover:text-green-800">
//             <X className="w-5 h-5" />
//           </button>
//         </div>
//       )}

//       <header className="mb-8">
//         <h1 className="text-2xl font-semibold text-gray-900">Clinic Management</h1>
//       </header>

//       <div className="flex gap-4 mb-6">
//         <div className="relative flex-1">
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//           />
//         </div>
//         <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
//           <Filter className="w-5 h-5" />
//           Filter
//         </button>
//         <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
//           Add Clinic
//         </button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse bg-white">
//           <thead className="bg-[#f0ffff]">
//             <tr>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase">Clinic Name</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase">Address</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase">Email</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase">Sales By</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase">User Allowed</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase">Status</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {clinics.map((clinic, index) => (
//               <tr key={index} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 text-sm text-gray-900">{clinic.name}</td>
//                 <td className="px-6 py-4 text-sm text-gray-900">{clinic.address}</td>
//                 <td className="px-6 py-4 text-sm text-teal-600">{clinic.email}</td>
//                 <td className="px-6 py-4 text-sm text-gray-900">{clinic.salesBy}</td>
//                 <td className="px-6 py-4 text-sm text-gray-900">{clinic.usersAllowed}</td>
//                 <td className="px-6 py-4">
//                   <StatusBadge status={clinic.status} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
'use client'

import { useEffect, useState } from "react"
import { Search, Filter, X, Check, Clock } from 'lucide-react'
import { useAuthStore } from "../store/authStore"

// Dummy data for fallback
const dummyClinics = [
  {
    name: "Sunnyvale Health Clinic",
    address: "123 Mango Lane, Bangalore, Karnataka, 560001, India.",
    email: "contact@creativeexample.com",
    salesBy: "Alice Johnson",
    usersAllowed: 42,
    status: "Activated",
  },
  {
    name: "Greenwood Family Practice",
    address: "456 Coconut Avenue, Mumbai, Maharashtra, 400001, India",
    email: "info@uniqueaddress.com",
    salesBy: "Michael Smith",
    usersAllowed: 17,
    status: "Deactivated",
  },
]

export default function ClinicManagement() {
  const { clinicList, getClinicList } = useAuthStore()
  const [showNotification, setShowNotification] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    getClinicList()
  }, [])
console.log(clinicList)
console.log("we are in ClinicManagement")
  // Use clinicList if it has items, otherwise use dummy data
  const displayClinics = clinicList?.length > 0 ? clinicList : dummyClinics

  const StatusBadge = ({ status }) => {
    const statusStyles = {
      Activated: "bg-green-100 text-green-800 border-green-200",
      Deactivated: "bg-red-100 text-red-800 border-red-200",
      Pending: "bg-gray-100 text-gray-800 border-gray-200",
    }

    const StatusIcon = () => {
      switch (status) {
        case "Activated":
          return <Check className="w-4 h-4" />
        case "Deactivated":
          return <X className="w-4 h-4" />
        case "Pending":
          return <Clock className="w-4 h-4" />
        default:
          return null
      }
    }

    return (
      <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full border ${statusStyles[status]}`}>
        <StatusIcon />
        {status}
      </span>
    )
  }

  return (
    <div className="min-h-screen bg-white p-6">
      {showNotification && (
        <div className="fixed top-4 right-4 flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg shadow-lg">
          <Check className="w-5 h-5 text-green-600" />
          <div>
            <p className="font-medium">New clinic added</p>
            <p className="text-sm text-green-700">Clinic {"<Name>"} added successfully</p>
          </div>
          <button onClick={() => setShowNotification(false)} className="ml-4 text-green-600 hover:text-green-800">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Clinic Management</h1>
      </header>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter className="w-5 h-5" />
          Filter
        </button>
        <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
          Add Clinic
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white">
          <thead className="bg-[#f0ffff]">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase">Clinic Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase">Address</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase">Sales By</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase">User Allowed</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {displayClinics.map((clinic, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{clinic.clinicName}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{clinic.address}</td>
                <td className="px-6 py-4 text-sm text-teal-600">{clinic.email}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{clinic.salesBy_name}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{clinic.usersAllowed}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={clinic.state} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}