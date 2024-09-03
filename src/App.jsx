import { Route, Routes, useLocation } from "react-router-dom"
import { TodoPage } from "./pages/todo/todo"
import { HomePage } from "./pages/home/home"
import { ErrorPage } from "./pages/Errors/Error"
import { MoviesPage } from "./pages/Movies/MoviePage/movies"
import { MoviesDetails } from "./pages/Movies/MovieDetails/moviesDetails"
import { MyProvider } from "./context"
import { CountriesPage } from "./pages/countries/countries"
import { ContactUs } from "./pages/email/email"



function App() {




  return (
    <>

      <MyProvider>

        <Routes>
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movie/:id" element={<MoviesDetails />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/email" element={<ContactUs />} />
        </Routes>
      </MyProvider>



    </>
  )
}

export default App