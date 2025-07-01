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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ 
        scale: 1.02,
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
      }}
      onClick={() => onClick(project)}
      className="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/60 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 group min-h-[400px] flex flex-col"
    >
      {/* Image */}
      <div className="relative h-44 sm:h-48 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Featured badge */}
        {project.featured && (
          <motion.div 
            className="absolute top-3 right-3"
            whileHover={{ scale: 1.1 }}
          >
            <Badge variant="warning" size="xs">
              <ApperIcon name="Star" className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          </motion.div>
        )}

        {/* Category badge */}
        <motion.div 
          className="absolute top-3 left-3"
          whileHover={{ scale: 1.05 }}
        >
          <Badge variant={categoryColors[project.category] || 'neural'} size="xs">
            {project.category}
          </Badge>
        </motion.div>

        {/* Hover overlay with action icons */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-3">
            {project.liveUrl && (
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
              >
                <ApperIcon name="ExternalLink" className="w-4 h-4 text-white" />
              </motion.div>
            )}
            {project.githubUrl && (
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
              >
                <ApperIcon name="Github" className="w-4 h-4 text-white" />
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg sm:text-xl font-display font-bold text-slate-800 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
            {project.title}
          </h3>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech, techIndex) => (
            <Badge key={techIndex} size="xs" variant="neural">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 3 && (
            <Badge size="xs" variant="quantum">
              +{project.techStack.length - 3}
            </Badge>
          )}
        </div>

        {/* Stats footer */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
          <div className="flex items-center">
            <ApperIcon name="Eye" className="w-3 h-3 mr-1 text-blue-500" />
            <span className="font-medium">{project.viewCount.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <ApperIcon name="Calendar" className="w-3 h-3 mr-1 text-purple-500" />
            <span className="font-medium">{format(new Date(project.date), 'MMM yyyy')}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard