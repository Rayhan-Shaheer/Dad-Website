import React, { useState } from 'react'
import confetti from 'canvas-confetti'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, FileText, CheckCircle2, AlertCircle, Calendar, Cpu } from 'lucide-react'

interface BookingState {
  orgName: string
  contactPerson: string
  designation: string
  email: string
  phone: string
  eventType: string
  proposedDates: string
  shiftsPerDay: string
  candidatesPerShift: string
  sysSpecs: string
  comments: string
}

interface FormErrors {
  [key: string]: string
}

export default function BookingForm() {
  const initialFormState: BookingState = {
    orgName: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    eventType: '',
    proposedDates: '',
    shiftsPerDay: '',
    candidatesPerShift: '',
    sysSpecs: '',
    comments: '',
  }

  const [form, setForm] = useState<BookingState>(initialFormState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Required fields
    if (!form.orgName.trim()) newErrors.orgName = 'Organization Name is required.'
    if (!form.contactPerson.trim()) newErrors.contactPerson = 'Contact Person Name is required.'
    if (!form.designation.trim()) newErrors.designation = 'Designation is required.'
    if (!form.eventType) newErrors.eventType = 'Type of Exam/Event is required.'
    if (!form.proposedDates.trim()) newErrors.proposedDates = 'Proposed Date(s) is required.'
    if (!form.shiftsPerDay) newErrors.shiftsPerDay = 'Shifts per day is required.'
    
    // Candidates count validation
    if (!form.candidatesPerShift.trim()) {
      newErrors.candidatesPerShift = 'Estimated candidates count is required.'
    } else if (isNaN(Number(form.candidatesPerShift)) || Number(form.candidatesPerShift) <= 0) {
      newErrors.candidatesPerShift = 'Please enter a valid positive number.'
    }

    // Phone validation
    if (!form.phone.trim()) {
      newErrors.phone = 'Contact Number is required.'
    } else if (!/^\d{10}$/.test(form.phone.replace(/[-\s]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.'
    }

    // Email validation
    if (!form.email.trim()) {
      newErrors.email = 'Official Email Address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSuccess(true)
        
        // Log B2B booking data to console
        console.log('--- Assessment Center Booking Inquiry ---')
        console.log('Organization Info:', {
          orgName: form.orgName,
          contactPerson: form.contactPerson,
          designation: form.designation,
          email: form.email,
          phone: form.phone,
        })
        console.log('Examination Details:', {
          eventType: form.eventType,
          proposedDates: form.proposedDates,
          shiftsPerDay: form.shiftsPerDay,
          candidatesPerShift: form.candidatesPerShift,
        })
        console.log('Additional Requirements:', {
          sysSpecs: form.sysSpecs,
          comments: form.comments,
        })
        console.log('-----------------------------------------')
        
        // Confetti effect!
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 }
        })
      }, 1500)
    } else {
      const firstError = Object.keys(errors)[0]
      if (firstError) {
        const element = document.getElementsByName(firstError)[0]
        element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }

  const handleReset = () => {
    setForm(initialFormState)
    setErrors({})
    setIsSuccess(false)
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-8 bg-white border border-slate-100 p-6 sm:p-10 rounded-3xl shadow-xl shadow-slate-100/50"
            noValidate
          >
            {/* Section 1: Organization Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <div className="bg-primary/10 p-2 rounded-xl text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-800 text-base sm:text-lg">Organization Details</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                
                {/* Organization Name */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="orgName" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Organization Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="orgName"
                    name="orgName"
                    value={form.orgName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.orgName ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                    }`}
                  />
                  {errors.orgName && (
                    <span className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.orgName}</span>
                    </span>
                  )}
                </div>

                {/* Contact Person Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contactPerson" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Contact Person Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={form.contactPerson}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.contactPerson ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                    }`}
                  />
                  {errors.contactPerson && (
                    <span className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.contactPerson}</span>
                    </span>
                  )}
                </div>

                {/* Designation */}
                <div className="space-y-1.5">
                  <label htmlFor="designation" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Designation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={form.designation}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.designation ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                    }`}
                  />
                  {errors.designation && (
                    <span className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.designation}</span>
                    </span>
                  )}
                </div>

                {/* Official Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Official Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="corp@organization.com"
                    value={form.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.email ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                    }`}
                  />
                  {errors.email && (
                    <span className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.email}</span>
                    </span>
                  )}
                </div>

                {/* Contact / Mobile Number */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Contact / Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                    }`}
                  />
                  {errors.phone && (
                    <span className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.phone}</span>
                    </span>
                  )}
                </div>

              </div>
            </div>

            {/* Section 2: Examination Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <div className="bg-primary/10 p-2 rounded-xl text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-800 text-base sm:text-lg">Examination Details</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                
                {/* Type of Exam/Event */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="eventType" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Type of Exam/Event <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={form.eventType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.eventType ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                    }`}
                  >
                    <option value="">Select Exam/Event Type</option>
                    <option value="Recruitment">Recruitment Drive</option>
                    <option value="National Entrance">National Entrance Exam</option>
                    <option value="Institutional Testing">Institutional Testing</option>
                    <option value="Government Assessment">Government Assessment</option>
                    <option value="Corporate Certification">Corporate Certification</option>
                    <option value="Others">Others</option>
                  </select>
                  {errors.eventType && (
                    <span className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.eventType}</span>
                    </span>
                  )}
                </div>

                {/* Proposed Dates */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="proposedDates" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Proposed Date(s) of Assessment <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="proposedDates"
                    name="proposedDates"
                    placeholder="E.g. Oct 12-14, 2026 or single date"
                    value={form.proposedDates}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.proposedDates ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                    }`}
                  />
                  {errors.proposedDates && (
                    <span className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.proposedDates}</span>
                    </span>
                  )}
                </div>

                {/* Number of Shifts per Day */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="shiftsPerDay" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Number of Shifts per Day <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="shiftsPerDay"
                    name="shiftsPerDay"
                    value={form.shiftsPerDay}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.shiftsPerDay ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                    }`}
                  >
                    <option value="">Select Shifts</option>
                    <option value="1 Shift">1 Shift</option>
                    <option value="2 Shifts">2 Shifts</option>
                    <option value="3 Shifts">3 Shifts</option>
                    <option value="Multiple Days">Multiple Days / Custom</option>
                  </select>
                  {errors.shiftsPerDay && (
                    <span className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.shiftsPerDay}</span>
                    </span>
                  )}
                </div>

                {/* Estimated candidates per shift */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="candidatesPerShift" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Estimated Candidates per Shift <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="candidatesPerShift"
                    name="candidatesPerShift"
                    min="1"
                    value={form.candidatesPerShift}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.candidatesPerShift ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                    }`}
                  />
                  {errors.candidatesPerShift && (
                    <span className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.candidatesPerShift}</span>
                    </span>
                  )}
                </div>

              </div>
            </div>

            {/* Section 3: Additional Requirements */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <div className="bg-primary/10 p-2 rounded-xl text-primary">
                  <Cpu className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-800 text-base sm:text-lg">Additional Requirements</h3>
              </div>

              <div className="space-y-4">
                {/* System Specs */}
                <div className="space-y-1.5">
                  <label htmlFor="sysSpecs" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Required System Specifications / Software Requirements (if any)
                  </label>
                  <textarea
                    id="sysSpecs"
                    name="sysSpecs"
                    rows={3}
                    placeholder="E.g. Windows 11, Chrome browser, specific secure lock-down browser, MS Office..."
                    value={form.sysSpecs}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  />
                </div>

                {/* Special Instructions */}
                <div className="space-y-1.5">
                  <label htmlFor="comments" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Additional Comments or Special Instructions
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    rows={3}
                    placeholder="Any specific infrastructural details or logistics requests..."
                    value={form.comments}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-4">
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-slate-200 text-slate-500 font-semibold text-xs uppercase tracking-wider hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Clear Fields
              </button>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Submit Inquiry Request</span>
                  </>
                )}
              </button>
            </div>
            
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white border border-slate-100 p-8 sm:p-16 rounded-3xl shadow-xl shadow-slate-100/50 text-center max-w-2xl mx-auto space-y-6"
          >
            <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto text-emerald-500">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900 font-sans">Inquiry Received</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-light">
                Thank you for reaching out to Sahar Skill Development Center, Mysuru. Your inquiry has been received. Our center coordination team will review your requirements and contact you shortly.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-xs uppercase tracking-wider shadow-md shadow-primary/20 transition-all cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
