import React, { lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Page404 } from '../router/index'

const HeroesList = lazy(() => import('../components/HeroesList/HeroesList'))

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/heroes" element={<HeroesList />} />
        <Route path="*" element={<HeroesList />} />
        {/* <Page404 /> */}
      </Routes>
    </Router>
  )
}

export default App
