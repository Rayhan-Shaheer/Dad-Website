import PageTransition from '@/components/PageTransition'
import Mission from '@/components/Mission'
import Vision from '@/components/Vision'
import { Award, Landmark, ShieldCheck, CheckCircle2, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <PageTransition>
      
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            About Our Institute
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-light">
            Learn more about the history, registration, values, and leadership of Sahar Skill Development Center.
          </p>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="py-20 bg-white space-y-20">
        
        {/* Overview & History */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <span>Who We Are</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Empowering Unemployed Youth in Mysore
              </h2>
              
              <div className="space-y-4 text-slate-600 font-light text-sm sm:text-base leading-relaxed">
                <p>
                  SSDC (SAHAR SKILL DEVELOPMENT CENTER) is a non-profit organization dedicated to enhancing vocational skills, nurturing local talent, and shaping the industry leaders of tomorrow. Established through the generous donations and vision of our center founder, <strong>Mr. SYED BASHEER AHAMED</strong>, we are committed to making education accessible and employable.
                </p>
                <p>
                  Our primary center is located in Mysore at Rajivnagar, near Al Badar Circle, opposite the Muslim Co-operative Bank. This prime location is easily accessible by both road and local bus transit, making it convenient for students from across the region to attend.
                </p>
                <p>
                  We focus on training technical and non-technical graduates, helping them develop high-demand technical capabilities through short-term, career-focused courses, and providing them with placement assistance to enter the workforce.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Feature 1 */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-3">
                <div className="bg-primary/10 p-3 rounded-xl text-primary inline-block">
                  <Landmark className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-slate-800 text-sm uppercase">Non-Profit Training</h4>
                <p className="text-xs text-slate-500 leading-normal font-light">
                  Funded through charitable contributions to ensure quality training remains accessible.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-3">
                <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600 inline-block">
                  <Award className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-slate-800 text-sm uppercase">ISDM Franchise</h4>
                <p className="text-xs text-slate-500 leading-normal font-light">
                  Direct affiliation ensures government-approved testing and verified certificates.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-3">
                <div className="bg-amber-50 p-3 rounded-xl text-amber-600 inline-block">
                  <Heart className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-slate-800 text-sm uppercase">Free Counselling</h4>
                <p className="text-xs text-slate-500 leading-normal font-light">
                  Free career counseling and awareness sessions to guide youth towards correct paths.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-3">
                <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600 inline-block">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-slate-800 text-sm uppercase">Job Placement</h4>
                <p className="text-xs text-slate-500 leading-normal font-light">
                  Focused curriculums built specifically for placements in Oil & Gas and core sectors.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Credentials & Registration */}
        <section className="bg-slate-50 py-20 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              
              <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-100/50 text-emerald-600 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>Verified Affiliation</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Independent Skill Development Mission (ISDM)
              </h2>
              
              <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base">
                SSDC is registered and certified under the <strong>Independent Skill Development Mission (ISDM)</strong>. ISDM is actively engaged in organizing and executing all such educational initiatives, ensuring that students from any academic stream receive premium coaching. Our programs qualify graduates for placement in international petrochemical, energy, and engineering firms.
              </p>

              {/* Credentials Card */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200/65 shadow-md inline-block text-left max-w-md w-full space-y-4">
                <div className="text-xs uppercase font-bold text-slate-400 tracking-widest text-center">
                  Registration Parameters
                </div>
                <div className="h-px bg-slate-100" />
                <div className="space-y-3">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-slate-500 font-medium">Franchise Type:</span>
                    <span className="font-semibold text-slate-800 text-right">Government Approved</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-slate-500 font-medium">Affiliation Body:</span>
                    <span className="font-semibold text-slate-800 text-right text-primary">ISDM Group</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm items-center">
                    <span className="text-slate-500 font-medium font-semibold">Institute Code:</span>
                    <span className="font-mono bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded text-xs border border-emerald-100 font-bold">
                      ISDM / KAR / 2022 / 236
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Mission & Vision Full Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Vision and Mission Statements
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light">
              The fundamental principles that guide our academic initiatives and student coaching.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Mission />
            <Vision />
          </div>
        </section>

      </div>
      
    </PageTransition>
  )
}
