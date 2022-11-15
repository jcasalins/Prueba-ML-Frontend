import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/header/Header'
import Home from '../pages/home/Home'
import Items from '../pages/items/Items'
import Item from '../pages/item/Item'
function Index() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/:id" element={<Item />} />
          <Route path="*" element={<main>404 Not Found</main>} />
        </Routes>
      </Router>
    </>
  )
}

export default Index