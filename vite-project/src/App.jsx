import { useState } from 'react'
import Header from './components/Header'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import './App.css'
import Contact from './pages/Contact'

function App() {
  // const currentPage = "About";
  const [currentPage, setCurrentPage] = useState("About")
  
  function render () {
    if(currentPage == "About") {
      return (
        <About></About>
      )
    }
    else if(currentPage == "Portfolio") {
      return (
        <Portfolio></Portfolio>
      )
    }
    else if(currentPage == "Contact") {
      return (
        <Contact></Contact>
      )
    }
  }


  return (
    <>
      <Header
        setCurrentPage={setCurrentPage}
      ></Header>
      <main>
        {render()}
      </main>
    </>
  )
}

export default App