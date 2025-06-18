import { Routes, Route, NavLink } from "react-router-dom";
import Welcome from "../Components/Welcome";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Account from "../Components/Account";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}