import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"

type props = {
  children: React.ReactNode,
  showHero?: boolean
}

const Layout = ({children, showHero=false}:props) => {
  return (
    <div className="min-h-screen">
      <Header/>
      {showHero && <Hero/>}
      <div className="container mx-auto min-h-screen py-4">
        {children}
      </div>
      <Footer/>
      </div>
  )
}

export default Layout