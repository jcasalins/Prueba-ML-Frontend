import { useSearchParams, Navigate } from 'react-router-dom'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import Main from '../../components/main/Main'
import ItemsBox from '../../components/itemsBox/ItemsBox'
import Loading from '../../components/loading/Loading'
import useItems from '../../hooks/useItems'

function Items() {
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')
  if (!search) return <Navigate to="/" />
  const { items, categories, loading } = useItems(search)
  if (loading) return <Main><Loading /></Main>
  return (
    <Main>
      <Breadcrumbs categories={categories} />
      <ItemsBox items={items} />
    </Main>
  )
}

export default Items
