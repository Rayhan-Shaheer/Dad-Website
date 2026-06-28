import PageTransition from '@/components/PageTransition'
import CourseGrid from '@/components/CourseGrid'
import { Info, HelpCircle, CheckSquare } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function CoursesPage() {
  const navigate = useNavigate()

  const qualifications = [
    'Original academic certificates (BE, Diploma, ITI, or equivalents) for validation.',
    'Passport-size photographs (to be uploaded in the Admission Inquiry form).',
    'Scanned signature copy.',
    'Valid ID proof (Aadhaar Card, Driver License, or Passport).',
  ]

  return (
    <PageTransition>
      
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Vocational & Skill Programs
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-light">
            Explore our specialized categories designed to bridge the gap between academic education and industry employment.
          </p>
        </div>
      </div>

      {/* Main Course Grid Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Course Categories Offered
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
              We offer structured vocational, technical, and computer application training programs. Click "Enquire Now" on any card to request syllabus or fee details.
            </p>
          </div>

          <CourseGrid />

          {/* Guidelines & Registration details */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center space-x-2 text-primary">
                <Info className="h-5 w-5 shrink-0" />
                <h3 className="font-bold text-slate-800 text-base sm:text-lg">Admission Guidelines</h3>
              </div>
              
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Candidates applying for Technical, ITI, or NDT Level II certifications are required to submit their educational qualifications during the inquiry process. Registration is approved under the ISDM guidelines, and certificates are awarded upon successful completion of assessments.
              </p>

              <div className="space-y-3.5">
                <h4 className="font-semibold text-slate-700 text-xs uppercase tracking-wider">Required Documentation:</h4>
                <ul className="space-y-2.5">
                  {qualifications.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-650">
                      <CheckSquare className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-5 text-center">
              <HelpCircle className="h-10 w-10 text-accent mx-auto" />
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Have Questions?</h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal font-light">
                  If you need details about course fees, batch timings, or hostel facilities near the Mysuru center, speak directly with our counselor.
                </p>
              </div>
              <button
                onClick={() => navigate('/admission')}
                className="w-full bg-primary hover:bg-primary-hover text-white py-2.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md shadow-primary/10 transition-all cursor-pointer"
              >
                Inquire Now
              </button>
            </div>

          </div>

        </div>
      </div>
      
    </PageTransition>
  )
}
