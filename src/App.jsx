import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;