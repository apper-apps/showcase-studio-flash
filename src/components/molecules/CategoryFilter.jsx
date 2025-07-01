import { motion } from 'framer-motion'

const CategoryFilter = ({ categories, activeCategory, onCategoryChange, className = "" }) => {
  return (
<div className={`flex flex-wrap justify-center gap-2 sm:gap-3 ${className}`}>
      {categories.map((category, index) => (
        <motion.button
          key={category.slug}
          onClick={() => onCategoryChange(category.slug)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`
            px-3 sm:px-6 py-2 sm:py-3 rounded-full font-display font-medium transition-all duration-300 text-sm sm:text-base
            min-h-[44px] flex items-center justify-center
            ${activeCategory === category.slug
              ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25 border border-blue-300/30'
              : 'bg-white/80 backdrop-blur-sm text-slate-700 border border-slate-200/60 hover:border-blue-300/50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md'
            }
          `}
        >
          {category.name}
          {category.count > 0 && (
            <span className={`ml-1 sm:ml-2 px-2 py-1 rounded-full text-xs font-semibold ${
              activeCategory === category.slug
                ? 'bg-white/20 text-white'
                : 'bg-slate-100/80 text-slate-600'
            }`}>
              {category.count}
            </span>
          )}
        </motion.button>
      ))}
    </div>
  )
}

export default CategoryFilter