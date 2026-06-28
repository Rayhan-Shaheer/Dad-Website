import PageTransition from '@/components/PageTransition'
import BookingForm from '@/components/BookingForm'
import { Building } from 'lucide-react'

export default function BookingPage() {
  return (
    <PageTransition>
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Center Booking
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-light">
            Inquire about booking our 100+ node premier digital assessment center in Mysore.
          </p>
        </div>
      </div>

      {/* Form Container */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Building className="h-4 w-4" />
              <span>B2B Assessment Service</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Assessment Center Booking Inquiry
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
              Fill out the details below, and our facility management team will get back to you within 24 hours with availability and custom pricing.
            </p>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <BookingForm />
        </div>
      </section>
    </PageTransition>
  )
}
