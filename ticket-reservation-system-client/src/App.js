import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./m_pages/login";
import Signin from "./m_pages/signin"
import Users from "./m_pages/m_user"
import AddUser from "./m_pages/m_adduser"
// import NavBar from "./m_pages/navBar"
import AdminDash from "./m_pages/admin-dash"
import EditUser from "./m_pages/m_editUser";
import AgentDashboard from "./m_pages/agent-dash";
import NavBar from './components/NavBar';
import Home from './components/Home';
import New from './components/New';
import Edit from './components/Edit';

import './custom.css';


function App() {
  return (
    <BrowserRouter>
   <NavBar/> 
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/user" element={<Users/>}/>
        <Route path="/adduser" element={<AddUser/>}/>
        {/* <Route path="/nav" element={<NavBar/>}/> */}
        <Route path="/admin" element={<AdminDash/>}/>
        <Route path="/editUser/:id" element={<EditUser/>}/>
        <Route path="/agent" element={<AgentDashboard/>}/>

        <Route path="/home" element={<Home/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/edit" element={<Edit/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
