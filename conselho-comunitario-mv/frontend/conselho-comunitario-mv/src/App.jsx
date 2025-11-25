import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import BarNav from "./components/BarNav/BarNav"
import HomePage from './components/HomePage/HomePage'
import FooterBar from './components/FooterBar/FooterBar'
import AboutUs from './components/AboutUs/AboutUs'
import NewsPage from './components/NewsPage/NewsPage'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import Hall from './components/Hall/Hall'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
    <Router>
        <BarNav />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ProjectsPage" element={<ProjectsPage />} />
          <Route path="/Hall" element={<Hall />} />
          <Route path="/NewsPage" element={<NewsPage />} />
        </Routes>

        <FooterBar/>
      </Router>

    </>
  )
}

export default App