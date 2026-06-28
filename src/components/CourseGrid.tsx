import { useNavigate } from 'react-router-dom'
import CourseCard from './CourseCard'

export default function CourseGrid() {
  const navigate = useNavigate()

  const courseData = [
    {
      title: 'TECHNICAL COURSES',
      targetGraduates: 'BE / Diploma / ITI',
      description: 'Advanced design, modeling, and layout tools designed to make engineering students job-ready in infrastructure drafting and design.',
      iconName: 'Settings',
      colorClass: 'text-blue-600',
      bgLightClass: 'bg-blue-50',
      courses: [
        'AutoCAD (2D/3D)',
        'SolidWorks Design',
        'Revit Architecture',
        'Civil Drafting',
        'Mechanical Drafting',
        'Electrical Layouts',
      ],
    },
    {
      title: 'ITI COURSES',
      targetGraduates: 'ITI graduates & aspirants',
      description: 'Core vocational trades designed to build hands-on expertise and practical field competency for industrial operations.',
      iconName: 'Hammer',
      colorClass: 'text-amber-600',
      bgLightClass: 'bg-amber-50/70',
      courses: [
        'Fitter Trade Training',
        'Welder (Arc & Gas)',
        'Electrician Trade',
        'Draftsman Civil',
        'Machinist Basics',
        'CNC Machine Ops',
      ],
    },
    {
      title: 'NDT COURSES',
      targetGraduates: 'Mechanical / Civil / ITI',
      description: 'Non-Destructive Testing certifications mapping to international quality assurance standards for infrastructure and manufacturing inspects.',
      iconName: 'Compass',
      colorClass: 'text-rose-600',
      bgLightClass: 'bg-rose-50',
      courses: [
        'Ultrasonic Testing (UT)',
        'Magnetic Particle (MT)',
        'Liquid Penetrant (PT)',
        'Radiographic Testing (RT)',
        'Visual Testing (VT)',
        'NDT Level II Certificate',
      ],
    },
    {
      title: 'JOB ORIENTED COURSES',
      targetGraduates: 'Technical / Non-Technical',
      description: 'High-impact specialized placement courses targeting careers in heavy industries, processing plants, and energy infrastructure.',
      iconName: 'Briefcase',
      colorClass: 'text-emerald-600',
      bgLightClass: 'bg-emerald-50',
      courses: [
        'Oil & Gas Technology',
        'Piping Design Engineering',
        'Plant Design System (PDMS)',
        'QA/QC Engineering',
        'Industrial Safety (HSE)',
        'Placement Assistance',
      ],
    },
    {
      title: 'ALL OTHER COURSES',
      targetGraduates: 'All graduates / Open entry',
      description: 'Essential digital literacy, office management, accounting, and basic designing tools for everyday workplace productivity.',
      iconName: 'Monitor',
      colorClass: 'text-indigo-600',
      bgLightClass: 'bg-indigo-50',
      courses: [
        'MS Office Basics',
        'Tally Prime (with GST)',
        'Web Design (HTML/CSS)',
        'Graphic Design basics',
        'DCA Computer Diploma',
        'Career Counselling Sessions',
      ],
    },
  ]

  const handleInquire = () => {
    navigate('/admission')
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courseData.map((category, idx) => (
        <CourseCard
          key={idx}
          title={category.title}
          targetGraduates={category.targetGraduates}
          description={category.description}
          iconName={category.iconName}
          colorClass={category.colorClass}
          bgLightClass={category.bgLightClass}
          courses={category.courses}
          onInquire={handleInquire}
        />
      ))}
    </div>
  )
}
