import PageTransition from '@/components/PageTransition'
import Gallery from '@/components/Gallery'

export default function GalleryPage() {
  return (
    <PageTransition>
      
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            SSDC Training Gallery
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-light">
            Browse through videos and photographs illustrating actual vocational training sessions, student batches, and practical workshops.
          </p>
        </div>
      </div>

      {/* Main Gallery Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Classroom & Workshop Activities
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
              Click on any photograph or video to play or view in fullscreen. Our gallery displays real-time footage of piping structures, computer labs, and certificate convocations.
            </p>
          </div>

          <Gallery />

        </div>
      </div>
      
    </PageTransition>
  )
}
