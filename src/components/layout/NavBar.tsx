import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react' 
import logo from '../../assets/images/logo.png'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white  z-50 relative">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-8" />
        <span className="text-xl font-bold">Therapy Nest</span>
      </div>

      <div className="hidden sm:flex gap-6 items-center font-primary text-gray-700 font-bold">
        <Link to="/features" className="hover:text-blue-600">Features</Link>
        <Link to="/pricing" className="hover:text-blue-600">Pricing</Link>
        <Link to="/about-us" className="hover:text-blue-600">About Us</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
        <Link to="/signin">
          <button className="bg-primary text-white rounded-full px-6 py-2 hover:bg-white hover:text-primary border border-primary">
            Sign In
          </button>
        </Link>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden text-gray-700 focus:outline-none hover:bg-primary"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-6 sm:hidden z-40 font-primary text-gray-700 font-bold">
          <Link to="/features" onClick={() => setIsOpen(false)}>Features</Link>
          <Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link to="/about-us" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <Link to="/signin" onClick={() => setIsOpen(false)}>
            <button className="bg-primary text-white rounded-full px-6 py-2 hover:bg-white hover:text-primary border border-primary">
              Sign In
            </button>
          </Link>
        </div>
      )}
    </nav>
  )
}
