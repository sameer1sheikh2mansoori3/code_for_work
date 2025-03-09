import React from 'react'
import { Plus } from 'lucide-react'

export default function TemplateBuilder() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-lg font-medium">Sample template name</h1>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-md">
                Discharge Summary
              </span>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                Cancel
              </button>
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
                Publish
              </button>
            </div>
          </div>
        </header>

        {/* Template Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            {/* Template Header */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
              <div className="border-2 border-dashed border-gray-300 rounded p-4 text-gray-400">
                LOGO
              </div>
              <h2 className="text-xl font-medium">Sample template name</h2>
              <div className="border-2 border-dashed border-gray-300 rounded p-4 text-gray-400">
                DATE & TIME STAMP
              </div>
            </div>

            {/* Template Sections */}
            <div className="space-y-8">
              {['SUMMARY', 'ADMISSION DETAILS', 'PATIENT DETAILS'].map((section, index) => (
                <div key={index}>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">{section}</h3>
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-6">
                    <button className="flex items-center gap-2 text-teal-600 hover:text-teal-700">
                      <Plus className="w-5 h-5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}