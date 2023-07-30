import React from "react"
import { Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom"
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
          <Route path="*" element={<Outlet />} >
          <Route index element={<ErrorPage />} />
          </Route>
          </Route> 
          <Route path="games/:id" element={<GameDetails />} />
        </Routes>
      </div>
    </Router>
  
  );                               
}

export default App
