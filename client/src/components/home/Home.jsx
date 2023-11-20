import React from "react";
import AllModulesPage from "../All_Modules_Page/AllModulesPage";
import PersonalDashboard from "../personalDashboard/personalDashboard";
import '../home/home.css';
import Footer from "../footer/Footer";

const Home = () => {

  return (
    <div>
      <AllModulesPage />
      <PersonalDashboard />
      <Footer />
    </div>
  );
};

export default Home;
