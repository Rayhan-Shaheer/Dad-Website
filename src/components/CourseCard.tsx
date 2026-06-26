import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'

export interface CourseCategoryProps {
  title: string
  description: string
  targetGraduates: string
  iconName: string
  colorClass: string
  bgLightClass: string
  courses: string[]
  onInquire: () => void
}

export default function CourseCard({
  title,
  description,
  targetGraduates,
  iconName,
  colorClass,
  bgLightClass,
  courses,
  onInquire,
}: CourseCategoryProps) {
  // Dynamically resolve icon from Lucide React
  const IconComponent = (Icons as any)[iconName] || Icons.BookOpen

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="bg-white rounded-3xl shadow-lg shadow-slate-100/50 border border-slate-100 overflow-hidden flex flex-col h-full hover:shadow-xl hover:border-slate-200 transition-all duration-300"
    >
      {/* Header bar with Icon and Title */}
      <div className="p-6 sm:p-8 flex-grow space-y-6">
        <div className="flex items-center space-x-4">
          <div className={`p-4 rounded-2xl ${bgLightClass} ${colorClass} shrink-0`}>
            <IconComponent className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg sm:text-xl text-slate-900 tracking-tight leading-snug">
              {title}
            </h3>
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
              {targetGraduates}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-500 font-light leading-relaxed">
          {description}
        </p>

        {/* Typical Curriculums */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs uppercase font-bold tracking-widest text-slate-400">
            Training Topics
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {courses.map((course, idx) => (
              <li key={idx} className="flex items-start space-x-2 text-xs text-slate-600">
                <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${colorClass}`} />
                <span className="leading-snug">{course}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action Button */}
      <div className="px-6 py-5 sm:px-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs font-mono text-slate-400">Admissions Active</span>
        <button
          onClick={onInquire}
          className={`inline-flex items-center justify-center space-x-1 text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-full border transition-all duration-300 cursor-pointer ${colorClass} ${bgLightClass} border-transparent hover:brightness-95`}
        >
          <span>Enquire Now</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </motion.div>
  )
}
