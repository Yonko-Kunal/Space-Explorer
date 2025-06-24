// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Import router components
import Hero from './Components/Hero/Hero.jsx'
import MarsRover from './Pages/MarsRover.jsx'
import Footer from './Components/Footer/Footer.jsx'

function App() {
  return (
    <Router> {/* Wrap app in Router for navigation */}
      <Routes>
        {/* Main route for the Hero component */}
        <Route path="/" element={<Hero />} />

        {/* Route for MarsRover page */}
        <Route path="/marsrover" element={<MarsRover />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
