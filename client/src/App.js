import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import AllModulesPage from "./pages/All_Modules";
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
