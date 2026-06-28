import { Link } from 'react-router-dom'
import { GraduationCap, MapPin, Phone, Mail, Award, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Courses', path: '/courses' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Student Admission', path: '/admission' },
    { name: 'Center Booking', path: '/booking' },
    { name: 'Contact Us', path: '/contact' },
  ]

  const courseCategories = [
    { name: 'Technical Courses', path: '/courses' },
    { name: 'ITI Courses', path: '/courses' },
    { name: 'NDT Courses', path: '/courses' },
    { name: 'Job Oriented Courses', path: '/courses' },
    { name: 'All Other Courses', path: '/courses' },
  ]

  const portalLinks = [
    { name: 'Student Login', url: 'https://center.isdmgroup.in/wp-admin/admin.php?page=multi-institute-management-student-dashboard' },
    { name: 'Exam Login', url: 'https://exam.isdmgroup.in/crm/Users/login/index' },
    { name: 'E-Classroom', url: 'https://online.isdmgroup.in/' },
    { name: 'Job Portal', url: 'http://jobfixer.in' },
  ]

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
          
          {/* Logo & About Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 text-white">
              <div className="bg-primary/20 p-2 rounded-xl">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-white leading-none tracking-tight">
                  SAHAR SKILL
                </span>
                <span className="text-xs font-semibold text-primary tracking-widest uppercase">
                  Development Center
                </span>
              </div>
            </Link>
            
            <p className="text-sm leading-relaxed text-slate-400">
              Dedicated to enhancing skills, nurturing talent, and shaping leaders of tomorrow. Empowers technical and non-technical graduates for careers in Oil & Gas and other infrastructure industries.
            </p>

            {/* Registration Certificate Badge */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50 space-y-2">
              <div className="flex items-center space-x-2 text-white font-medium text-xs">
                <Award className="h-4 w-4 text-accent" />
                <span>ISDM Registered Franchise</span>
              </div>
              <div className="text-[11px] font-mono text-slate-300">
                Code: ISDM / KAR / 2022 / 236
              </div>
              <div className="text-[10px] text-accent uppercase font-semibold tracking-wider">
                Government Approved
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide uppercase text-sm">
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors duration-200 text-sm flex items-center space-x-1"
                  >
                    <span className="text-primary font-bold text-xs">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses Categories */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide uppercase text-sm">
              Our Programs
            </h3>
            <ul className="space-y-3.5">
              {courseCategories.map((course) => (
                <li key={course.name}>
                  <Link
                    to={course.path}
                    className="hover:text-white transition-colors duration-200 text-sm flex items-center space-x-1"
                  >
                    <span className="text-primary font-bold text-xs">›</span>
                    <span>{course.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide uppercase text-sm">
              Contact Center
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  No. 2 Ground Floor, 2nd Stage, Rajivnagar, Near Al Badar Circle, Mysuru, Karnataka, 570019
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <a href="tel:08212501258" className="hover:text-white transition-colors">0821-2501258</a>
                  <span className="mx-1 text-slate-700">|</span>
                  <a href="tel:+919008819502" className="hover:text-white transition-colors">+91 9008819502</a>
                </div>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:ahamedsyedbasheer@gmail.com" className="hover:text-white transition-colors break-all">
                  basheer@ssdcmysore.com


                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Portal Links & Sub-footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* External Portals */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium">
            {portalLinks.map((portal) => (
              <a
                key={portal.name}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-white transition-colors text-slate-500"
              >
                <span>{portal.name}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>

          {/* Copyright Text */}
          <div className="text-xs text-center md:text-right text-slate-500">
            &copy; {currentYear} Sahar Skill Development Center. All Rights Reserved.
            <div className="mt-1 text-[10px] text-slate-600">
              Affiliated with Independent Skill Development Mission (ISDM)
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
