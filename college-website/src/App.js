import {BrowserRouter,Routes,Route} from "react-router-dom"

//pages and components
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Courses from "./pages/Courses"
import Admission from "./pages/Admission"
import DataForAdmission from "./pages/DataForAdmission"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className="pages">
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
          <Route
            path="/about"
            element={<About/>}
          />
          <Route
            path="/contact"
            element={<Contact/>}
          />
          <Route
            path="/gallery"
            element={<Gallery/>}
          />
          <Route
            path="/courses"
            element={<Courses/>}
          />
          <Route
            path="/dataforadmission"
            element={<DataForAdmission/>}
          />
          <Route
            path="/"
            element={<Home/>}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
