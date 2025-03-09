import React, { useState } from 'react'
import { Search, Filter, Link } from 'lucide-react'

const tariffData = [
  { name: "Insurance tariff", description: "This is a sample description", status: "Active" },
  { name: "Corporate tariff", description: "Dummy description as placeholder", status: "Inactive" },
  { name: "Hospital tariff", description: "This is a sample description", status: "Inactive" },
  { name: "Emergency tariff", description: "Dummy description as placeholder", status: "Active" },
  { name: "Dental tariff", description: "Dummy description as placeholder", status: "Active" },
  { name: "Vision tariff", description: "This is a sample description", status: "Inactive" },
  { name: "Prescription tariff", description: "Dummy description as placeholder", status: "Active" },
  { name: "Investment tariff", description: "This is a sample description", status: "Active" },
  { name: "Personal tariff", description: "This is a sample description", status: "Inactive" },
  { name: "Life insurance tariff", description: "Dummy description as placeholder", status: "Active" },
  { name: "Health insurance tariff", description: "This is a sample description", status: "Inactive" }
]

export default function TariffMaster() {
  const [activeTab, setActiveTab] = useState('category')
  const [searchQuery, setSearchQuery] = useState('')

  const tabs = [
    { id: 'class', label: 'Tariff class' },
    { id: 'category', label: 'Tariff category' },
    { id: 'rates', label: 'Tariff rates' }
  ]

  const filteredTariffs = tariffData.filter(tariff => 
    tariff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tariff.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Tariff Master</h1>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex gap-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 px-2 text-sm font-medium relative ${
                activeTab === tab.id
                  ? 'text-teal-600 border-b-2 border-teal-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search and Actions */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter className="w-5 h-5" />
          Filter
        </button>
        <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
          Add category
        </button>
      </div>

      {/* Table */}
      <div className="bg-[#F0FFFF] rounded-t-lg">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">NAME</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">DESCRIPTION</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">STATUS</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTariffs.map((tariff, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{tariff.name}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{tariff.description}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                    tariff.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {tariff.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-teal-600 hover:text-teal-800">
                    <Link className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}