import { forwardRef } from 'react'

const Input = forwardRef(({ 
  label, 
  error, 
  className = '', 
  containerClassName = '',
  ...props 
}, ref) => {
  return (
    <div className={`space-y-2 ${containerClassName}`}>
      {label && (
        <label className="block text-sm font-medium text-secondary">
          {label}
        </label>
      )}
      <input
        ref={ref}
className={`
          w-full px-4 py-3 border border-slate-300/60 rounded-xl 
          bg-white/80 backdrop-blur-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/60
          focus:bg-white focus:shadow-lg focus:shadow-blue-500/10
          disabled:bg-slate-50 disabled:cursor-not-allowed
          transition-all duration-300 ease-out
          placeholder:text-slate-400
          ${error ? 'border-red-400/60 focus:ring-red-500/30 focus:border-red-500/60' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1 mt-1">
          <span className="w-1 h-1 bg-red-500 rounded-full"></span>
          {error}
        </p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input