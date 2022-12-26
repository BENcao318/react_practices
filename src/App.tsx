import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { JobFeedPage } from './Pages/JobFeedPage'
import { SelectAllCheckBoxesPage } from './Pages/SelectAllCheckBoxesPage'
import { UseOutsideClickPage } from './Pages/UseOutsideClickPage'

function App() {
  return (
    // ReactRoutes
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobfeed" element={<JobFeedPage />} />
        <Route
          path="/selectallcheckboxes"
          element={<SelectAllCheckBoxesPage />}
        />
        <Route path="/useoutsideclick" element={<UseOutsideClickPage />} />
      </Routes>
    </Router>
  )
}

export default App
