import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/Main/Main.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
