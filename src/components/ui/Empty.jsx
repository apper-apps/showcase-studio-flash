import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Empty = ({ 
  title = "No projects found", 
  description = "Try adjusting your search or filter criteria", 
  onAction,
  actionText = "View All Projects",
  showAction = true 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-[400px] px-6 text-center"
    >
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl scale-110" />
        <div className="relative bg-gradient-to-r from-primary to-accent p-8 rounded-full">
          <ApperIcon name="Search" className="w-16 h-16 text-white" />
        </div>
      </div>

      <h3 className="text-3xl font-display font-bold gradient-text mb-4">
        {title}
      </h3>
      
      <p className="text-slate-600 text-lg mb-8 max-w-md">
        {description}
      </p>

      {showAction && (
        <motion.button
          onClick={onAction}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 10px 25px -5px rgba(91, 33, 182, 0.3)",
            background: "linear-gradient(135deg, #5B21B6 0%, #F59E0B 100%)"
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-lg font-display font-semibold shadow-premium-lg hover:shadow-premium-xl transition-all duration-200 flex items-center gap-3"
        >
          <ApperIcon name="Grid3x3" className="w-5 h-5" />
          {actionText}
        </motion.button>
      )}

      <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <ApperIcon name="Lightbulb" className="w-4 h-4" />
          <span>Try different keywords</span>
        </div>
        <div className="flex items-center gap-2">
          <ApperIcon name="Filter" className="w-4 h-4" />
          <span>Clear filters</span>
        </div>
        <div className="flex items-center gap-2">
          <ApperIcon name="Eye" className="w-4 h-4" />
          <span>Browse all categories</span>
        </div>
      </div>
    </motion.div>
  )
}

export default Empty