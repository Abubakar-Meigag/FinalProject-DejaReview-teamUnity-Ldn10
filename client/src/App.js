import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Management from "./components/management/Management";
import SidePanel from "./components/navBar/SidePanel";
import ModuleDropdown from './components/dashboard/ModuleDropdown'; 


function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <SidePanel />
        <ModuleDropdown />
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
