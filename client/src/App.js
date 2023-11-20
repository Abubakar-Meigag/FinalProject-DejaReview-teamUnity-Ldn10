import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Management from "./components/management/Management";
import SidePanel from "./components/navBar/SidePanel";

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <SidePanel />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/management" element={<Management />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
