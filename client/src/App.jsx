import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";

import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import AppLayout from "./ui/AppLayout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import { UserProvider } from "./context/UserContext";
import AccountPage from "./pages/AccountPage";

axios.defaults.baseURL = "http://127.0.0.1:3000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account/:subPage?" element={<AccountPage />} />
          <Route path="/account/:subPage/:action" element={<AccountPage />} />
        </Route>
      </Routes>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#ffffff",
            color: "#374151",
          },
        }}
      />
    </UserProvider>
  );
}

export default App;
