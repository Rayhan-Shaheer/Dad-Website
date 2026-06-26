import { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { Menu, X, ClipboardList, GraduationCap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  const activeStyle = "text-primary border-b-2 border-primary font-semibold"
  const inactiveStyle = "text-gray-700 hover:text-primary hover:border-b-2 hover:border-primary/50 transition-all duration-200"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2 lg:py-3'
          : 'bg-white/80 backdrop-blur-sm py-4 lg:py-5 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group" onClick={() => setIsOpen(false)}>
            <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg lg:text-xl leading-none text-text-dark tracking-tight">
                SAHAR SKILL
              </span>
              <span className="text-xs font-semibold text-primary tracking-widest uppercase">
                Development Center
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `py-2 text-sm uppercase tracking-wider font-medium ${
                    isActive ? activeStyle : inactiveStyle
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Action / Inquiry Button */}
          <div className="hidden md:block">
            <button
              onClick={() => navigate('/contact', { state: { scrollInquiry: true } })}
              className="inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <ClipboardList className="h-4 w-4" />
              <span>Admission Inquiry</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-primary transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-inner overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-base font-medium tracking-wide transition-colors ${
                      isActive
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="pt-4 px-4">
                <button
                  onClick={() => {
                    setIsOpen(false)
                    navigate('/contact', { state: { scrollInquiry: true } })
                  }}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-semibold shadow-md shadow-primary/20 transition-all cursor-pointer"
                >
                  <ClipboardList className="h-5 w-5" />
                  <span>Admission Inquiry</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
