import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, BookOpen, Mail, GraduationCap } from 'lucide-react'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-primary/20 overflow-hidden py-20">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-accent/5 blur-[100px]" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b5ed705_1px,transparent_1px),linear-gradient(to_bottom,#0b5ed705_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-primary/15 border border-primary/30 px-4 py-1.5 rounded-full"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs uppercase font-bold text-primary tracking-wider">
                Authorized ISDM Skill Franchise
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
            >
              SAHAR SKILL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                DEVELOPMENT
              </span> <br />
              CENTER
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Empowering youth through professional vocational training. Reaching technical and non-technical graduates with specialized coaching to secure placements in Oil & Gas, NDT, ITI, and other major infrastructure industries.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                onClick={() => navigate('/courses')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer group"
              >
                <BookOpen className="h-5 w-5" />
                <span>Explore Courses</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <Mail className="h-5 w-5 text-slate-400" />
                <span>Contact Us</span>
              </button>
            </motion.div>
          </div>

          {/* Hero Visual Card / Quick Info */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-slate-850/80 backdrop-blur-md rounded-3xl p-8 border border-slate-750 shadow-2xl max-w-md mx-auto"
            >
              <div className="absolute top-0 right-0 bg-accent text-slate-900 text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-bl-2xl rounded-tr-3xl shadow-sm">
                Mysuru Center
              </div>
              
              <h3 className="text-white font-bold text-xl mb-4">Admissions Open</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="bg-slate-800 p-2 rounded-lg text-primary">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Govt Approved Franchise</div>
                    <div className="text-xs text-slate-400">Independent Skill Development Mission</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="bg-slate-800 p-2 rounded-lg text-primary">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">BE / Diploma / ITI Graduates</div>
                    <div className="text-xs text-slate-400">Specially designed job-ready curriculums</div>
                  </div>
                </div>

                <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-750/30 text-xs mt-6 text-slate-400 space-y-1">
                  <div><strong>Location:</strong> Rajivnagar, near Al Badar Circle, Mysore</div>
                  <div><strong>Donation Sponsor:</strong> Syed Basheer Ahamed (Founder)</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

// Inline SVG helper component for Award since it was not imported
function Award({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}
