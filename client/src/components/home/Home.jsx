import React from "react";
import ModuleDropdown from "../dashboard/ModuleDropdown";
import AllModulesPage from "../All_Modules_Page/AllModulesPage";
import PersonalDashboard from "../personalDashboard/personalDashboard";
import '../home/home.css';
import Footer from "../footer/Footer";

const Home = () => {

  return (
    <div>
      <ModuleDropdown />
      <AllModulesPage />
      <PersonalDashboard />
      <Footer />
    </div>
  );
};

export default Home;
