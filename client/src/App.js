import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import AllModulesPage from "./components/All_Modules_Page/AllModulesPage";
import PersonalDashboard from "./components/personalDashboard/personalDashboard";

function App() {
  return (
    <div className="App">
      <Home />
      <PersonalDashboard />
      <AllModulesPage />
      <Footer />
    </div>
  );
}

export default App;
