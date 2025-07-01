import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import ProjectGrid from "@/components/organisms/ProjectGrid";
import ProjectModal from "@/components/organisms/ProjectModal";
import CategoryFilter from "@/components/molecules/CategoryFilter";
import SearchBar from "@/components/molecules/SearchBar";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import { projectService } from "@/services/api/projectService";
import { categoryService } from "@/services/api/categoryService";
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
  const [isTransitioning, setIsTransitioning] = useState(false)

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
  const handleCategoryChange = async (category) => {
    setIsTransitioning(true)
    setActiveCategory(category)
    navigate(category === 'all' ? '/' : `/category/${category}`)
    // Small delay to allow for smooth transition
    setTimeout(() => setIsTransitioning(false), 100)
  }

  const handleSearch = useCallback((query) => {
    setSearchQuery(query)
  }, [])

const handleProjectClick = async (project) => {
    try {
      // Increment view count
      await projectService.incrementViewCount(project.Id)
      setSelectedProject(project)
      setIsModalOpen(true)
      navigate(`/project/${project.Id}`)
    } catch (err) {
      // Still show project even if view count fails
      setSelectedProject(project)
      setIsModalOpen(true)
      navigate(`/project/${project.Id}`)
    }
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
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-7xl mx-auto px-6 py-16">
          {/* Filters Skeleton */}
          <div className="mb-16 space-y-8">
            <div className="flex flex-wrap justify-center gap-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-10 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded-full w-24 animate-pulse bg-[length:200%_100%]" style={{
                  animation: 'shimmer 2s infinite linear',
                  backgroundImage: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)'
                }} />
              ))}
            </div>
            <div className="max-w-md mx-auto">
              <div className="h-12 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded-lg animate-pulse bg-[length:200%_100%]" style={{
                animation: 'shimmer 2s infinite linear',
                backgroundImage: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)'
              }} />
            </div>
          </div>
          
          <ProjectGrid loading={true} />
        </main>
        <Footer />
        
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

if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-7xl mx-auto px-6 py-16">
          <Error 
            message={error}
            onRetry={handleRetry}
          />
        </main>
        <Footer />
      </div>
    )
  }

return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Filters */}
        <div className="mb-12 sm:mb-16 space-y-6 sm:space-y-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
          
          <div className="px-2">
            <SearchBar
              onSearch={handleSearch}
              placeholder="Search projects by name, technology, or category..."
            />
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <ProjectGrid
            key={activeCategory + searchQuery}
            projects={filteredProjects}
            onProjectClick={handleProjectClick}
            onShowAll={handleShowAll}
            isTransitioning={isTransitioning}
          />
        </AnimatePresence>
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