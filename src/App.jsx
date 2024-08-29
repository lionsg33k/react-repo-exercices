import { Route, Routes, useLocation } from "react-router-dom"
import { TodoPage } from "./pages/todo/todo"
import { HomePage } from "./pages/home/home"
import { ErrorPage } from "./pages/Errors/Error"
import { MoviesPage } from "./pages/Movies/MoviePage/movies"
import { MoviesJson } from './constants';
import { MoviesDetails } from "./pages/Movies/MovieDetails/moviesDetails"



function App() {

  const movies = MoviesJson



  return (
    <>


      <Routes>
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/movies" element={<MoviesPage movies={movies} />} />
        <Route path="/movie/:id" element={<MoviesDetails movies={movies} />} />
      </Routes>



    </>
  )
}

export default App