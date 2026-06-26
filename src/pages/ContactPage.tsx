import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import PageTransition from '@/components/PageTransition'
import Contact from '@/components/Contact'
import InquiryForm from '@/components/InquiryForm'
import { ClipboardList } from 'lucide-react'

export default function ContactPage() {
  const location = useLocation()
  const inquiryFormRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if redirect state asks to scroll to inquiry form
    if (location.state && (location.state as any).scrollInquiry) {
      setTimeout(() => {
        inquiryFormRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 300)
      
      // Clean up window history state to prevent scrolling back on manual refresh
      window.history.replaceState({}, document.title)
    }
  }, [location])

  return (
    <PageTransition>
      
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Contact & Admissions
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-light">
            Find center location coordinates, phone numbers, or submit the Student Admission Inquiry Form directly.
          </p>
        </div>
      </div>

      {/* Main Info Section (Map and Details) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Get in Touch
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
              If you live around Mysore, you are welcome to visit our center directly. You can also reach out via email or phone.
            </p>
          </div>

          <Contact />

        </div>
      </section>

      {/* Student Inquiry Form Section */}
      <section ref={inquiryFormRef} className="py-20 bg-slate-50 border-t border-slate-100Scroll scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <ClipboardList className="h-4 w-4" />
              <span>Student Registry</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Admission Inquiry Form
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
              Fill out the form below with your personal details, academic qualifications, and upload scans of your photo and signature.
            </p>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <InquiryForm />

        </div>
      </section>

    </PageTransition>
  )
}
