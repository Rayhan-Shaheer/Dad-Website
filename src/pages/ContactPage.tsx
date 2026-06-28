import PageTransition from '@/components/PageTransition'
import Contact from '@/components/Contact'

export default function ContactPage() {
  return (
    <PageTransition>
      
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Contact Us
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-light">
            Find center location coordinates, phone numbers, and interactive maps to navigate to our Mysore institute.
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

    </PageTransition>
  )
}
