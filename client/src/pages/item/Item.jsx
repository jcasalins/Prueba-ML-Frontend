import React from 'react'
import { useParams } from 'react-router-dom'
import useItem from '../../hooks/useItem'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import ItemDetails from '../../components/itemDetails/ItemDetails'

function Item() {
  const { id } = useParams()
  const { item, categories, loading } = useItem(id )
  if (loading) return <main>Loading...</main>
  return (
    <main className="h-screen px-15">
      <div className="container mx-auto">
        <Breadcrumbs categories={categories} />
        <ItemDetails item={item} />
      </div>
    </main>
  )
}

export default Item
