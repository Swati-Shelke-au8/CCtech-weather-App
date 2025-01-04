import Login from "../Login/Login";
import Register from "../Register/Register";
import ForgotPassword from "../Register/ForgotPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function NavBar() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavBar;
