import React from "react";



export default function AddCategory() {
  return (
    <div id="webcrumbs"> 
            	<div className="w-[550px] bg-white rounded-2xl p-6 shadow-lg">
    	  <div className="flex items-center justify-between mb-6">
    	    <div className="flex items-center gap-2">
    	      <div className="w-8 h-8 bg-cyan-50 rounded-lg flex items-center justify-center">
    	        <span className="material-symbols-outlined text-cyan-500">add</span>
    	      </div>
    	      <h2 className="text-xl font-semibold">Add service category</h2>
    	    </div>
    	    <button className="hover:bg-gray-100 p-1 rounded-lg transition-colors">
    	      <span className="material-symbols-outlined">close</span>
    	    </button>
    	  </div>
    	
    	  <div className="space-y-6">
    	    <div>
    	      <label className="block mb-2">
    	        Service type <span className="text-red-500">*</span>
    	      </label>
    	      <div className="flex gap-4">
    	        <label className="flex items-center gap-2">
    	          <input type="radio" name="service-type" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500"/>
    	          <span>OP</span>
    	        </label>
    	        <label className="flex items-center gap-2">
    	          <input type="radio" name="service-type" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500"/>
    	          <span>IP</span>
    	        </label>
    	        <label className="flex items-center gap-2">
    	          <input type="radio" name="service-type" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500"/>
    	          <span>Both</span>
    	        </label>
    	      </div>
    	    </div>
    	
    	    <div>
    	      <label className="block mb-2">
    	        Category name <span className="text-red-500">*</span>
    	      </label>
    	      <input type="text" placeholder="Enter" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"/>
    	    </div>
    	
    	    <div>
    	      <label className="block mb-2">Sub category</label>
    	      <div className="flex gap-2">
    	        <input type="text" placeholder="Enter" className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"/>
    	        <button className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">Add</button>
    	      </div>
    	    </div>
    	
    	    <div>
    	      <h3 className="text-gray-500 font-medium mb-4">SUB CATEGORIES</h3>
    	      <div className="bg-gray-50 rounded-lg p-8 flex flex-col items-center justify-center">
    	        <div className="w-16 h-16 mb-4">
    	          <svg className="w-full h-full text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    	            <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    	          </svg>
    	        </div>
    	        <p className="text-gray-600">No sub categories added</p>
    	      </div>
    	    </div>
    	
    	    <div className="flex items-center gap-4 pt-4">
    	      <button className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">Add</button>
    	      <button className="px-6 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">Cancel</button>
    	      <div className="flex items-center gap-2 text-cyan-600">
    	        <span className="material-symbols-outlined">info</span>
    	        <span>Add at least one sub category to continue</span>
    	      </div>
    	    </div>
    	  </div>
    	</div> 
            </div>
  )
}

