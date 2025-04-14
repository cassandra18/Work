import BackToTop from "./components/backToTop"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop/>
    </>
  )
}

export default App
