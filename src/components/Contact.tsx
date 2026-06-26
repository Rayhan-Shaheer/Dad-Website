import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'

export default function Contact() {
  const contactDetails = [
    {
      title: 'Our Location',
      details: 'No. 2 Ground Floor, 2nd Stage, Rajivnagar, Near Al Badar Circle, Mysuru, Karnataka, 570019',
      icon: MapPin,
      link: 'https://maps.google.com/?q=Rajivnagar,+Mysuru,+Karnataka+570019',
      linkLabel: 'Open in Google Maps',
    },
    {
      title: 'Call Center',
      details: '0821-2501258 \n +91 9008819502',
      icon: Phone,
      link: 'tel:08212501258',
      linkLabel: 'Call Now',
    },
    {
      title: 'Email Address',
      details: 'basheer@ssdcmysore.com',
      icon: Mail,
      link: 'mailto:basheer@ssdcmysore.com',
      linkLabel: 'Send Email',
    },
    {
      title: 'Working Hours',
      details: 'Monday - Saturday: \n 10:30 AM - 6:00 PM',
      icon: Clock,
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      
      {/* Contact Cards Column */}
      <div className="lg:col-span-5 space-y-6">
        {contactDetails.map((item, idx) => {
          const Icon = item.icon
          return (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-start space-x-4"
            >
              <div className="bg-primary/10 p-3.5 rounded-xl text-primary shrink-0">
                <Icon className="h-5 w-5" />
              </div>
              
              <div className="space-y-1.5 flex-grow">
                <h4 className="font-bold text-slate-800 text-sm sm:text-base tracking-wide uppercase">
                  {item.title}
                </h4>
                
                <p className="text-slate-500 text-sm font-light leading-relaxed whitespace-pre-line">
                  {item.details}
                </p>

                {item.link && (
                  <a
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-primary hover:text-primary-hover transition-colors mt-2"
                  >
                    <span>{item.linkLabel}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Interactive Google Map Column */}
      <div className="lg:col-span-7 h-[450px] lg:h-auto rounded-3xl overflow-hidden shadow-lg border border-slate-100 relative group">
        
        {/* Injected Map embed matching Rajivnagar, Mysuru */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.6433291244093!2d76.67812167475962!3d12.339798028328657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf707be9975765%3A0xe54d8b9de3194a28!2sRajiv%20Nagar%2C%20Mysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1719323145000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sahar Skill Development Center Mysuru Location Map"
          className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
        />
        
      </div>
      
    </div>
  )
}
