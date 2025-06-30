import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import ApperIcon from '@/components/ApperIcon'
import Badge from '@/components/atoms/Badge'
import Button from '@/components/atoms/Button'
import { format } from 'date-fns'

const ProjectModal = ({ project, isOpen, onClose }) => {
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

  const categoryColors = {
    apps: 'primary',
    games: 'success',
    ecommerce: 'warning',
    websites: 'error'
  }

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-2xl shadow-premium-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <ApperIcon name="X" className="w-5 h-5 text-white" />
            </button>

            {/* Header image */}
            <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
              <img
                src={project.images?.[0] || project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Title overlay */}
              <div className="absolute bottom-6 left-6 right-16">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant={categoryColors[project.category] || 'default'}>
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge variant="warning">
                      <ApperIcon name="Star" className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                  {project.title}
                </h2>
                <div className="flex items-center text-white/80 text-sm">
                  <ApperIcon name="Calendar" className="w-4 h-4 mr-2" />
                  {format(new Date(project.date), 'MMMM yyyy')}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-display font-bold text-secondary mb-4">
                  About This Project
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              {/* Tech stack */}
              <div className="mb-8">
                <h3 className="text-xl font-display font-bold text-secondary mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, index) => (
                    <Badge key={index} size="md">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Additional images */}
              {project.images && project.images.length > 1 && (
                <div className="mb-8">
                  <h3 className="text-xl font-display font-bold text-secondary mb-4">
                    Project Gallery
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.slice(1).map((image, index) => (
                      <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 2}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="flex items-center gap-3"
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
                    className="flex items-center gap-3"
                  >
                    <ApperIcon name="Github" className="w-5 h-5" />
                    View Source Code
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal