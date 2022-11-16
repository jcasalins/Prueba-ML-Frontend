import PropTypes from 'prop-types'
function Main({ children }) {
  return (
    <main className="h-screen px-15">
      <div className="container mx-auto">{children}</div>
    </main>
  )
}
Main.prototype = {
  children: PropTypes.node.isRequired
}

export default Main
