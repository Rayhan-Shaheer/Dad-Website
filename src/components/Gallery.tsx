import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Image as ImageIcon, X, Video } from 'lucide-react'

interface GalleryItem {
  id: number
  type: 'image' | 'video'
  url: string
  thumbnail?: string
  caption: string
}

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all')
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null)

  const items: GalleryItem[] = [
    // Videos
    {
      id: 1,
      type: 'video',
      url: 'https://center.isdmgroup.in/wp-content/uploads/2022/10/WhatsApp-Video-2022-10-04-at-8.28.05-AM-1.mp4',
      caption: 'Student Training Session - Practical Coaching',
    },
    {
      id: 2,
      type: 'video',
      url: 'https://center.isdmgroup.in/wp-content/uploads/2022/12/VIDEO-2022-12-18-18-14-58-1.mp4',
      caption: 'SSDC Center Classroom Seminar',
    },
    {
      id: 3,
      type: 'video',
      url: 'https://center.isdmgroup.in/wp-content/uploads/2022/12/VIDEO-2022-12-18-18-08-43.mp4',
      caption: 'Vocational Training Workshop Tour',
    },
    {
      id: 4,
      type: 'video',
      url: 'https://center.isdmgroup.in/wp-content/uploads/2022/12/VIDEO-2022-12-18-18-10-43.mp4',
      caption: 'Practical Workshop Demonstration',
    },
    // Images
    {
      id: 5,
      type: 'image',
      url: 'https://center.isdmgroup.in/wp-content/uploads/2022/10/IMG_1088-2-828x828.jpg',
      caption: 'Classroom Instruction Lecture',
    },
    {
      id: 6,
      type: 'image',
      url: 'https://center.isdmgroup.in/wp-content/uploads/2022/10/IMG_1099-828x828.jpg',
      caption: 'Technical Lab Workstation',
    },
    {
      id: 7,
      type: 'image',
      url: 'https://center.isdmgroup.in/wp-content/uploads/2022/10/IMG_1101-828x828.jpg',
      caption: 'Practical Workshop Piping Systems',
    },
    {
      id: 8,
      type: 'image',
      url: 'https://center.isdmgroup.in/wp-content/uploads/2022/10/IMG_1100-828x828.jpg',
      caption: 'Student Drafting AutoCAD Station',
    },
    {
      id: 9,
      type: 'image',
      url: 'https://center.isdmgroup.in/wp-content/uploads/2022/10/IMG_1102-828x828.jpg',
      caption: 'Independent Study Area',
    },
    {
      id: 10,
      type: 'image',
      url: 'https://center.isdmgroup.in/wp-content/uploads/2022/10/IMG_1103-786x786.jpg',
      caption: 'Group Learning Discussions',
    },
    {
      id: 11,
      type: 'image',
      url: 'https://center.isdmgroup.in/wp-content/uploads/2022/10/IMG_1089-2-828x828.jpg',
      caption: 'Classroom Lecture Seminar',
    },
    {
      id: 12,
      type: 'image',
      url: 'https://center.isdmgroup.in/wp-content/uploads/2022/10/IMG_1088-1-1-828x828.jpg',
      caption: 'Practical Training Sessions',
    },
    {
      id: 13,
      type: 'image',
      url: 'https://center.isdmgroup.in/wp-content/uploads/2022/10/IMG_1089-1-828x828.jpg',
      caption: 'Professional Coach Guidance',
    },
    {
      id: 14,
      type: 'image',
      url: 'https://center.isdmgroup.in/wp-content/uploads/2022/10/IMG_1088-1-828x828.jpg',
      caption: 'Vocational Skill Seminars',
    },
    {
      id: 15,
      type: 'image',
      url: 'https://center.isdmgroup.in/wp-content/uploads/2022/10/IMG_1089-828x828.jpg',
      caption: 'Classroom Activities Overview',
    },
    {
      id: 16,
      type: 'image',
      url: 'https://center.isdmgroup.in/wp-content/uploads/2022/12/PHOTO-2022-12-16-21-53-36-1-641x641.jpg',
      caption: 'Certified Course Batch Photo',
    },
    {
      id: 17,
      type: 'image',
      url: 'https://center.isdmgroup.in/wp-content/uploads/2022/12/PHOTO-2022-12-16-21-53-36-2-653x653.jpg',
      caption: 'SSDC Mysore Student Group',
    },
  ]

  const filteredItems = filter === 'all' ? items : items.filter((item) => item.type === filter)

  return (
    <div className="space-y-12">
      
      {/* Category Tabs */}
      <div className="flex justify-center space-x-3 sm:space-x-4 border-b border-slate-100 pb-6">
        {[
          { id: 'all', name: 'All Media' },
          { id: 'image', name: 'Photos' },
          { id: 'video', name: 'Videos' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
              filter === tab.id
                ? 'bg-primary text-white shadow-md shadow-primary/20'
                : 'bg-white text-slate-600 hover:text-primary hover:bg-slate-50 border border-slate-200/65'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Grid Container */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer transform hover:-translate-y-1 transition-all duration-300 aspect-square"
            >
              
              {/* Media element or video placeholder */}
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center relative">
                  {/* Mock thumbnail / video cover */}
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" />
                  <Video className="h-10 w-10 text-white/50 group-hover:text-white transition-colors" />
                  <span className="text-[10px] uppercase font-bold text-white/40 group-hover:text-white/60 tracking-widest mt-2">
                    Play Training Video
                  </span>
                  
                  {/* Absolute Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary hover:bg-primary-hover p-4 rounded-full text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-5 w-5 fill-current" />
                    </div>
                  </div>
                </div>
              )}

              {/* Hover overlay description */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <div className="flex items-center space-x-2 text-[10px] font-bold text-accent uppercase tracking-wider mb-1">
                  {item.type === 'image' ? <ImageIcon className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                  <span>{item.type}</span>
                </div>
                <p className="text-xs font-medium leading-relaxed truncate">{item.caption}</p>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            {/* Close Overlay Trigger */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setActiveItem(null)} />
            
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl w-full bg-slate-900/40 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 bg-slate-900/60 p-2.5 rounded-full text-white hover:bg-slate-800 transition-colors z-20 focus:outline-none cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Content Box */}
              <div className="aspect-video w-full flex items-center justify-center bg-black">
                {activeItem.type === 'image' ? (
                  <img
                    src={activeItem.url}
                    alt={activeItem.caption}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <video
                    src={activeItem.url}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {/* Caption Footer */}
              <div className="bg-slate-900 p-6 text-white text-center">
                <span className="text-[10px] uppercase font-bold text-primary tracking-widest block mb-1">
                  {activeItem.type}
                </span>
                <h4 className="font-semibold text-sm sm:text-base leading-snug">{activeItem.caption}</h4>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  )
}
