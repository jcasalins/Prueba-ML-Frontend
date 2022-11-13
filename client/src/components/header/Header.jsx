import Search from "../searchBox/Search"
import Logo from '../logo/Logo'
import "./header.scss"
function Header() {
  return (
    <header className="px-15">
      <nav className="grid container mx-auto nav-header py-10">
        <Logo />
        <Search />
      </nav>
    </header>
  )
}

export default Header
