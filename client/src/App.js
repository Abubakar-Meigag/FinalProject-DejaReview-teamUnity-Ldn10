import { useState } from "react";
import Home from "./components/home/Home";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/loading/Loading";





function App() {
  const [refreshModalData, setRefreshModalData] = useState(false);
   const { isLoading } = useAuth0();

   if (isLoading) {
     return <div>{<Loading />}</div>;
   }

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
