import categoriesData from '@/services/mockData/categories.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const categoryService = {
  async getAll() {
    await delay(200)
    return [...categoriesData]
  },

  async getById(id) {
    await delay(150)
    const category = categoriesData.find(c => c.Id === parseInt(id))
    if (!category) {
      throw new Error('Category not found')
    }
    return { ...category }
  },

  async getBySlug(slug) {
    await delay(150)
    const category = categoriesData.find(c => c.slug === slug)
    if (!category) {
      throw new Error('Category not found')
    }
    return { ...category }
  },

  async create(categoryData) {
    await delay(300)
    const maxId = Math.max(...categoriesData.map(c => c.Id))
    const newCategory = {
      ...categoryData,
      Id: maxId + 1,
      count: 0
    }
    categoriesData.push(newCategory)
    return { ...newCategory }
  },

  async update(id, updateData) {
    await delay(250)
    const index = categoriesData.findIndex(c => c.Id === parseInt(id))
    if (index === -1) {
      throw new Error('Category not found')
    }
    categoriesData[index] = { ...categoriesData[index], ...updateData }
    return { ...categoriesData[index] }
  },

  async delete(id) {
    await delay(300)
    const index = categoriesData.findIndex(c => c.Id === parseInt(id))
    if (index === -1) {
      throw new Error('Category not found')
    }
    const deletedCategory = categoriesData.splice(index, 1)[0]
    return { ...deletedCategory }
  }
}