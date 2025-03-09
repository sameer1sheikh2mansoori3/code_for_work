'use client';

import { useState } from 'react';
import { Search, Filter, Plus, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate

const doctorsData = [
  { name: 'Dr. John Doe', email: 'john@example.com', department: 'Cardiology', timings: '10 AM - 4 PM', consultationFee: '$50', registrationFee: '$10', emergencyFee: '$20', validityDays: '30' },
  { name: 'Dr. Jane Smith', email: 'jane@example.com', department: 'Neurology', timings: '9 AM - 3 PM', consultationFee: '$60', registrationFee: '$15', emergencyFee: '$25', validityDays: '60' }
];

export default function DoctorManagement() {
  const navigate = useNavigate(); // Use useNavigate
  const location = useLocation(); // Use useLocation
  const [doctors, setDoctors] = useState(doctorsData);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newDoctor, setNewDoctor] = useState({
    name: '', email: '', department: '', timings: '', consultationFee: '', registrationFee: '', emergencyFee: '', validityDays: ''
  });

  const filteredDoctors = doctors.filter(doctor => doctor.name.toLowerCase().includes(search.toLowerCase()));

  const handleAddDoctor = () => {
    setDoctors([...doctors, newDoctor]);
    setShowModal(false);
    setNewDoctor({ name: '', email: '', department: '', timings: '', consultationFee: '', registrationFee: '', emergencyFee: '', validityDays: '' });
  };

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Search & Filter */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center border rounded-lg px-3 py-1 w-72">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 w-full outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 border px-4 py-2 rounded-lg bg-gray-200">
          <Filter className="w-5 h-5" /> Filter
        </button>
        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg flex items-center gap-2" onClick={() => setShowModal(true)}>
          <Plus className="w-5 h-5" /> Add Doctor
        </button>
      </div>

     {/* Table */}
<div className="overflow-x-auto">
  <table className="w-full rounded-md">
    <thead>
      <tr className="bg-teal-100">
        {['Name', 'Email', 'Department', 'Timings', 'Consultation Fee', 'Validity Days'].map((header) => (
          <th key={header} className="border p-2 text-left">{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {filteredDoctors.map((doctor, index) => (
        <tr key={index} className="border">
          {Object.entries(doctor).map(([key, value], i) => {
            // Skip the columns you want to remove
            if (key === 'registrationFee' || key === 'emergencyFee') return null;
            return (
              <td key={i} className="border p-2">{value}</td>
            );
          })}
        </tr>
      ))}
    </tbody>
  </table>
</div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Add Doctor</h2>
              <X className="cursor-pointer" onClick={() => setShowModal(false)} />
            </div>
            <div className="space-y-3">
              {Object.keys(newDoctor).map((field, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={field.replace(/([A-Z])/g, ' $1')}
                  className="w-full border p-2 rounded-md"
                  value={newDoctor[field]}
                  onChange={(e) => setNewDoctor({ ...newDoctor, [field]: e.target.value })}
                />
              ))}
            </div>
            <button className="bg-teal-600 text-white w-full mt-4 py-2 rounded-lg" onClick={handleAddDoctor}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
}
