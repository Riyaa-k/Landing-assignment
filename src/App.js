import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Uploaded from "./pages/Uploaded";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

 

return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/uploaded" element={<Uploaded />} />
      
    </Routes>
  );
}
export default App;
