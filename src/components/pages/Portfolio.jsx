import { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { projectService } from '@/services/api/projectService'
import { categoryService } from '@/services/api/categoryService'
import Header from '@/components/organisms/Header'
import CategoryFilter from '@/components/molecules/CategoryFilter'
import SearchBar from '@/components/molecules/SearchBar'
import ProjectGrid from '@/components/organisms/ProjectGrid'
import ProjectModal from '@/components/organisms/ProjectModal'
import Footer from '@/components/organisms/Footer'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'

const Portfolio = () => {
  const { category: urlCategory, id: urlProjectId } = useParams()
  const navigate = useNavigate()

  // State
  const [projects, setProjects] = useState([])
  const [categories, setCategories] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Load initial data
  const loadData = useCallback(async () => {
    try {
      setLoading(true)
      setError('')
      
      const [projectsData, categoriesData] = await Promise.all([
        projectService.getAll(),
        categoryService.getAll()
      ])
      
      setProjects(projectsData)
      setCategories(categoriesData)
      setFilteredProjects(projectsData)
      
      // Handle URL category
      if (urlCategory && urlCategory !== 'all') {
        setActiveCategory(urlCategory)
        const categoryProjects = await projectService.getByCategory(urlCategory)
        setFilteredProjects(categoryProjects)
      }
      
      // Handle URL project
      if (urlProjectId) {
        const project = await projectService.getById(urlProjectId)
        setSelectedProject(project)
        setIsModalOpen(true)
      }
      
    } catch (err) {
      setError(err.message || 'Failed to load portfolio data')
      toast.error('Failed to load portfolio data')
    } finally {
      setLoading(false)
    }
  }, [urlCategory, urlProjectId])

  useEffect(() => {
    loadData()
  }, [loadData])

  // Filter projects based on category and search
  useEffect(() => {
    let filtered = projects

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(project => project.category === activeCategory)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.techStack.some(tech => tech.toLowerCase().includes(query)) ||
        project.category.toLowerCase().includes(query)
      )
    }

    setFilteredProjects(filtered)
  }, [projects, activeCategory, searchQuery])

  // Handlers
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    navigate(category === 'all' ? '/' : `/category/${category}`)
  }

  const handleSearch = useCallback((query) => {
    setSearchQuery(query)
  }, [])

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    navigate(`/project/${project.Id}`)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    // Navigate back to current category view
    navigate(activeCategory === 'all' ? '/' : `/category/${activeCategory}`)
  }

  const handleShowAll = () => {
    setActiveCategory('all')
    setSearchQuery('')
    navigate('/')
  }

  const handleRetry = () => {
    loadData()
  }

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error message={error} onRetry={handleRetry} />
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Filters */}
        <div className="mb-16 space-y-8">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
          
          <SearchBar
            onSearch={handleSearch}
            placeholder="Search projects by name, technology, or category..."
          />
        </div>

        {/* Projects Grid */}
        <ProjectGrid
          projects={filteredProjects}
          onProjectClick={handleProjectClick}
          onShowAll={handleShowAll}
        />
      </main>

      <Footer />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  )
}

export default Portfolio