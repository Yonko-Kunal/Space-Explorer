// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Import router components
import { AuthProvider } from './contexts/AuthContext'
import Hero from './Components/Hero/Hero.jsx'
import MarsRover from './Pages/MarsRover.jsx'
import Login from './Components/Auth/Login.jsx'
import Signup from './Components/Auth/Signup.jsx'
import ProtectedRoute from './Components/Auth/ProtectedRoute.jsx'
import Footer from './Components/Footer/Footer.jsx'

function App() {
  return (
    <AuthProvider>
      <Router> {/* Wrap app in Router for navigation */}
        <Routes>
          {/* Main route for the Hero component */}
          <Route path="/" element={<Hero />} />

          {/* Authentication routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected route for MarsRover page */}
          <Route
            path="/marsrover"
            element={
              <ProtectedRoute>
                <MarsRover />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  )
}

export default App
