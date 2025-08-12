import Header from "./components/Header.jsx/Header"
import Footer from "./components/Footer/Footer"
import HeroPage from './pages/HeroPage/HeroPage'

function App() {
  

  return (
    <div className="h-full bg-[url(assets/earth.jpg)] w-full bg-cover bg-center">
    <Header />
    <HeroPage />
    <Footer />
    </div>
  )
}

export default App
