
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Admissions from "./pages/Admissions"
import About_school from './pages/About_school'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/about" element={<About_school />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
