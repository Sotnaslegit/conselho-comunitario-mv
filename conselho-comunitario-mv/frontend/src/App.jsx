import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'

import BarNav from "./components/BarNav/BarNav"
import HomePage from './components/HomePage/HomePage'
import FooterBar from './components/FooterBar/FooterBar'
import AboutUs from './components/AboutUs/AboutUs'
import NewsPage from './components/NewsPage/NewsPage'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import Hall from './components/Hall/Hall'
import AdminPage from './components/AdminPage/AdminPage'
import LoginPage from './components/LoginPage/LoginPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
    <Router>
        <BarNav />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/hall" element={<Hall />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>

        <FooterBar/>
      </Router>

    </>
  )
}

export default App