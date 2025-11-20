import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import BarNav from "./components/BarNav/BarNav"
import HomePage from './components/HomePage/HomePage'
import FooterBar from './components/FooterBar/FooterBar'
import AboutUs from './components/AboutUs/AboutUs'
import NewsPage from './components/NewsPage/NewsPage'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import Hall from './components/Hall/Hall'

function App() {
  return (
    <>
      <BarNav/>
      <Hall/>
      <FooterBar/>
    </>
  )
}

export default App