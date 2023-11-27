import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./components/home/Home";
import AllModulesPage from "./components/All_Modules_Page/AllModulesPage";
import Management from "./components/management/Management";
import SidePanel from "./components/navBar/SidePanel";



function App() {
  const [refreshModalData, setrefreshModalData] = useState(false);

  return (
    <div className="flex">
      <BrowserRouter>
        <SidePanel />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                refreshModalData={refreshModalData}
                setrefreshModalData={setrefreshModalData}
              />
            }
          />
          <Route
            path="/AllModulesPage"
            element={
              <AllModulesPage
                refreshModalData={refreshModalData}
                setrefreshModalData={setrefreshModalData}
              />
            }
          />
          <Route path="/management" element={<Management />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
