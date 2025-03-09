
import { useState } from 'react'
import { ChevronDown, Calendar, Globe } from 'lucide-react'
import { useAuthStore } from '../store/authStore'

export default function AddClinic() {
  const {addClinic} = useAuthStore()
  const [formData, setFormData] = useState({
    clinicName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    subdomain: '',
    modulePermissions: '',
    activateOn: '',
    usersAllowed: '',
    salesName: '',
    salesEmail: '',
    label1: '',
    label2: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

  }
  const payload = {
    clinicName: formData.clinicName,
    email: formData.email,
    phone_number: formData.phone, // Map "phone" to "phone_number"
    address: formData.address,
    city: formData.city,
    state: formData.state,
    pinCode: formData.pinCode,
    subdomain: formData.subdomain,
    modulePermissions: ["samer"], // Convert string to array
    activationDate: formData.activateOn, // Map "activateOn" to "activationDate"
    usersAllowed: formData.usersAllowed,
    salesBy_name: formData.salesName, // Map "salesName" to "salesBy_name"
    salesBy_email: formData.salesEmail, // Map "salesEmail" to "salesBy_email"
    globalLabel1: formData.label1, // Map "label1" to "globalLabel1"
    globalLabel2: formData.label2, // Map "label2" to "globalLabel2"
  };
  const handleSubmit = async(e) => {
    e.preventDefault()
    await addClinic(payload)
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="mb-6 text-2xl font-semibold">Add Clinic</h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Details */}
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="mb-4 text-sm font-medium text-gray-600">BASIC DETAILS</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="block mb-1 text-sm">
                Clinic Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="clinicName"
                placeholder="Enter clinic name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.clinicName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Eg. mail@mail.com"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="0000000000"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter address"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">State</label>
              <div className="relative">
                <select
                  name="state"
                  className="w-full px-3 py-2 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={formData.state}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="state1">State 1</option>
                  <option value="state2">State 2</option>
                </select>
                <ChevronDown className="absolute w-4 h-4 text-gray-500 -translate-y-1/2 right-3 top-1/2" />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm">Pin code</label>
              <input
                type="text"
                name="pinCode"
                placeholder="Enter"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.pinCode}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Subdomain & Clinic Set Up */}
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="mb-4 text-sm font-medium text-gray-600">SUBDOMAIN & CLINIC SET UP</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="block mb-1 text-sm">
                Subdomain <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Globe className="absolute w-4 h-4 text-gray-500 -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="text"
                  name="subdomain"
                  placeholder="Eg. sample.clinic.com"
                  className="w-full py-2 pl-10 pr-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={formData.subdomain}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm">
                Module Permissions <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="modulePermissions"
                  className="w-full px-3 py-2 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={formData.modulePermissions}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="module1">Module 1</option>
                  <option value="module2">Module 2</option>
                </select>
                <ChevronDown className="absolute w-4 h-4 text-gray-500 -translate-y-1/2 right-3 top-1/2" />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm">Activate on</label>
              <div className="relative">
                <input
                  type="date"
                  name="activateOn"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={formData.activateOn}
                  onChange={handleInputChange}
                />
                <Calendar className="absolute w-4 h-4 text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2" />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm">
                Users allowed <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="usersAllowed"
                placeholder="No."
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.usersAllowed}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Sales By */}
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="mb-4 text-sm font-medium text-gray-600">SALES BY</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block mb-1 text-sm">Name</label>
              <input
                type="text"
                name="salesName"
                placeholder="Enter name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.salesName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                name="salesEmail"
                placeholder="Eg. mail@mail.com"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.salesEmail}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Configure Global Settings */}
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="mb-4 text-sm font-medium text-gray-600">CONFIGURE GLOBAL SETTINGS</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block mb-1 text-sm">Label</label>
              <input
                type="text"
                name="label1"
                placeholder="Placeholder"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.label1}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Label</label>
              <input
                type="text"
                name="label2"
                placeholder="Placeholder"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.label2}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t">
          <p className="text-sm text-gray-500">
            Note: Only <span className="font-medium">Address, Activation Date,</span> and{' '}
            <span className="font-medium">Deactivation Date</span> can be edited after submission.
          </p>
          <div className="flex gap-4">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
              onClick={() => window.history.back()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700"
            >
              Add Clinic
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}