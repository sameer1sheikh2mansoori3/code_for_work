import React from 'react'

const PatientMaster = () => {
    const [activeTab, setActiveTab] = useState("Out Patient")
    const [currentPage, setCurrentPage] = useState(1)
    const patients = [
        { mrn: "12345432343", name: "Arrav Sharma", age: "25Y", gender: "Male", phone: "1234567890" },
        { mrn: "5678623523", name: "Priya Desai", age: "54Y", gender: "Male", phone: "1234567890" },
        { mrn: "9876543210", name: "Rohan Patel", age: "98Y", gender: "Female", phone: "1234567890" },
        { mrn: "1122334455", name: "Ananya Gupta", age: "32Y", gender: "Male", phone: "1234567890" },
        { mrn: "7777777777", name: "Vikram Singh", age: "76Y", gender: "Male", phone: "1234567890" },
        { mrn: "8888888888", name: "Nisha Mehta", age: "44Y", gender: "Male", phone: "1234567890" },
        { mrn: "0000000000", name: "Sonia Choudhary", age: "21Y", gender: "Female", phone: "1234567890" },
        { mrn: "1111111111", name: "Aarav Kumar", age: "63Y", gender: "Male", phone: "1234567890" },
        { mrn: "3333333333", name: "Jiya Verma", age: "89Y", gender: "Male", phone: "1234567890" },
        { mrn: "4444444444", name: "Rajat Kapoor", age: "70Y", gender: "Female", phone: "1234567890" },
        { mrn: "6666666666", name: "Ishaan Khanna", age: "12Y", gender: "Male", phone: "1234567890" },
        { mrn: "7777777777", name: "Mira Shah", age: "57Y", gender: "Male", phone: "1234567890" },
        { mrn: "9999999999", name: "Aisha Bhatia", age: "30Y", gender: "Male", phone: "1234567890" },
        { mrn: "0000000000", name: "Pooja Rao", age: "68Y", gender: "Female", phone: "1234567890" },
      ]
  
   

 

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Patient Master</h1>
          <button className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors">
            New patient registration
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <div className="flex gap-8">
            {["Out Patient", "In Patient"].map((tab) => (
              <button
                key={tab}
                className={`pb-4 px-1 ${
                  activeTab === tab
                    ? "border-b-2 border-teal-600 text-teal-600 font-medium"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Search Section */}
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="MRN"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
            <Filter className="h-5 w-5" />
            Filter
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#E5F9F6]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">MRN</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">NAME</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">AGE</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">GENDER</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">PHONE NUMBER</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {patients.map((patient, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 text-sm text-gray-700">{patient.mrn}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{patient.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{patient.age}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{patient.gender}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{patient.phone}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-3">
                      <button className="text-teal-600 hover:text-teal-700">Appointment</button>
                      <span className="text-gray-300">|</span>
                      <button className="text-teal-600 hover:text-teal-700">Admission</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end mt-6">
          <nav className="flex items-center gap-1">
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {[1, 2, 3, 4, 5, 6].map((page) => (
              <button
                key={page}
                className={`px-3 py-1 rounded-lg ${
                  currentPage === page ? "bg-teal-600 text-white" : "text-gray-500 hover:bg-gray-100"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default PatientMaster



