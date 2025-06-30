import { motion } from 'framer-motion'

const CategoryFilter = ({ categories, activeCategory, onCategoryChange, className = "" }) => {
  return (
    <div className={`flex flex-wrap justify-center gap-3 ${className}`}>
      {categories.map((category, index) => (
        <motion.button
          key={category.slug}
          onClick={() => onCategoryChange(category.slug)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            px-6 py-3 rounded-full font-display font-medium transition-all duration-200
            ${activeCategory === category.slug
              ? 'bg-gradient-to-r from-primary to-accent text-white shadow-premium-lg'
              : 'bg-white text-slate-600 border border-slate-200 hover:border-primary/30 hover:bg-surface'
            }
          `}
        >
          {category.name}
          {category.count > 0 && (
            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
              activeCategory === category.slug
                ? 'bg-white/20 text-white'
                : 'bg-slate-100 text-slate-500'
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