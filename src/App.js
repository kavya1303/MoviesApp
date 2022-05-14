import "./App.css";

import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Favourite from "./components/Favourite";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner /> 
              <Movies />
            </>
          }
        />
        <Route path="/favourites" element={<Favourite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;