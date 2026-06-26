import { motion } from 'framer-motion'
import { Quote, Sparkles } from 'lucide-react'

export default function DirectorMessage() {
  return (
    <section className="py-20 bg-slate-50" id="director-desk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Leadership Message</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Messege from Director’s Desk
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Elegant Message Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12"
        >
          
          {/* Director Image and Label Column */}
          <div className="lg:col-span-4 bg-gradient-to-b from-slate-900 to-slate-800 p-8 sm:p-12 flex flex-col justify-between items-center text-center relative overflow-hidden">
            
            {/* Background graphics */}
            <div className="absolute inset-0 bg-primary/10 blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border border-white/5" />
            
            {/* Quote decoration */}
            <div className="hidden lg:block text-white/5 absolute top-8 left-8">
              <Quote className="h-28 w-28 stroke-[1px]" />
            </div>

            {/* Avatar / Portrait Placement */}
            <div className="space-y-6 z-10 my-auto">
              <div className="relative inline-block">
                {/* Visual Avatar Placeholder */}
                <div className="w-40 h-40 rounded-full bg-slate-750 border-4 border-primary/30 flex items-center justify-center mx-auto overflow-hidden shadow-2xl relative group">
                  {/* Since the reference site does not have a director image, we display a professional graphic portrait placeholder. Users can swap this source file. */}
                  <svg className="w-24 h-24 text-slate-400 mt-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-[10px] text-white font-mono text-center px-2">
                    Replace source in components/DirectorMessage.tsx
                  </div>
                </div>
                
                <div className="absolute -bottom-2 right-1/2 translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md">
                  Founder
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  Mr. SYED BASHEER AHAMED
                </h3>
                <p className="text-xs text-primary font-semibold uppercase tracking-wider mt-1.5">
                  Center Founder & Director
                </p>
                <div className="text-[10px] text-slate-500 mt-1 font-mono">
                  Sahar Skill Development Center
                </div>
              </div>
            </div>
            
          </div>

          {/* Director Text Message Column */}
          <div className="lg:col-span-8 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">
            <div className="absolute top-8 right-8 text-primary/10">
              <Quote className="h-16 w-16 stroke-[1px]" />
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed font-light text-sm sm:text-base">
              <p>
                SSDC (SAHAR SKILL DEVELOPMENT CENTER) is a Non-profit organization dedicated to enhance the skills and nurture talent and make leaders of tomorrow with generous donation from center founder <strong>Mr. SYED BASHEER AHAMED</strong>. We are located in Mysore, No.2, Rajivnagar, Near Al Badar Circle, opposite to Muslim Bank. This location is easily accessible by road and bus.
              </p>
              
              <p>
                The purpose of establishing the center at Mysore is to help the unemployed youth (Technical & Non-technical graduates) in developing the skills through short term courses and assist them in getting the job. We also make more awareness sessions through free counselling to guide the youth pursuing their career at respective discipline / field.
              </p>
              
              <p>
                Special courses have been designed at center for BE/DIPLOMA & IT graduates which leads them to get jobs in the field of <strong>OIL & GAS and OTHER infrastructure industries</strong> by imparting coaching research, education and practice in the institute through professional coaches.
              </p>

              <p>
                We are building a global coaching research community by bringing together leaders in the field to accelerate research and disseminate best coaching practices.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="text-xs text-slate-400 font-mono">
                Mysuru Center Head Message
              </div>
              <div className="font-semibold text-slate-800 text-sm italic">
                Syed Basheer Ahamed
              </div>
            </div>
          </div>

        </motion.div>
        
      </div>
    </section>
  )
}
