import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Sidenav from './components/partials/Sidenav'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import Tvshows from './components/Tvshows'
import People from './components/People'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="w-full min-h-screen flex bg-black">
      <Sidenav
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              onMenuClick={() => setIsMenuOpen(true)}
            />
          }
        />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </div>
  )
}

export default App