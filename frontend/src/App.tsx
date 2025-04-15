import BackToTop from "./components/backToTop"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="bg-gradient-to-br from-green-50 to-white min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop/>
    </div>
  )
}

export default App
