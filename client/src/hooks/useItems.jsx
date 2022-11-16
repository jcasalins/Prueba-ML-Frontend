import { useState, useEffect } from 'react'
import { getItems } from '../services/items'
function useItems(search) {
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchItems = async () => {
      const products = await getItems(search)
      const listItems = products.items
      const listCategories = products.categories
      if (listItems.length) {
        setItems(listItems)
        setCategories(listCategories)
        setLoading(false)
      } else {
        setLoading(true)
      }
    }
    fetchItems()
  }, [search])
  return { items, categories, loading }
}

export default useItems
