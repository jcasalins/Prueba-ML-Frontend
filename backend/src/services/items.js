import axiosInstance from '../services/config.js'
const items = {}
items.author = {
  name: 'Jairo',
  lastname: 'Casalins'
}

items.getItemsApi = async (search) => {
  const params = {}
  params.limit = 4
  if (search && search !== '') params.q = search
  const mlq = await axiosInstance
    .get('/sites/MLA/search', { params })
    .then((res) => res.data.results)
    .catch((err) => {
      return {
        status: err.status,
        message: err.message
      }
    })
  return mlq || []
}

items.getCategories = async (search) => {
  const mlq = await axiosInstance
    .get(`/categories/${search}`)
    .then((res) => res.data.path_from_root)
    .catch((err) => {
      return {
        status: err.status,
        message: err.message
      }
    })
  const categories = mlq.map((category) => category.name)
  return categories
}

items.getItemById = async (id) => {
  const mlq = await axiosInstance
    .get(`/items/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      return {
        status: err.status,
        message: err.message
      }
    })
  return mlq
}

items.getItemDescription = async (id) => {
  const mlq = await axiosInstance
    .get(`/items/${id}/description`)
    .then((res) => res.data)
    .catch((err) => {
      return {
        status: err.status,
        message: err.message
      }
    })
  return mlq
}

export default items
