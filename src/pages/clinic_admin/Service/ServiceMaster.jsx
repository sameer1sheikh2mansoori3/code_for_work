import React, { useState } from 'react';
import { Search, Filter, Edit2, ChevronLeft, ChevronRight } from 'lucide-react';

function ServiceMaster() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    {
      name: 'Sample Category 1',
      subCategories: ['Sub category 1', 'Sub category 2', 'S Category'],
      serviceTypes: ['In patient service', 'Out patient service']
    },
    {
        name: 'Sample Category 2',
        subCategories: ['Sub category 1', 'Sub category 2', 'S Category'],
        serviceTypes: ['In patient service', 'Out patient service']
      },
      {
        name: 'Sample Category 3',  
        subCategories: ['Sub category 1', 'Sub category 2', 'S Category'],
        serviceTypes: [ 'Out patient service']
      },
      {
        name: 'Sample Category 4',
        subCategories: ['Sub category 1', 'Sub category 2', 'S Category'],
        serviceTypes: ['In patient service', 'Out patient service']
      },
      {
        name: 'Sample Category 1',
        subCategories: ['Sub category 1', 'Sub category 2', 'S Category'],
        serviceTypes: ['In patient service', 'Out patient service']
      },
    // Add more categories as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-800">Service Master</h1>
          <div className="mt-4 flex space-x-4">
            <button className="px-4 py-2 text-teal-600 border-b-2 border-teal-600">Services</button>
            <button className="px-4 py-2 text-gray-500">Service category</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex-1 max-w-xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            <button className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700">
              Add category
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sub Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {categories.map((category, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {category.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <div className="flex flex-wrap gap-1">
                      {category.subCategories.map((sub, idx) => (
                        <span key={idx} className="text-gray-600">
                          {sub}{idx < category.subCategories.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                      {category.subCategories.length > 2 && (
                        <button className="text-teal-600 hover:text-teal-700">
                          2 more
                        </button>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {category.serviceTypes.map((type, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-full text-xs
                            ${type === 'In patient service' 
                              ? 'bg-orange-100 text-orange-800' 
                              : 'bg-gray-100 text-gray-800'}`}
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-teal-600 hover:text-teal-700">
                      <Edit2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="px-6 py-4 flex items-center justify-between border-t">
            <div className="text-sm text-gray-700">
              Page {currentPage} of 30
            </div>
            <div className="flex space-x-2">
              <button 
                className="p-2 border rounded hover:bg-gray-50"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              {[1, 2, 3, 4, 5, 6].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 rounded ${
                    currentPage === page
                      ? 'bg-teal-600 text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button 
                className="p-2 border rounded hover:bg-gray-50"
                onClick={() => setCurrentPage(Math.min(30, currentPage + 1))}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ServiceMaster;