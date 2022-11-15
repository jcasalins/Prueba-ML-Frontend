import React from 'react'
import { useParams } from 'react-router-dom'
import useItem from '../../hooks/useItem'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import ItemDetails from '../../components/itemDetails/ItemDetails'
import ItemNotFound from '../../components/itemDetails/itemNotFound/ItemNotFound'
import Main from '../../components/main/Main'
import Loading from '../../components/loading/Loading'

function Item() {
  const { id } = useParams()
  const { item, categories, loading } = useItem(id)
  if (loading) return <Main><Loading /></Main>
  console.log(item)
  return (
    <Main>
      { item ? (
        <>
          <Breadcrumbs categories={categories} />
          <ItemDetails item={item} />
        </>
      ) : (
        <ItemNotFound />
      )}
      
    </Main>
  )
}

export default Item
