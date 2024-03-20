import { BrowserRouter, Route, Routes } from "react-router-dom";
import React,  { useState } from "react";
import Login from "../login/Login";
import SidePanel from "../navBar/SidePanel";
import PersonalDashboard from "../personalDashboard/personalDashboard";
import AllModulesPage from "../All_Modules_Page/AllModulesPage";
import Footer from "../footer/Footer";
import "../home/home.css";
import { useAuth0 } from "@auth0/auth0-react";
import ProfilePage from "../login/ProfilePage";
import Loading from "../loading/Loading";
import AboutPage from "../about1/AboutPage";

const Home = () => {
  const [refreshModalData, setRefreshModalData] = useState(false);
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>{<Loading />}</div>;
  }

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <div className="flex flex-row h-full w-full">
          <div>
            <SidePanel />
          </div>

          <div className="flex flex-col w-full h-full">
            <div>
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

                <Route path="/about" element={<AboutPage />} />
                <Route path="/profilePage" element={<ProfilePage />} />
                <Route path="/login" element={<Login />} />
              </Routes>

              <div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </BrowserRouter>
  );
};

export default Home;
