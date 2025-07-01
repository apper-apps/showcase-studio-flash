import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Header = () => {
  return (
<header className="relative bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/30 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-cyan-500/5 to-transparent rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* AI-Inspired Logo */}
          <motion.div 
            className="inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl mb-6 sm:mb-8 shadow-lg shadow-blue-500/25"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ApperIcon name="Cpu" className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
          </motion.div>

          {/* Modern heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 sm:mb-6">
            AI Studio Portfolio
          </h1>

          {/* Enhanced subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            Explore cutting-edge digital innovations powered by AI, machine learning, and modern technology. 
            Each project represents the future of intelligent software development.
          </p>

          {/* Modern Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                16+
              </div>
              <div className="text-slate-600 font-medium text-sm sm:text-base">Projects</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                8
              </div>
              <div className="text-slate-600 font-medium text-sm sm:text-base">Categories</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                30+
              </div>
              <div className="text-slate-600 font-medium text-sm sm:text-base">Technologies</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                AI
              </div>
              <div className="text-slate-600 font-medium text-sm sm:text-base">Powered</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-slate-400"
        >
          <span className="text-xs sm:text-sm font-medium mb-2">Discover innovations</span>
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full p-1">
            <motion.div 
              className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mx-auto"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </header>
  )
}

export default Header