import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Management from "./components/management/Management";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/management" element={<Management />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

