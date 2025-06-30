import projectsData from '@/services/mockData/projects.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const projectService = {
  async getAll() {
    await delay(300)
    return [...projectsData]
  },

  async getById(id) {
    await delay(200)
    const project = projectsData.find(p => p.Id === parseInt(id))
    if (!project) {
      throw new Error('Project not found')
    }
    return { ...project }
  },

  async getByCategory(category) {
    await delay(250)
    if (category === 'all') {
      return [...projectsData]
    }
    return projectsData.filter(p => p.category === category)
  },

  async getFeatured() {
    await delay(200)
    return projectsData.filter(p => p.featured)
  },

  async search(query) {
    await delay(300)
    const searchTerm = query.toLowerCase()
    return projectsData.filter(p => 
      p.title.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm) ||
      p.techStack.some(tech => tech.toLowerCase().includes(searchTerm)) ||
      p.category.toLowerCase().includes(searchTerm)
    )
  },

  async create(projectData) {
    await delay(400)
    const maxId = Math.max(...projectsData.map(p => p.Id))
    const newProject = {
      ...projectData,
      Id: maxId + 1,
      date: new Date().toISOString().split('T')[0],
      featured: false
    }
    projectsData.push(newProject)
    return { ...newProject }
  },

  async update(id, updateData) {
    await delay(350)
    const index = projectsData.findIndex(p => p.Id === parseInt(id))
    if (index === -1) {
      throw new Error('Project not found')
    }
    projectsData[index] = { ...projectsData[index], ...updateData }
    return { ...projectsData[index] }
  },

  async delete(id) {
    await delay(300)
    const index = projectsData.findIndex(p => p.Id === parseInt(id))
    if (index === -1) {
      throw new Error('Project not found')
    }
    const deletedProject = projectsData.splice(index, 1)[0]
return { ...deletedProject }
  },

  async incrementViewCount(id) {
    await delay(100)
    const index = projectsData.findIndex(p => p.Id === parseInt(id))
    if (index === -1) {
      throw new Error('Project not found')
    }
    projectsData[index].viewCount = (projectsData[index].viewCount || 0) + 1
    return { ...projectsData[index] }
  }
}