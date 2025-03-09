import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Component() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-white text-black">
     

      {/* Search and Controls */}
      <div className="p-4 h-[76vh]">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</div>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full bg-white/10 border-gray-700 text-white rounded-md p-2 border focus:outline-none focus:ring-1 focus:ring-[#00A99D]"
            />
          </div>
          <button className="flex items-center gap-2 border-gray-700 text-black border rounded-md px-4 py-2 hover:bg-white/10 transition-colors">
            Filter
          </button>
         {/* here we are adding routing */}
         <button 
  onClick={() => navigate('/addClinics')
  
    
  }
  className="flex items-center gap-2 bg-[#00A99D] hover:bg-[#006B5D] text-white rounded-md px-4 py-2 transition-colors"
>
  Add Clinic
</button>
        </div>

        {/* Table */}
        <div className="bg-white/5 rounded-lg overflow-hidden">
          <div className="grid grid-cols-6 gap-4 p-4 border-b bg-[#00A99D] text-black border-gray-700 font-medium text-sm">
            <div>CLINIC NAME</div>
            <div>ADDRESS</div>
            <div>EMAIL</div>
            <div>SALES BY</div>
            <div>USER ALLOWED</div>
            <div>STATUS</div>
          </div>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-20 h-20 mb-4">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GjryChJIvya5iYG7A9Ct6UDWm9sY6d.png" 
                alt="No clinics" 
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-400 mb-4">No clinic added</p>
            <button 
              className="bg-[#00A99D] hover:bg-[#006B5D] text-white rounded-md px-4 py-2 transition-colors"
              onClick={() => navigate('/addClinics')}
            >
              Add Clinic
            </button>
          </div>
        </div>

        
      </div>
      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm">
          <div className="text-gray-400">
            Showing 0 of 0 entries
          </div>
          <div className="flex items-center gap-2">
            <button 
              className="w-8 h-8 border-gray-700 border rounded-md flex items-center justify-center hover:bg-white/10 disabled:opacity-50 disabled:hover:bg-transparent"
              disabled
            >
              ←
            </button>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`w-8 h-8 rounded-md ${
                    currentPage === page 
                      ? "bg-[#00A99D] hover:bg-[#006B5D]" 
                      : "border-gray-700 border hover:bg-white/10"
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
            </div>
            <button 
              className="w-8 h-8 border-gray-700 border rounded-md flex items-center justify-center hover:bg-white/10"
            >
              →
            </button>
          </div>
        </div>
    </div>
  )
}