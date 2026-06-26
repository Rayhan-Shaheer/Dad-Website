import { motion, type Variants } from 'framer-motion'
import { ShieldCheck, Award } from 'lucide-react'

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
  }

  return (
    <section className="py-20 bg-white" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          
          {/* Left Column: Official Banner Image */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl transform translate-x-3 translate-y-3 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
            <img
              src="https://center.isdmgroup.in/wp-content/uploads/2023/10/SSDC-923x1024.jpg"
              alt="Sahar Skill Development Center Flyer"
              className="w-full h-auto rounded-3xl shadow-xl border border-gray-100 object-cover transform transition-transform duration-500 hover:scale-[1.01]"
              loading="lazy"
            />
          </motion.div>

          {/* Right Column: Information & Details */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
            
            {/* Section Tag */}
            <div className="text-xs uppercase font-bold tracking-widest text-primary">
              Institutional Redesign
            </div>

            {/* Main Header */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              SSDC (SAHAR SKILL DEVELOPMENT CENTER)
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base font-light">
              <p>
                SSDC (SAHAR SKILL DEVELOPMENT CENTER) is a Non-profit organization dedicated to enhance the skills and nurture talent and make leaders of tomorrow with generous donation in thier institute by center founder <strong>Mr. SYED BASHEER AHAMED</strong>. We are located in Mysore, No.2 Ground Floor, 2nd Stage, Rajivnagar, Near Al Badar Circle.
              </p>
              
              <p>
                <strong>ABOUT US:</strong> We assist Technical & Non-technical graduates in developing their skills through short term courses and assist them in getting the job. We also make more awareness sessions through free counselling to guide the youth pursuing their career at respective discipline / field.
              </p>

              <p>
                The purpose of establishing the center at Mysore is to help them - youth employment to get jobs in the field of <strong>OIL & GAS and OTHER infrastructure industries</strong> by imparting coaching research, education and practice in the institute through professional coaches. We are building a global coaching research community by bringing together.
              </p>
            </div>

            {/* Franchise Info Card */}
            <div className="mt-8 bg-slate-50 border border-slate-100 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3.5">
                <div className="bg-primary/10 p-2.5 rounded-xl text-primary shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">ISDM Franchise</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    Registered franchise with Independent Skill Development Mission.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="bg-emerald-550/15 p-2.5 rounded-xl text-emerald-600 shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Institute Code</h4>
                  <p className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-100/50 py-0.5 px-2 rounded mt-1 inline-block">
                    ISDM / KAR / 2022 / 236
                  </p>
                  <div className="text-[10px] text-slate-400 mt-1">Government Approved & Registered</div>
                </div>
              </div>
            </div>

          </motion.div>

        </motion.div>
        
      </div>
    </section>
  )
}
