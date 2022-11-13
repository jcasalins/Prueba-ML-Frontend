import { useSearchParams, Navigate } from 'react-router-dom'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import ItemsBox from '../../components/itemsBox/ItemsBox'
import useItems from '../../hooks/useItems'

function Items() {
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')
  if (!search) return <Navigate to="/" />
  const { items, categories, loading } = useItems(search)
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
