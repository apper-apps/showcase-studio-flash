import { motion } from 'framer-motion'

const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'sm',
  className = '',
  ...props 
}) => {
  const baseClasses = "inline-flex items-center font-medium rounded-full transition-all duration-200"
  
const variantClasses = {
    default: "bg-slate-100/80 backdrop-blur-sm text-slate-700 border border-slate-200/60",
    primary: "bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 border border-blue-300/30 backdrop-blur-sm",
    success: "bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-700 border border-green-300/30 backdrop-blur-sm",
    warning: "bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-700 border border-amber-300/30 backdrop-blur-sm",
    error: "bg-gradient-to-r from-red-500/10 to-pink-500/10 text-red-700 border border-red-300/30 backdrop-blur-sm",
    neural: "bg-gradient-to-r from-blue-600/15 to-cyan-500/15 text-blue-800 border border-blue-400/40 backdrop-blur-sm",
    quantum: "bg-gradient-to-r from-purple-600/15 to-pink-500/15 text-purple-800 border border-purple-400/40 backdrop-blur-sm",
    circuit: "bg-gradient-to-r from-green-600/15 to-emerald-500/15 text-green-800 border border-green-400/40 backdrop-blur-sm"
  }
  
  const sizeClasses = {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base"
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={classes}
      {...props}
    >
      {children}
    </motion.span>
  )
}

export default Badge