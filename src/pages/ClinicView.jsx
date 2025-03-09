


import { useAuthStore } from '../store/authStore';

export default function Component() {
  const { clinicList , getClinicList} = useAuthStore();
  console.log(clinicList)
  useEffect(() => {
    getClinicList()
  },[])
  return (
    <div className="min-h-screen bg-gray-50">
     
      

      <div className="p-6">
        {/* Clinic Title & Status */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-semibold">Alpha clinic</h2>
            <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
              Activated
            </span>
          </div>
          <div className="flex gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <span>alpha@mail.com</span>
              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
            </div>
            <div className="flex items-center gap-2">
              <span>1234567890</span>
              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
            </div>
            <div className="flex items-center gap-2">
              <span>sample.clinic.com</span>
              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
            </div>
            <span>Alex Mathew</span>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h3 className="text-sm font-medium text-gray-600 mb-4">ADDRESS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm mb-1">Address</label>
              <input
                type="text"
                value="abc street, xyz road"
                className="w-full px-3 py-2 border rounded-md"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm mb-1">City</label>
              <input
                type="text"
                value="Pune"
                className="w-full px-3 py-2 border rounded-md"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm mb-1">State</label>
              <input
                type="text"
                value="Maharashtra"
                className="w-full px-3 py-2 border rounded-md"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Pin Code</label>
              <input
                type="text"
                value="111045"
                className="w-full px-3 py-2 border rounded-md"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Clinic Setup Section */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h3 className="text-sm font-medium text-gray-600 mb-4">CLINIC SETUP</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm mb-1">Module Permissions</label>
              <div className="text-sm text-[#006B5D]">
                Reception + Lap, Reception + Pharmacy +1
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Activation Date</label>
              <input
                type="text"
                value="12/12/2024"
                className="w-full px-3 py-2 border rounded-md"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Deactivation date</label>
              <input
                type="text"
                value="12/12/2025"
                className="w-full px-3 py-2 border rounded-md"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Users Allowed</label>
              <input
                type="text"
                value="100"
                className="w-full px-3 py-2 border rounded-md"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Configure Global Settings Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-medium text-gray-600 mb-4">
            CONFIGURE GLOBAL SETTINGS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Label</label>
              <input
                type="text"
                placeholder="Placeholder"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Label</label>
              <input
                type="text"
                placeholder="Placeholder"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}