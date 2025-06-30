import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Error = ({ message = "Something went wrong", onRetry, showRetry = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center min-h-[400px] px-6 text-center"
    >
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-error/20 to-warning/20 rounded-full blur-xl scale-110" />
        <div className="relative bg-gradient-to-r from-error to-warning p-6 rounded-full">
          <ApperIcon name="AlertTriangle" className="w-12 h-12 text-white" />
        </div>
      </div>

      <h3 className="text-2xl font-display font-bold text-secondary mb-4 gradient-text">
        Oops! Something went wrong
      </h3>
      
      <p className="text-slate-600 text-lg mb-8 max-w-md">
        {message}
      </p>

      {showRetry && (
        <motion.button
          onClick={onRetry}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-error to-warning text-white px-8 py-3 rounded-lg font-medium shadow-premium-lg hover:shadow-premium-xl transition-all duration-200 flex items-center gap-3"
        >
          <ApperIcon name="RefreshCw" className="w-5 h-5" />
          Try Again
        </motion.button>
      )}

      <div className="mt-12 text-sm text-slate-500">
        <p>If the problem persists, please try refreshing the page or contact support.</p>
      </div>
    </motion.div>
  )
}

export default Error