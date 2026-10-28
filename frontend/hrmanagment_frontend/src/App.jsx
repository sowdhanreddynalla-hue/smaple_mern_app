import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import AdminHome from './pages/AdminHome.jsx'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Login from './pages/Login'
import HrHome from './pages/HrHome.jsx'
import EmpHome from './pages/empHome.jsx'


function App() {
  return (
    <div>
      <Header />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/hrhome" element={<HrHome />} />
        <Route path="/emphome" element={<EmpHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adminlogin" element={<AdminLogin ></AdminLogin> }></Route>
        <Route path="/adminhome" element={<AdminHome></AdminHome>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;