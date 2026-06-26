import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, GraduationCap, Percent, BookOpen } from 'lucide-react'

interface StatItem {
  id: number
  label: string
  targetValue: number
  suffix: string
  icon: any
  colorClass: string
}

function Counter({ targetValue, suffix }: { targetValue: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = targetValue
    const duration = 1500 // ms
    const incrementTime = Math.max(Math.floor(duration / end), 15)

    const timer = setInterval(() => {
      start += Math.ceil(end / 100) // increment by steps
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, incrementTime)

    return () => clearInterval(timer)
  }, [isInView, targetValue])

  return (
    <span ref={ref} className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
      {count}
      {suffix}
    </span>
  )
}

export default function StatsCounter() {
  const stats: StatItem[] = [
    {
      id: 1,
      label: 'Students Coached',
      targetValue: 1200,
      suffix: '+',
      icon: Users,
      colorClass: 'text-blue-600 bg-blue-50',
    },
    {
      id: 2,
      label: 'Expert Categories',
      targetValue: 5,
      suffix: '',
      icon: BookOpen,
      colorClass: 'text-amber-600 bg-amber-50',
    },
    {
      id: 3,
      label: 'Placement Support',
      targetValue: 100,
      suffix: '%',
      icon: Percent,
      colorClass: 'text-emerald-600 bg-emerald-50',
    },
    {
      id: 4,
      label: 'Authorized Years',
      targetValue: 4,
      suffix: '+',
      icon: GraduationCap,
      colorClass: 'text-indigo-600 bg-indigo-50',
    },
  ]

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                key={stat.id}
                className="flex flex-col items-center space-y-2 p-4 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                <div className={`p-3.5 rounded-xl ${stat.colorClass} mb-2`}>
                  <Icon className="h-6 w-6" />
                </div>
                <Counter targetValue={stat.targetValue} suffix={stat.suffix} />
                <span className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-widest leading-none">
                  {stat.label}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
