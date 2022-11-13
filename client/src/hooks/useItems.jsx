import { useState, useEffect } from 'react'
import { getItems } from '../services/items'
function useItems(search) {
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchItems = async () => {
      const products = await getItems(search)
      const { items, categories } = products
      if (items.length) {
        setItems(items)
        setCategories(categories)
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
