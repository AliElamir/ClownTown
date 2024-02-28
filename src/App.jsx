import './App.css'
import ThemePark from './pages/ThemePark'
import Clown from './components/Clown'
import Home from './pages/Home'
import NavBar from './components/Navbar'
import RoomDetail from './pages/RoomDetail'
import Form from './components/Form'
import Book from './components/Book'
import { Route, Routes } from 'react-router-dom'
import Thanks from './pages/thanks'

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
            <Route path="/rooms/:id" element={<RoomDetail />} />
            <Route path="/form" element={<Form />} />
            <Route path="/room/book/:id" element={<Book Clown />} />
            <Route path="/thanks" element={<Thanks />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
