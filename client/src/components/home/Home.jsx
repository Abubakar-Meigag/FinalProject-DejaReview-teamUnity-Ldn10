import React from "react";
import AllModulesPage from "../All_Modules_Page/AllModulesPage";
import PersonalDashboard from "../personalDashboard/personalDashboard";
import '../home/home.css';

const Home = () => {

  return (
    <div className="App">
      <AllModulesPage />
      <PersonalDashboard />
    </div>
  );
};

export default Home;
