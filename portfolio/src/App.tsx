import "./styles/Font.css"
import GlobalStyle from './styles/Global'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/pages/Home'
import AboutMe from './components/pages/AboutMe';
import BlogPosts from './components/pages/BlogPosts';
import Certificates from './components/pages/Certificates';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Reusable from "./components/pages/Reusable";

function App() {
  return (
    <>
      <GlobalStyle />

      <Router>
      <Routes>
        <Route path="/" Component={Reusable} />
        <Route path="/home" Component={Home} />
        <Route path="/about" Component={AboutMe} />
        <Route path="/blog" Component={BlogPosts} />
        <Route path="/certificates" Component={Certificates} />
        <Route path="/contact" Component={Contact} />
        <Route path="/projects" Component={Projects} />
        <Route path="/skills" Component={Skills} />
      </Routes>
    </Router>

    </>
  )
}

export default App
