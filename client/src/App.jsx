import { Routes, Route } from "react-router-dom";
import "./App.css";

import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import AppLayout from "./ui/AppLayout";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
