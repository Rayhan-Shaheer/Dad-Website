import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, Shield, Award } from 'lucide-react'

export default function CorporateCTA() {
  const navigate = useNavigate()

  const handleCTA = () => {
    navigate('/booking')
  }

  const features = [
    { text: '100+ High-Spec Nodes', icon: CheckCircle },
    { text: 'Biometric Access & CCTV', icon: Shield },
    { text: 'Zero Power Failures (UPS + DG)', icon: Award },
  ]

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background visual shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[50%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -bottom-[40%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/60 border border-slate-800 backdrop-blur-md rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Header Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 space-y-6">
              
              <span className="inline-flex items-center space-x-2 bg-primary/25 border border-primary/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">
                Corporate Infrastructure
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Partner with Mysuru’s Trusted Assessment Provider
              </h2>
              
              <h3 className="text-base sm:text-lg font-medium text-primary leading-normal">
                Secure your testing dates at our premier 100+ node digital examination center.
              </h3>

              <div className="space-y-4 text-slate-300 leading-relaxed font-light text-sm sm:text-base">
                <p>
                  Whether you are planning a high-stakes national entrance exam, a corporate recruitment drive, or a localized certification test, SSDC Mysuru delivers the infrastructure, security, and technical expertise required for a flawless execution. Don’t risk technical glitches or logistical delays—partner with a team that has successfully administered over 50,000 seamless examinations.
                </p>
                <p>
                  Contact our corporate coordination team today to check availability, request a quotation, or schedule a facility walkthrough.
                </p>
              </div>

              {/* Inline Feature Badges */}
              <div className="flex flex-wrap gap-4 pt-4">
                {features.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div key={idx} className="flex items-center space-x-2 bg-slate-800/40 border border-slate-800/60 py-1.5 px-4 rounded-xl text-xs text-slate-400 font-mono">
                      <Icon className="h-4 w-4 text-accent" />
                      <span>{item.text}</span>
                    </div>
                  )
                })}
              </div>

            </div>

            {/* CTA action column */}
            <div className="lg:col-span-4 lg:text-right pt-6 lg:pt-0 lg:my-auto w-full">
              <div className="bg-slate-950/40 border border-slate-800/50 p-6 rounded-2xl space-y-4 max-w-sm ml-auto text-left">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400">Lab Availabilities</h4>
                <p className="text-xs text-slate-500 font-light leading-normal">
                  Our digital labs feature isolated LAN setups, biometric entryways, and 100+ fully-configured PCs.
                </p>
                
                <button
                  onClick={handleCTA}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Book Our Lab</span>
                </button>
                
                <button
                  onClick={handleCTA}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Request a Proposal</span>
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
