import { useState, useEffect } from 'react'
import { getItem } from '../services/items'
function useItems(id) {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const fetchItem = async () => {
      const product = await getItem(id)
      const { item, categories } = product
      if (item) {
        setItem(item)
        setCategories(categories)
        setLoading(false)
      } else {
        setLoading(true)
      }
    }
    fetchItem()
  }, [id])
  return { item, categories, loading }
}

export default useItems
