import React, { useState, useRef } from 'react'
import confetti from 'canvas-confetti'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Upload, FileText, CheckCircle2, AlertCircle } from 'lucide-react'

interface FormState {
  firstName: string
  lastName: string
  gender: string
  dob: string
  fatherName: string
  motherName: string
  address: string
  city: string
  state: string
  zipCode: string
  nationality: string
  mobileNumber: string
  email: string
  qualification: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

export default function InquiryForm() {
  const initialFormState: FormState = {
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    fatherName: '',
    motherName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    nationality: 'Indian',
    mobileNumber: '',
    email: '',
    qualification: '',
    message: '',
  }

  const [form, setForm] = useState<FormState>(initialFormState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  // File uploads
  const [photo, setPhoto] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string>('')
  const [signature, setSignature] = useState<File | null>(null)
  const [signaturePreview, setSignaturePreview] = useState<string>('')

  const photoInputRef = useRef<HTMLInputElement>(null)
  const signatureInputRef = useRef<HTMLInputElement>(null)

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'photo' | 'signature') => {
    const file = e.target.files?.[0] || null
    if (!file) return

    // Basic file validation (size < 2MB, type: image/*)
    if (file.size > 2 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, [type]: 'File size must be under 2MB.' }))
      return
    }

    if (!file.type.startsWith('image/')) {
      setErrors((prev) => ({ ...prev, [type]: 'Only image files are allowed.' }))
      return
    }

    // Set files & preview URLs
    if (errors[type]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[type]
        return next
      })
    }

    if (type === 'photo') {
      setPhoto(file)
      setPhotoPreview(URL.createObjectURL(file))
    } else {
      setSignature(file)
      setSignaturePreview(URL.createObjectURL(file))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Required fields
    if (!form.firstName.trim()) newErrors.firstName = 'First Name is required.'
    if (!form.lastName.trim()) newErrors.lastName = 'Last Name is required.'
    if (!form.gender) newErrors.gender = 'Gender is required.'
    if (!form.dob) newErrors.dob = 'Date of Birth is required.'
    if (!form.fatherName.trim()) newErrors.fatherName = "Father's Name is required."
    if (!form.motherName.trim()) newErrors.motherName = "Mother's Name is required."
    if (!form.address.trim()) newErrors.address = 'Address is required.'
    if (!form.city.trim()) newErrors.city = 'City is required.'
    if (!form.state.trim()) newErrors.state = 'State is required.'
    if (!form.zipCode.trim()) newErrors.zipCode = 'Zip Code is required.'
    if (!form.nationality.trim()) newErrors.nationality = 'Nationality is required.'
    if (!form.qualification) newErrors.qualification = 'Qualification is required.'

    // Mobile validation
    if (!form.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile Number is required.'
    } else if (!/^\d{10}$/.test(form.mobileNumber.replace(/[-\s]/g, ''))) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number.'
    }

    // Email validation
    if (!form.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    // Document validation
    if (!photo) newErrors.photo = 'Please upload a passport-size photo.'
    if (!signature) newErrors.signature = 'Please upload a signature scan.'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      
      // Mock submit simulation
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSuccess(true)
        
        // Log all submitted form data to the browser console
        console.log('--- Student Inquiry Submission ---')
        console.log('Personal Details:', {
          firstName: form.firstName,
          lastName: form.lastName,
          gender: form.gender,
          dob: form.dob,
          fatherName: form.fatherName,
          motherName: form.motherName,
          nationality: form.nationality,
        })
        console.log('Address Details:', {
          address: form.address,
          city: form.city,
          state: form.state,
          zipCode: form.zipCode,
        })
        console.log('Contact & Qualification:', {
          mobileNumber: form.mobileNumber,
          email: form.email,
          qualification: form.qualification,
          message: form.message,
        })
        console.log('Uploaded Documents:', {
          photoFile: photo,
          signatureFile: signature,
        })
        console.log('---------------------------------')
        
        // Trigger confetti celebration!
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 }
        })
      }, 1500)
    } else {
      // Scroll to the first error
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
    setPhoto(null)
    setPhotoPreview('')
    setSignature(null)
    setSignaturePreview('')
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
            {/* Section 1: Personal Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <div className="bg-primary/10 p-2 rounded-xl text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-800 text-base sm:text-lg">Personal Details</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                
                {/* First Name */}
                <div className="space-y-1.5">
                  <label htmlFor="firstName" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.firstName ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                    }`}
                  />
                  {errors.firstName && (
                    <span className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.firstName}</span>
                    </span>
                  )}
                </div>

                {/* Last Name */}
                <div className="space-y-1.5">
                  <label htmlFor="lastName" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.lastName ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                    }`}
                  />
                  {errors.lastName && (
                    <span className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.lastName}</span>
                    </span>
                  )}
                </div>

                {/* Gender */}
                <div className="space-y-1.5">
                  <label htmlFor="gender" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={form.gender}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.gender ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                    }`}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.gender && (
                    <span className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.gender}</span>
                    </span>
                  )}
                </div>

                {/* Date of Birth */}
                <div className="space-y-1.5">
                  <label htmlFor="dob" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={form.dob}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.dob ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                    }`}
                  />
                  {errors.dob && (
                    <span className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.dob}</span>
                    </span>
                  )}
                </div>

                {/* Father Name */}
                <div className="space-y-1.5">
                  <label htmlFor="fatherName" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Father's Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fatherName"
                    name="fatherName"
                    value={form.fatherName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.fatherName ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                    }`}
                  />
                  {errors.fatherName && (
                    <span className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.fatherName}</span>
                    </span>
                  )}
                </div>

                {/* Mother Name */}
                <div className="space-y-1.5">
                  <label htmlFor="motherName" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Mother's Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="motherName"
                    name="motherName"
                    value={form.motherName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.motherName ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                    }`}
                  />
                  {errors.motherName && (
                    <span className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.motherName}</span>
                    </span>
                  )}
                </div>

                {/* Nationality */}
                <div className="space-y-1.5">
                  <label htmlFor="nationality" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Nationality <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={form.nationality}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.nationality ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                    }`}
                  />
                  {errors.nationality && (
                    <span className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.nationality}</span>
                    </span>
                  )}
                </div>

              </div>
            </div>

            {/* Section 2: Address Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <div className="bg-primary/10 p-2 rounded-xl text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-800 text-base sm:text-lg">Address Details</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                
                {/* Full Address */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="address" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Permanent Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={form.address}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.address ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                    }`}
                  />
                  {errors.address && (
                    <span className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.address}</span>
                    </span>
                  )}
                </div>

                {/* City */}
                <div className="space-y-1.5">
                  <label htmlFor="city" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={form.city}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.city ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                    }`}
                  />
                  {errors.city && (
                    <span className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.city}</span>
                    </span>
                  )}
                </div>

                {/* State */}
                <div className="space-y-1.5">
                  <label htmlFor="state" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={form.state}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.state ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                    }`}
                  />
                  {errors.state && (
                    <span className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.state}</span>
                    </span>
                  )}
                </div>

                {/* Zip Code */}
                <div className="space-y-1.5">
                  <label htmlFor="zipCode" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Zip Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={form.zipCode}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.zipCode ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                    }`}
                  />
                  {errors.zipCode && (
                    <span className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.zipCode}</span>
                    </span>
                  )}
                </div>

              </div>
            </div>

            {/* Section 3: Contact & Qualification */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <div className="bg-primary/10 p-2 rounded-xl text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-800 text-base sm:text-lg">Contact & Qualifications</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                {/* Mobile Number */}
                <div className="space-y-1.5">
                  <label htmlFor="mobileNumber" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    placeholder="E.g. 9876543210"
                    value={form.mobileNumber}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.mobileNumber ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                    }`}
                  />
                  {errors.mobileNumber && (
                    <span className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.mobileNumber}</span>
                    </span>
                  )}
                </div>

                {/* Email address */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
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

                {/* Qualification */}
                <div className="space-y-1.5">
                  <label htmlFor="qualification" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Qualification <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="qualification"
                    name="qualification"
                    value={form.qualification}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.qualification ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                    }`}
                  >
                    <option value="">Select Qualification</option>
                    <option value="BE / B.Tech">B.E / B.Tech</option>
                    <option value="Diploma in Engineering">Diploma in Engineering</option>
                    <option value="ITI Graduate">ITI Graduate</option>
                    <option value="BSC / Academic Graduate">B.Sc / Academic Graduate</option>
                    <option value="Post Graduate">Post Graduate</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.qualification && (
                    <span className="flex items-center space-x-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.qualification}</span>
                    </span>
                  )}
                </div>

              </div>

              {/* Message / Enquiry details */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Enquiry Message / Remarks
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us what courses you are interested in..."
                  value={form.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                />
              </div>
            </div>

            {/* Section 4: Document Uploads */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <div className="bg-primary/10 p-2 rounded-xl text-primary">
                  <Upload className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-800 text-base sm:text-lg">Document Uploads</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                {/* Photo Upload */}
                <div className="space-y-3">
                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                    Upload Passport Size Photo <span className="text-red-500">*</span>
                  </span>
                  
                  <div
                    onClick={() => photoInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer hover:bg-slate-50 transition-all ${
                      errors.photo ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/20'
                    }`}
                  >
                    <input
                      type="file"
                      ref={photoInputRef}
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, 'photo')}
                    />
                    
                    {photoPreview ? (
                      <div className="relative inline-block">
                        <img
                          src={photoPreview}
                          alt="Photo Preview"
                          className="w-28 h-28 object-cover rounded-xl shadow-md border-2 border-white"
                        />
                        <span className="absolute -bottom-1.5 -right-1.5 bg-emerald-500 text-white p-1 rounded-full text-xs shadow-sm">
                          <CheckCircle2 className="h-4 w-4" />
                        </span>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Upload className="h-8 w-8 mx-auto text-slate-400" />
                        <div className="text-xs text-slate-500">
                          <span className="text-primary font-semibold">Click to upload</span> photo
                        </div>
                        <div className="text-[10px] text-slate-400">JPG, PNG up to 2MB</div>
                      </div>
                    )}
                  </div>
                  {errors.photo && (
                    <span className="flex items-center space-x-1 text-xs text-red-500 justify-center">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.photo}</span>
                    </span>
                  )}
                </div>

                {/* Signature Upload */}
                <div className="space-y-3">
                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                    Upload Signature Scan <span className="text-red-500">*</span>
                  </span>
                  
                  <div
                    onClick={() => signatureInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer hover:bg-slate-50 transition-all ${
                      errors.signature ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/20'
                    }`}
                  >
                    <input
                      type="file"
                      ref={signatureInputRef}
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, 'signature')}
                    />
                    
                    {signaturePreview ? (
                      <div className="relative inline-block">
                        <img
                          src={signaturePreview}
                          alt="Signature Preview"
                          className="w-40 h-16 object-contain rounded-xl shadow-md bg-white border border-slate-100 p-2"
                        />
                        <span className="absolute -bottom-1.5 -right-1.5 bg-emerald-500 text-white p-1 rounded-full text-xs shadow-sm">
                          <CheckCircle2 className="h-4 w-4" />
                        </span>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Upload className="h-8 w-8 mx-auto text-slate-400" />
                        <div className="text-xs text-slate-500">
                          <span className="text-primary font-semibold">Click to upload</span> signature
                        </div>
                        <div className="text-[10px] text-slate-400">JPG, PNG up to 2MB</div>
                      </div>
                    )}
                  </div>
                  {errors.signature && (
                    <span className="flex items-center space-x-1 text-xs text-red-500 justify-center">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.signature}</span>
                    </span>
                  )}
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
                    <span>Submit Application</span>
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
              <h3 className="text-2xl font-bold text-slate-900">Application Submitted!</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-light">
                Thank you for submitting your admission inquiry. We have successfully received your information, and the console has logged your data. Our academic counselor will review and contact you shortly.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-xs uppercase tracking-wider shadow-md shadow-primary/20 transition-all cursor-pointer"
              >
                Submit Another Inquiry
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
