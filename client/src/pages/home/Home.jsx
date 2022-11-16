import Main from '../../components/main/Main'
import SEO from '../../components/SEO/Index'

function Home() {
  return (
    <>
      <SEO title='Home'/>
      <Main>
        <div className="grid justify-center py-40">
          <h1>Mercado Libre - Donde comprar y vender de todo</h1>
        </div>
      </Main>
    </>
  )
}

export default Home
