import { useSession } from "@supabase/auth-helpers-react";
import Home from "./components/home/Home";
import Login from "./components/login/Login";

function App() {
  const session = useSession();

  return <div>{session ? <Home session={session} /> : <Login />}</div>;
}

export default App;
