import { Link } from 'react-router-dom'
import PageTransition from '@/components/PageTransition'
import Hero from '@/components/Hero'
import StatsCounter from '@/components/StatsCounter'
import About from '@/components/About'
import Mission from '@/components/Mission'
import Vision from '@/components/Vision'
import DirectorMessage from '@/components/DirectorMessage'
import CourseGrid from '@/components/CourseGrid'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <PageTransition>
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Interactive Stats Counters */}
      <StatsCounter />
      
      {/* 3. About Section (Welcome Overview & Banner) */}
      <About />
      
      {/* 4. Combined Mission & Vision highlights */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Core Values</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Mission & Vision
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Mission />
            <Vision />
          </div>
          
        </div>
      </section>
      
      {/* 5. Director's Message */}
      <DirectorMessage />
      
      {/* 6. Courses Preview Grid */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <span>Academic Training</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Course Offerings
              </h2>
            </div>
            
            <Link
              to="/courses"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary-hover font-semibold text-sm group"
            >
              <span>View All Courses</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Render first 3 categories or full grid */}
          <CourseGrid />

        </div>
      </section>

    </PageTransition>
  )
}
