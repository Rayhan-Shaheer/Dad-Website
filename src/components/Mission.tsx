import { motion } from 'framer-motion'
import { Target } from 'lucide-react'

export default function Mission() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col h-full transform hover:shadow-md transition-all duration-300 relative overflow-hidden"
    >
      {/* Decorative colored corner bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary" />
      
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-primary/10 p-3.5 rounded-2xl text-primary">
          <Target className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">
          Our Mission
        </h3>
      </div>
      
      <blockquote className="text-slate-600 leading-relaxed text-sm sm:text-base font-light italic relative flex-grow">
        “ To support the students to attain their academic’s goal by delivering innovative; best in class and online training through effective technology and teaching methods and to make learning easy, interactive and employable. ”
      </blockquote>
    </motion.div>
  )
}
