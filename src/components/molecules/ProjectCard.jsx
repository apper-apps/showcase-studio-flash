import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Badge from '@/components/atoms/Badge'
import { format } from 'date-fns'

const ProjectCard = ({ project, onClick, index = 0, loading = false }) => {
  const categoryColors = {
    apps: 'primary',
    games: 'success',
    ecommerce: 'warning',
    websites: 'error'
  }

  // Loading skeleton
  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-premium"
      >
        {/* Image skeleton */}
        <div className="h-48 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse bg-[length:200%_100%]" style={{
          animation: 'shimmer 2s infinite linear',
          backgroundImage: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)'
        }}>
          {/* Badge skeletons */}
          <div className="absolute top-4 left-4">
            <div className="h-6 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 rounded-full w-16 animate-pulse bg-[length:200%_100%]" style={{
              animation: 'shimmer 2s infinite linear',
              backgroundImage: 'linear-gradient(90deg, #cbd5e1 25%, #f1f5f9 50%, #cbd5e1 75%)'
            }} />
          </div>
          <div className="absolute top-4 right-4">
            <div className="h-6 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 rounded-full w-20 animate-pulse bg-[length:200%_100%]" style={{
              animation: 'shimmer 2s infinite linear',
              backgroundImage: 'linear-gradient(90deg, #cbd5e1 25%, #f1f5f9 50%, #cbd5e1 75%)'
            }} />
          </div>
        </div>
        
        {/* Content skeleton */}
        <div className="p-6">
          {/* Title skeleton */}
          <div className="flex items-start justify-between mb-3">
            <div className="h-6 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded w-3/4 animate-pulse bg-[length:200%_100%]" style={{
              animation: 'shimmer 2s infinite linear',
              backgroundImage: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)'
            }} />
            <div className="flex gap-2 ml-4">
              <div className="h-4 w-4 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded animate-pulse bg-[length:200%_100%]" style={{
                animation: 'shimmer 2s infinite linear',
                backgroundImage: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)'
              }} />
              <div className="h-4 w-4 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded animate-pulse bg-[length:200%_100%]" style={{
                animation: 'shimmer 2s infinite linear',
                backgroundImage: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)'
              }} />
            </div>
          </div>

          {/* Description skeleton */}
          <div className="space-y-2 mb-4">
            <div className="h-4 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded w-full animate-pulse bg-[length:200%_100%]" style={{
              animation: 'shimmer 2s infinite linear',
              backgroundImage: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)'
            }} />
            <div className="h-4 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded w-2/3 animate-pulse bg-[length:200%_100%]" style={{
              animation: 'shimmer 2s infinite linear',
              backgroundImage: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)'
            }} />
          </div>

          {/* Tech stack skeleton */}
          <div className="flex flex-wrap gap-2 mb-4">
            {[1, 2, 3].map((j) => (
              <div key={j} className="h-6 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded-full w-16 animate-pulse bg-[length:200%_100%]" style={{
                animation: 'shimmer 2s infinite linear',
                backgroundImage: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)'
              }} />
            ))}
          </div>

          {/* Date skeleton */}
          <div className="flex items-center">
            <div className="h-3 w-3 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded mr-1 animate-pulse bg-[length:200%_100%]" style={{
              animation: 'shimmer 2s infinite linear',
              backgroundImage: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)'
            }} />
            <div className="h-3 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded w-16 animate-pulse bg-[length:200%_100%]" style={{
              animation: 'shimmer 2s infinite linear',
              backgroundImage: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)'
            }} />
          </div>
        </div>
      </motion.div>
    )
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      onClick={() => onClick(project)}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer shadow-premium hover:shadow-premium-xl transition-all duration-300 group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <Badge variant="warning" size="xs">
              <ApperIcon name="Star" className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <Badge variant={categoryColors[project.category] || 'default'} size="xs">
            {project.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-display font-bold text-secondary group-hover:gradient-text transition-all duration-300">
            {project.title}
          </h3>
          <div className="flex gap-2 ml-4">
            {project.liveUrl && (
              <ApperIcon name="ExternalLink" className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors duration-200" />
            )}
            {project.githubUrl && (
              <ApperIcon name="Github" className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors duration-200" />
            )}
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech, techIndex) => (
            <Badge key={techIndex} size="xs">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 3 && (
            <Badge size="xs" variant="default">
              +{project.techStack.length - 3} more
            </Badge>
          )}
        </div>

        {/* Date */}
        <div className="flex items-center text-xs text-slate-500">
          <ApperIcon name="Calendar" className="w-3 h-3 mr-1" />
          {format(new Date(project.date), 'MMM yyyy')}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard