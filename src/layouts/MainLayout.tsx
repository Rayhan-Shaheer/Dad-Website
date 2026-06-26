import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-text-dark font-sans selection:bg-primary/20 selection:text-primary">
      {/* Sticky Navigation Bar */}
      <Navbar />
      
      {/* Main Page Content */}
      <main className="flex-grow pt-20 lg:pt-24 overflow-hidden">
        <Outlet />
      </main>
      
      {/* Footer Section */}
      <Footer />
    </div>
  )
}
