import { useState, useEffect } from 'react'
import { getItem } from '../services/items'
function useItem(id) {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const fetchItem = async () => {
      const product = await getItem(id)
      const pItem = product.item
      const pCategories = product.categories
      if (pItem) {
        setItem(pItem)
        setCategories(pCategories)
      }
      setLoading(false)
    }
    fetchItem()
  }, [id])
  return { item, categories, loading }
}

export default useItem
