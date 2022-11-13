const items = {}

items.author = {
  name: 'Jairo',
  lastname: 'Casalins'
}

items.getItemsApi = async (search) => {
  const mlq = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=4`
  )
    .then((res) => res.json())
    .then((data) => data.results)
    .catch((err) => {
      return { error: err.message }
    })
  return mlq || []
}

items.getCategories = async (search) => {
  const mlq = await fetch(`https://api.mercadolibre.com/categories/${search}`)
    .then((res) => res.json())
    .then((data) => data.path_from_root)
    .catch((err) => {
      return { error: err.message }
    })

  const categories = mlq.map((category) => category.name)
  return categories
}

items.getItemById = async (id) => {
  const mlq = await fetch(`https://api.mercadolibre.com/items/${id}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      return { error: err.message }
    })
  return mlq
}

items.getItemDescription = async (id) => {
  const mlq = await fetch(
    `https://api.mercadolibre.com/items/${id}/description`
  )
    .then((res) => res.json())
    .catch((err) => {
      return { error: err.message }
    })

  return mlq
}

export default items
