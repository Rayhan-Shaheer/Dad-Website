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
    { name: 'Student Admission', path: '/admission' },
    { name: 'Center Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ]

  const activeStyle = "text-primary border-b-2 border-primary font-bold"
  const inactiveStyle = "text-gray-700 hover:text-primary hover:border-b-2 hover:border-primary/50 transition-all duration-200"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-305 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3.5 lg:py-4.5'
          : 'bg-white/80 backdrop-blur-sm py-6 lg:py-7.5 border-b border-gray-150'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section - Noticeably Larger */}
          <Link to="/" className="flex items-center space-x-3.5 group" onClick={() => setIsOpen(false)}>
            <div className="bg-primary/10 p-2.5 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
              <GraduationCap className="h-8.5 w-8.5 lg:h-10 lg:w-10 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg lg:text-xl xl:text-2xl leading-none text-text-dark tracking-tight">
                SAHAR SKILL
              </span>
              <span className="text-[11px] lg:text-xs font-bold text-primary tracking-widest uppercase mt-1">
                Development Center
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Larger Text */}
          <nav className="hidden xl:flex items-center space-x-6 xl:space-x-7">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `py-2 text-xs lg:text-sm xl:text-[15px] uppercase tracking-wider font-semibold ${
                    isActive ? activeStyle : inactiveStyle
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Action / Inquiry Button - Larger Layout */}
          <div className="hidden xl:block">
            <button
              onClick={() => navigate('/admission')}
              className="inline-flex items-center justify-center space-x-2.5 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <ClipboardList className="h-4.5 w-4.5" />
              <span>Admission Inquiry</span>
            </button>
          </div>

          {/* Mobile & Tablet Menu Toggle */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 text-gray-700 hover:text-primary transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
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
            className="xl:hidden bg-white border-b border-gray-100 shadow-inner overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2.5">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-base font-semibold tracking-wide transition-colors ${
                      isActive
                        ? 'bg-primary/10 text-primary'
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
                    navigate('/admission')
                  }}
                  className="w-full inline-flex items-center justify-center space-x-2.5 bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-bold shadow-md shadow-primary/20 transition-all cursor-pointer text-base"
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
