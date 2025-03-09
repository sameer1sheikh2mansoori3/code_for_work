import DoctorsTable from "../../components/DoctorTable"
import SearchHeader from "../../components/SearchHeader"

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-2xl font-bold text-gray-900">Doctors Management</h1>
        <SearchHeader />
        <DoctorsTable />
      </div>
    </div>
  )
}
