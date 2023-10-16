import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./m_pages/login";
import Signin from "./m_pages/signin"
import Users from "./m_pages/m_user"
import AddUser from "./m_pages/m_adduser"
import NavBar from "./m_pages/navBar"
import AdminDash from "./m_pages/admin-dash"
import EditUser from "./m_pages/m_editUser";
import AgentDashboard from "./m_pages/agent-dash";
import AdminDashBoard from "./m_pages/m_adminDash"
import AgentDashboard2 from "./m_pages/m_agentDash"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/user" element={<Users/>}/>
        <Route path="/adduser" element={<AddUser/>}/>
        <Route path="/nav" element={<NavBar/>}/>
        <Route path="/editUser/:id" element={<EditUser/>}/>
        <Route path="/dash" element={<AdminDashBoard/>}/>
        <Route path="/agentdash" element={<AgentDashboard2/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
