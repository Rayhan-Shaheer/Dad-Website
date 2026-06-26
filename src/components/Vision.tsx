import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'

export default function Vision() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col h-full transform hover:shadow-md transition-all duration-300 relative overflow-hidden"
    >
      {/* Decorative colored corner bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-accent" />
      
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-accent/15 p-3.5 rounded-2xl text-accent-hover">
          <Eye className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">
          Our Vision
        </h3>
      </div>
      
      <blockquote className="text-slate-600 leading-relaxed text-sm sm:text-base font-light italic relative flex-grow">
        “ To Empower the students in order to built stronger knowledge to make them employable to face any professional challenges in the life. ”
      </blockquote>
    </motion.div>
  )
}
