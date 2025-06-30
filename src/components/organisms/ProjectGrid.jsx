import { motion } from 'framer-motion'
import ProjectCard from '@/components/molecules/ProjectCard'
import Empty from '@/components/ui/Empty'

const ProjectGrid = ({ projects, onProjectClick, onShowAll }) => {
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
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.Id}
          project={project}
          onClick={onProjectClick}
          index={index}
        />
      ))}
    </motion.div>
  )
}

export default ProjectGrid