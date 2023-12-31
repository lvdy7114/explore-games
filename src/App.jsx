import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import GameDetails from "./pages/GameDetails"
import ErrorPage from "./pages/ErrorPage"

function App() {
  return ( 
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="games/:slug" element={<GameDetails />} />
          <Route path="*" element={<ErrorPage />} />
          </Route> 
        </Routes>
      </div>
    </Router>
  
  );                               
}

export default App
