"use client"

import { useState } from "react"
import { FileText } from "lucide-react"



export default function DoctorsTable() {
  const [doctors, setDoctors] = useState([])

  if (doctors.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 bg-white border border-gray-300 border-dashed rounded-lg">
        <FileText className="w-12 h-12 mb-4 text-gray-400" />
        <h3 className="mb-2 text-lg font-medium text-gray-900">No doctors added</h3>
        <p className="mb-4 text-sm text-gray-500">Get started by adding a new doctor</p>
        <button className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700">
          Add Doctor
        </button>
      </div>
    )
  }

  return (
    <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">Department</th>
              <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">Timings</th>
              <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">Consultation Fee</th>
              <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">Registration Fee</th>
              <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">Emergency Fee</th>
              <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">Validity Days</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">{doctor.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">{doctor.email}</td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">{doctor.department}</td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">{doctor.timings}</td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">${doctor.consultationFee}</td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">${doctor.registrationFee}</td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">${doctor.emergencyFee}</td>
                <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">{doctor.validityDays}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

