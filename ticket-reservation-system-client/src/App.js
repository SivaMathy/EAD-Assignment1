import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./m_pages/login";
import Signin from "./m_pages/signin";
import Users from "./m_pages/m_user";
import AddUser from "./m_pages/m_adduser";
import NavBar from "./m_pages/navBar";
import AdminDash from "./m_pages/admin-dash";
import EditUser from "./m_pages/m_editUser";
import AgentDashboard from "./m_pages/agent-dash";
import TicketEdit from "./T_pages/TicketEdit";
import TicketHome from "./T_pages/TicketHome";
import TicketNew from "./T_pages/TicketNew";

import New from "./components/New";
import Home from "./components/Home";
import Edit from "./components/Edit";


function App() {
  return (
    <BrowserRouter>
      {/* <NavBar/> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/user" element={<Users />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/nav" element={<NavBar />} />
        <Route path="/admin" element={<AdminDash />} />
        <Route path="/editUser/:id" element={<EditUser />} />
        <Route path="/agent" element={<AgentDashboard />} />
        <Route path="/tic" element={<TicketHome />} />
        <Route path="/New" element={<TicketNew />} />
        <Route path="/Edit" element={<TicketEdit />} />

        <Route path="/pnew" element={<New />} />
        <Route path="/phome" element={<Home />} />
        <Route path="/pedit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
