import React from 'react'
import { useParams } from 'react-router-dom'
import useItem from '../../hooks/useItem'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import ItemDetails from '../../components/itemDetails/ItemDetails'
import ItemNotFound from '../../components/itemDetails/itemNotFound/ItemNotFound'
import Main from '../../components/main/Main'
import Loading from '../../components/loading/Loading'
import SEO from '../../components/SEO/Index' 

function Item() {
  const { id } = useParams()
  const { item, categories, loading } = useItem(id)
  if (loading) return <Main><Loading /></Main>
  return (
    <Main>
      { item ? (
        <>
          <SEO title={item.title} description={item.description}/>
          <Breadcrumbs categories={categories} />
          <ItemDetails item={item} />
        </>
      ) : (
        <>
          <SEO title='No se encontró ningún Producto'/>
          <ItemNotFound />
        </>
      )}
      
    </Main>
  )
}

export default Item
