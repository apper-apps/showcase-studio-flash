import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  loading = false,
  ...props 
}) => {
  const baseClasses = "font-display font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  
const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white hover:shadow-xl hover:shadow-blue-500/25 focus:ring-blue-500/30 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700",
    secondary: "border-2 border-blue-500/60 text-blue-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white focus:ring-blue-500/30 backdrop-blur-sm bg-white/60",
    ghost: "text-slate-600 hover:bg-slate-100/80 hover:backdrop-blur-sm focus:ring-slate-500/30 hover:text-slate-800",
    danger: "bg-gradient-to-r from-red-500 to-pink-600 text-white hover:shadow-xl hover:shadow-red-500/25 focus:ring-red-500/30",
    neural: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-xl hover:shadow-cyan-500/25 focus:ring-cyan-500/30",
    quantum: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl hover:shadow-purple-500/25 focus:ring-purple-500/30"
  }
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm min-h-[40px]",
    md: "px-6 py-3 text-base min-h-[44px]",
    lg: "px-8 py-4 text-lg min-h-[48px]"
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        children
      )}
    </motion.button>
  )
}

export default Button