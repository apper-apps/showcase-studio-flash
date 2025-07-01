import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '@/components/molecules/ProjectCard'
import Empty from '@/components/ui/Empty'

const ProjectGrid = ({ projects, onProjectClick, onShowAll, loading = false, isTransitioning = false }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <ProjectCard key={i} loading={true} index={i - 1} />
        ))}
      </div>
    )
  }

  if (projects.length === 0) {
    return (
      <Empty
        title="No projects found"
        description="Try adjusting your search or filter criteria to discover amazing projects."
        onAction={onShowAll}
        actionText="View All Projects"
      />
    )
  }

return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ 
        duration: 0.3,
        delayChildren: 0.2,
        staggerChildren: 0.08
      }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.Id}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ 
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: index * 0.05
          }}
          whileHover={{ y: -8 }}
        >
          <ProjectCard
            project={project}
            onClick={onProjectClick}
            index={index}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ProjectGrid