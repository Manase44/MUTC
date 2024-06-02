import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Leardership from "./Pages/Leadership/Leardership";
import Tracks from "./Pages/Track/Tracks";
import Events from "./Pages/Event/Events";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leadership" element={<Leardership />}/>
          <Route path="/tracks" element={<Tracks />}/>
          <Route path="/events" element={<Events />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;