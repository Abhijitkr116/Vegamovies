import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Sidenav from './components/partials/Sidenav'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import Tvshows from './components/Tvshows'
import People from './components/People'
import MovieDetails from './components/MovieDetails'
import TvDetails from './components/TvDetails'
import PersonDetails from './components/PersonDetails'
import Trailer from './components/partials/Trailer'
import NotFound from './components/NotFound'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'

function App() {
  return (
    <div className="w-full min-h-screen flex bg-[#000000]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movies />}/>
        <Route path='/movie/details/:id' element={<MovieDetails/>}>
          <Route path='/movie/details/:id/trailer' element={<Trailer/>} />
        </Route>
        <Route path="/tv" element={<Tvshows />}/>
        <Route path='/tv/details/:id' element={<TvDetails/>}>
          <Route path='/tv/details/:id/trailer' element={<Trailer/>} />
        </Route>
        <Route path="/people" element={<People />}/>
        <Route path='/person/details/:id' element={<PersonDetails/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App