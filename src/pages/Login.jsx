

import { useState } from 'react'
import { Eye, EyeOff, User, Lock } from 'lucide-react'
import  {useAuthStore} from '../store/authStore'
export default function Component() {
  const {login} = useAuthStore()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  })

  const handleSubmit = async(e) => {
    e.preventDefault()
    alert(formData.name)
    await login(formData.name, formData.password);
    alert("we are having")
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-[#F8F5FF] flex items-center justify-center p-4">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-3xl">
        <h1 className="mb-2 text-2xl font-semibold text-center">
          Hospital <span className="text-teal-600">Management System</span>
        </h1>
        <h2 className="mb-8 text-xl text-center text-gray-600">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-gray-600">
              User Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2">
                <User className="w-5 h-5" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full py-2 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-gray-600">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2">
                <Lock className="w-5 h-5" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full py-2 pl-10 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-gray-400 -translate-y-1/2 right-3 top-1/2 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div className="text-right">
            <a href="#" className="text-sm text-teal-600 hover:text-teal-700">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white transition-colors bg-teal-600 rounded-lg hover:bg-teal-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}