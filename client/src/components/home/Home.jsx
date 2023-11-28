import { BrowserRouter, Route, Routes } from "react-router-dom";
import React,  { useState } from "react";
import Login from "../login/Login";
import SidePanel from "../navBar/SidePanel";
import PersonalDashboard from "../personalDashboard/personalDashboard";
import AllModulesPage from "../All_Modules_Page/AllModulesPage";
import Management from "../management/Management"
import Footer from "../footer/Footer";
import "../home/home.css";
import { useAuth0 } from "@auth0/auth0-react";
import ProfilePage from "../login/ProfilePage";

const Home = () => {
  const [refreshModalData, setRefreshModalData] = useState(false);
  const { isAuthenticated } = useAuth0();


  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <div className="flex flex-col">
          <div className="flex flex-row">
            <SidePanel />

            <Routes>
              <Route
                path="/"
                element={
                  <PersonalDashboard
                    refreshModalData={refreshModalData}
                    setRefreshModalData={setRefreshModalData}
                  />
                }
              />

              <Route
                path="/AllModulesPage"
                element={
                  <AllModulesPage
                    refreshModalData={refreshModalData}
                    setRefreshModalData={setRefreshModalData}
                  />
                }
              />

              <Route path="/management" element={<Management />} />
              <Route path="/profilePage" element={<ProfilePage />} />
              <Route path="/login" element={<Login />} />
            </Routes>

          </div>
          <Footer />
        </div>

      ) : (
        <Login />
      )}

    </BrowserRouter>
  );
};

export default Home;
