import { useState, useEffect } from 'react'
import { useSearchParams, Navigate } from 'react-router-dom'
import { getItems } from '../../services/items'

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
        <div className="breadcrumbs">
          {categories.map((category, index) => {
            return (
              <span key={index} className="d-ib breadcrumb">
                {category}
              </span>
            )
          })}
        </div>
        <div className="items bg-white">
          {items.map((item, index) => {
            return (
              <div key={index} className="grid item">
                <img
                  src={
                    item.picture
                      ? item.picture
                      : 'https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.1/mercadolibre/logo__large_plus.png'
                  }
                  alt={item.title}
                />
                <div className="item-info">
                  <div className="item-price">
                    <span className="item-price-currency">$</span>
                    <span className="item-price-amount">
                      {item.price.amount}
                    </span>
                    {item.price.decimals > 0 && (
                      <span className="item-price-decimals">
                        {item.price.decimals}
                      </span>
                    )}
                  </div>
                  <div className="item-title">{item.title}</div>
                </div>

                <div className="item-location">{item.location}</div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Items
