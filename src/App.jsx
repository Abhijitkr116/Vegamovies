import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Sidenav from './components/partials/Sidenav'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import Tvshows from './components/Tvshows'
import People from './components/People'

function App() {
  return (
    <div className="w-full min-h-screen flex bg-[#000000]">
      <Routes>
        <Route path="/" element={<Home />} />
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