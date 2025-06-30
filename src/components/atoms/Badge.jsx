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
    default: "bg-slate-100 text-slate-700 border border-slate-200",
    primary: "bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20",
    success: "bg-gradient-to-r from-success/10 to-success/20 text-success border border-success/20",
    warning: "bg-gradient-to-r from-warning/10 to-warning/20 text-warning border border-warning/20",
    error: "bg-gradient-to-r from-error/10 to-error/20 text-error border border-error/20"
  }
  
  const sizeClasses = {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-1 text-sm",
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