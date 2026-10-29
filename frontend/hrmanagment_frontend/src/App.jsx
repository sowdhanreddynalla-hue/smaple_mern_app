import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import AdminLogin from './pages/AdminLogin'
import AdminHome from './pages/AdminHome'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import HrHome from './pages/HrHome'
import EmpHome from './pages/empHome'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/emphome" element={<EmpHome />} />
        <Route path="/hrhome" element={<HrHome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App