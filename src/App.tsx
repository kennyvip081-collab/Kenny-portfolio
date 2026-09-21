
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Project from './Projects'
import Home from './Home'
import Skil from './Skil'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skill" element={<Skil />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

