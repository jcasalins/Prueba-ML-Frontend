import { useState, useEffect } from 'react'
import { useSearchParams, Navigate } from 'react-router-dom'
import { getItems } from '../../services/items'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import ItemsBox from '../../components/itemsBox/ItemsBox'

function Items() {
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')
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
  if (!search) return <Navigate to="/" />
  if (loading) return <main>Loading...</main>
  return (
    <main className="h-screen px-15">
      <div className="container mx-auto">
        <Breadcrumbs categories={categories} />
        <ItemsBox items={items} />
      </div>
    </main>
  )
}

export default Items
