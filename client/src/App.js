import { useState } from "react";
import Home from "./components/home/Home";




function App() {
  const [refreshModalData, setRefreshModalData] = useState(false);

  return (
    <div>
        <Home
          refreshModalData={refreshModalData}
          setRefreshModalData={setRefreshModalData}
        />
    </div>
  );
}

export default App;
