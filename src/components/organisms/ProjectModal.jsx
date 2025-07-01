import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'
import ApperIcon from '@/components/ApperIcon'
import Badge from '@/components/atoms/Badge'
import Button from '@/components/atoms/Button'
import { format } from 'date-fns'
const ProjectModal = ({ project, isOpen, onClose }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [lightboxImage, setLightboxImage] = useState(null)
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const handleImageClick = (image) => {
    setLightboxImage(image)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const categoryColors = {
    apps: 'primary',
    games: 'success',
    ecommerce: 'warning',
    websites: 'error'
  }

return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Enhanced Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-lg"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-y-auto border border-white/20"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
            >
              <ApperIcon name="X" className="w-5 h-5 text-white" />
            </button>

            {/* Header image */}
            <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden rounded-t-3xl">
              <img
                src={project.images?.[0] || project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              
              {/* Title overlay */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-16 sm:right-20">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <Badge variant={categoryColors[project.category] || 'neural'} size="sm">
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge variant="warning" size="sm">
                      <ApperIcon name="Star" className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-1 sm:mb-2">
                  {project.title}
                </h2>
                <div className="flex items-center text-white/80 text-sm">
                  <ApperIcon name="Calendar" className="w-4 h-4 mr-2" />
                  {format(new Date(project.date), 'MMMM yyyy')}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 lg:p-8">
              {/* Description */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-display font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4">
                  About This Project
                </h3>
                <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                  {project.description}
                </p>
              </div>

              {/* Tech stack */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-display font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-3 sm:mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.techStack.map((tech, index) => (
                    <Badge key={index} size="sm" variant="neural">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Image Gallery Carousel */}
              {project.images && project.images.length > 1 && (
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-display font-bold bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent mb-4 sm:mb-6">
                    Project Gallery
                  </h3>
                  
                  {/* Main Carousel */}
                  <div className="mb-4">
                    <Swiper
                      modules={[Navigation, Pagination, Thumbs]}
                      navigation
                      pagination={{ clickable: true }}
                      thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                      className="project-gallery-carousel rounded-2xl overflow-hidden shadow-xl"
                      style={{ height: '300px' }}
                    >
                      {project.images.map((image, index) => (
                        <SwiperSlide key={index}>
                          <div 
                            className="relative w-full h-full cursor-zoom-in group"
                            onClick={() => handleImageClick(image)}
                          >
                            <img
                              src={image}
                              alt={`${project.title} - Image ${index + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                              <ApperIcon 
                                name="ZoomIn" 
                                className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  {/* Thumbnail Navigation */}
                  <Swiper
                    modules={[FreeMode, Thumbs]}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={8}
                    slidesPerView="auto"
                    freeMode
                    watchSlidesProgress
                    className="gallery-thumbnails"
                  >
                    {project.images.map((image, index) => (
                      <SwiperSlide key={index} style={{ width: '60px', height: '45px' }}>
                        <img
                          src={image}
                          alt={`${project.title} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {project.liveUrl && (
                  <Button
                    variant="neural"
                    size="lg"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="flex items-center justify-center gap-3 flex-1"
                  >
                    <ApperIcon name="ExternalLink" className="w-5 h-5" />
                    View Live Project
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="flex items-center justify-center gap-3 flex-1"
                  >
                    <ApperIcon name="Github" className="w-5 h-5" />
                    View Source Code
                  </Button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Lightbox Modal */}
          <AnimatePresence>
            {lightboxImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] lightbox-overlay flex items-center justify-center p-4"
                onClick={closeLightbox}
              >
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 sm:w-12 h-10 sm:h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <ApperIcon name="X" className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </button>
                
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  src={lightboxImage}
                  alt={`${project.title} - Full size`}
                  className="lightbox-image rounded-lg shadow-2xl max-w-[95vw] max-h-[95vh] object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal