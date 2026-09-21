import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Project from './Projects'
import Home from './Home'
import Skil from './Skil'

function App() {

  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? 'app dark' : 'app light'}>

      <Router>

        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/skill" element={<Skil />} />
        </Routes>

        <Footer />

      </Router>

    </div>
  )
}

export default App