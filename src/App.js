import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./service/ProtectedRoute.js";
import Main from "./pages/Main/Main.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Free from "./pages/Free/Free.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/cadastrar" element={<SignUp />} />
        <Route path="/free" element={<Free />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
