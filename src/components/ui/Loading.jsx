import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      {/* Header skeleton */}
      <div className="text-center mb-16">
        <div className="h-12 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded-lg w-96 mx-auto mb-4 animate-pulse bg-[length:200%_100%]" style={{
          animation: 'shimmer 2s infinite linear',
          backgroundImage: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)'
        }} />
        <div className="h-6 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded w-64 mx-auto animate-pulse bg-[length:200%_100%]" style={{
          animation: 'shimmer 2s infinite linear',
          backgroundImage: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)'
        }} />
      </div>

      {/* Filter bar skeleton */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-10 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded-full w-24 animate-pulse bg-[length:200%_100%]" style={{
            animation: 'shimmer 2s infinite linear',
            backgroundImage: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)'
          }} />
        ))}
      </div>

      {/* Search bar skeleton */}
      <div className="max-w-md mx-auto mb-16">
        <div className="h-12 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded-lg animate-pulse bg-[length:200%_100%]" style={{
          animation: 'shimmer 2s infinite linear',
          backgroundImage: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)'
        }} />
      </div>

      {/* Project grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-premium"
          >
            {/* Image skeleton */}
            <div className="h-48 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse bg-[length:200%_100%]" style={{
              animation: 'shimmer 2s infinite linear',
              backgroundImage: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)'
            }} />
            
            {/* Content skeleton */}
            <div className="p-6">
              <div className="h-6 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded w-3/4 mb-3 animate-pulse bg-[length:200%_100%]" style={{
                animation: 'shimmer 2s infinite linear',
                backgroundImage: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)'
              }} />
              <div className="h-4 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded w-full mb-2 animate-pulse bg-[length:200%_100%]" style={{
                animation: 'shimmer 2s infinite linear',
                backgroundImage: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)'
              }} />
              <div className="h-4 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded w-2/3 mb-4 animate-pulse bg-[length:200%_100%]" style={{
                animation: 'shimmer 2s infinite linear',
                backgroundImage: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)'
              }} />
              
              {/* Tech tags skeleton */}
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="h-6 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded-full w-16 animate-pulse bg-[length:200%_100%]" style={{
                    animation: 'shimmer 2s infinite linear',
                    backgroundImage: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)'
                  }} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  )
}

export default Loading