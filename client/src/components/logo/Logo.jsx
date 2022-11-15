import { Link } from "react-router-dom"
import './logo.scss'
function Logo() {
  return (
    <div className="grid content-logo-ML">
      <Link to="/" className="logo-ML">Mercado Libre Colombia - Donde comprar y vender de todo</Link>
    </div>
  )
}

export default Logo
