import { createRoot } from "react-dom/client";
import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";
import App from "./App";
import { AuthProvider } from "./service/AuthContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <GlobalStyle />
    <App />
  </AuthProvider>
);
