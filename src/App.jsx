import './App.css'
import ThemePark from './pages/ThemePark'
import Clown from './components/Clown'
import Home from './pages/Home'
import NavBar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/themepark" element={<ThemePark />} />
            <Route path="/clowns" element={<Clown />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
