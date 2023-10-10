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

function App() {
  return (
    <BrowserRouter>
    {/* <NavBar/> */}
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/user" element={<Users/>}/>
        <Route path="/adduser" element={<AddUser/>}/>
        <Route path="/nav" element={<NavBar/>}/>
        <Route path="/admin" element={<AdminDash/>}/>
        <Route path="/editUser/:id" element={<EditUser/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
