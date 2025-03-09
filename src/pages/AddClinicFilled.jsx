'use client'

import { useState } from 'react';
import { ChevronDown, Calendar, Globe, X, Check } from 'lucide-react';

export default function AddClinic() {

const [formData, setFormData] = useState({
  clinicName: 'Alpha Clinic',
  email: 'alpha@mail.com',
  phone: '1234567890',
  address: 'abc street, xyz road',
  city: 'Pune',
  state: 'Maharashtra',
  pinCode: '111045',
  subdomain: 'sample.clinic.com',
  modulePermissions: ['Reception + Lab', 'Reception + Radiology', 'Pharmacy + Inventory'],
  activateOn: '2024-12-12',
  usersAllowed: 100,
  salesName: 'Alex Mathew',
  salesEmail: 'alex@mail.com',
  label1: 'Placeholder',
  label2: 'Placeholder'
});

const [isDomainAvailable, setIsDomainAvailable] = useState(true);

const moduleOptions = [
  'Reception + Lab',
  'Reception + Radiology',
  'Pharmacy + Inventory',
  'Billing',
  'Reports'
];

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));
};

const handleModuleToggle = (module) => {
  setFormData((prev) => ({
    ...prev,
    modulePermissions: prev.modulePermissions.includes(module)
      ? prev.modulePermissions.filter((m) => m !== module)
      : [...prev.modulePermissions, module]
  }));
};

const removeModule = (moduleToRemove) => {
  setFormData((prev) => ({
    ...prev,
    modulePermissions: prev.modulePermissions.filter((module) => module !== moduleToRemove)
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted:', formData);
};

return (
  <div className="min-h-screen bg-gray-50 p-6">
   

    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Details */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-sm font-medium text-gray-600 mb-4">BASIC DETAILS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label htmlFor="clinicName" className="block text-sm mb-1">
              Clinic Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="clinicName"
              name="clinicName"
              value={formData.clinicName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm mb-1">State</label>
            <div className="relative">
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="Maharashtra">Maharashtra</option>
                <option value="Delhi">Delhi</option>
                <option value="Karnataka">Karnataka</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">Pin code</label>
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
      </div>

      {/* Subdomain & Clinic Set Up */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-sm font-medium text-gray-600 mb-4">SUBDOMAIN &amp; CLINIC SET UP</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label htmlFor="subdomain" className="block text-sm mb-1">
              Subdomain <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                id="subdomain"
                name="subdomain"
                value={formData.subdomain}
                onChange={(e) => {
                  handleInputChange(e);
                  setIsDomainAvailable(e.target.value === 'sample.clinic.com'); // Check domain availability
                }}
                className={`w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                  isDomainAvailable ? 'border-green-500' : 'border-gray-300'
                }`}
                required
              />
              {isDomainAvailable ? (
                <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
              ) : (
                <X className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
              )}
              <span className="text-xs text-gray-500 mt-1 block">
                {isDomainAvailable ? 'Domain available' : 'Domain not available'}
              </span>
            </div>
          </div>
          <div className="lg:col-span-2">
            <label htmlFor="modulePermissions" className="block text-sm mb-1">
              Module Permissions <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {moduleOptions.map((module) => (
                <button
                  key={module}
                  type="button"
                  onClick={() => handleModuleToggle(module)}
                  className={`px-2 py-1 rounded-md text-sm font-medium border focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                    formData.modulePermissions.includes(module)
                      ? 'bg-teal-100 border-teal-500 text-teal-700'
                      : 'border-gray-300 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {module} {formData.modulePermissions.includes(module) && <X className="w-3 h-3 ml-1 inline-block" />}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">
              Users allowed <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="usersAllowed"
              value={formData.usersAllowed}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Activate on</label>
            <div className="relative">
              <input
                type="date"
                name="activateOn"
                value={formData.activateOn}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Sales By */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-sm font-medium text-gray-600 mb-4">SALES BY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="salesName"
              value={formData.salesName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="salesEmail"
              value={formData.salesEmail}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
      </div>

      {/* Configure Global Settings */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-sm font-medium text-gray-600 mb-4">CONFIGURE GLOBAL SETTINGS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Label</label>
            <input
              type="text"
              name="label1"
              placeholder="Placeholder"
              value={formData.label1}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Label</label>
            <input
              type="text"
              name="label2"
              placeholder="Placeholder"
              value={formData.label2}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t">
        <p className="text-sm text-orange-600">
          Note: Only <span className="font-medium">Address, Activation Date,</span> and{' '}
          <span className="font-medium">Deactivation Date</span> can be edited after submission.
        </p>
        <div className="flex gap-4">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
            onClick={() => window.history.back()}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-md"
          >
            Add Clinic
          </button>
        </div>
      </div>
    </form>
  </div>
);
}