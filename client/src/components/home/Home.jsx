import React from "react";
import ModuleDropdown from "../dashboard/ModuleDropdown";
import PersonalDashboard from "../personalDashboard/personalDashboard";
import '../home/home.css';
import Footer from "../footer/Footer";

const Home = () => {

  return (
    <div>
      <ModuleDropdown />
      <PersonalDashboard />
      <Footer />
    </div>
  );
};

export default Home;
