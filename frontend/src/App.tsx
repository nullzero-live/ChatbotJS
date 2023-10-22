import Header from "./components/Header";
import { useAuth } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";


function App() {
  const auth = useAuth();
  return (<main>
    <Header />
    <Routes>
      <Route path = "/" element= {<Home />} />
      <Route path = "/login" element= {<Login />} />
      <Route path = "/signup" element= {<Signup />} />
      <Route path = "/chat" element= {<Chat />} />
      <Route path = "*" element= {<NotFound />} />
    </Routes>
  </main>
  );
}

export default App;
