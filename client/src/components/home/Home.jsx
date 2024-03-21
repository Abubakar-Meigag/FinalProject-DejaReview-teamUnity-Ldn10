import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Login from "../login/Login";
import SideBar from "../navBar/SideBar";
import PersonalDashboard from "../personalDashboard/personalDashboard";
import AllModulesPage from "../All_Modules_Page/AllModulesPage";
import Footer from "../footer/Footer";
import "../home/home.css";
import ProfilePage from "../login/ProfilePage";
import Loading from "../loading/Loading";
import AboutPage from "../about1/AboutPage";

const Home = ({ session }) => {
  const [refreshModalData, setRefreshModalData] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex flex-row h-full w-full">
        <div>
          <SideBar session={session} />
        </div>

        <div className="flex flex-col w-full h-full">
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  <PersonalDashboard
                    session={session}
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

              <Route path="/about" element={<AboutPage />} />
              <Route
                path="/profilePage"
                element={<ProfilePage session={session} />}
              />
              <Route path="/login" element={<Login session={session} />} />
            </Routes>

            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Home;
