import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login/Login";
import ClientsTablePage from "../pages/client-list/ClientsTablePage";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employees/login" element={<Login />} />
      <Route path="/clients/table" element={<ClientsTablePage />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default Navigation;
