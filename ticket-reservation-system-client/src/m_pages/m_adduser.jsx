import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Tooltip as ReactTooltip } from "react-tooltip";
export default class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
      id: "",
      role: "",
      status: "Active",
      nameError: "",
      idError: "",
      emailError: "",
      phoneError: "",
      roleError: "",
    };
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  validateForm = () => {
    let isValid = true;
    const phoneRegex = /^\d{10}$/; // 10-digit phone number regex
    const emailRegex = /^[A-Za-z0-9._%+-]+@gmail\.com$/; // Gmail email address regex
  
    if (!this.state.name) {
      this.setState({ nameError: "Full Name is required" });
      isValid = false;
    } else {
      this.setState({ nameError: "" });
    }
  
    if (!this.state.id) {
      this.setState({ idError: "National ID Number is required" });
      isValid = false;
    } else {
      this.setState({ idError: "" });
    }
  
    if (!this.state.email) {
      this.setState({ emailError: "Email Address is required" });
      isValid = false;
    } else if (!emailRegex.test(this.state.email)) {
      this.setState({ emailError: "Invalid email format (e.g., yourname@gmail.com)" });
      isValid = false;
    } else {
      this.setState({ emailError: "" });
    }
  
    if (!this.state.phone) {
      this.setState({ phoneError: "Phone Number is required" });
      isValid = false;
    } else if (!phoneRegex.test(this.state.phone)) {
      this.setState({ phoneError: "Invalid phone number format ,should have 10 numbers" });
      isValid = false;
    } else {
      this.setState({ phoneError: "" });
    }
  
    if (!this.state.role) {
      this.setState({ roleError: "Role is required" });
      isValid = false;
    } else {
      this.setState({ roleError: "" });
    }
  
    return isValid;
  };
  

  onSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      const { name, email, phone, password, id, role, status } = this.state;
      const randomPassword = Math.random().toString(36).slice(-8); // Generates an 8-character random password

      const data = {
        name: name,
        email: email,
        phone: phone,
        password: randomPassword,
        id: id,
        role: role,
        status: status,
      };

      console.log(data);

      axios.post("http://localhost:88/api/User", data).then((res) => {
        if (res) {
          this.setState({
            name: "",
            email: "",
            phone: "",
            password: "",
            id: "",
            role: "",
            status: "",
          });
          alert("Registered Successfully");
          window.location.href = `/login`;
        } else {
          alert("Registration Failed!!!");
        }
      });
    }
  };
  render() {
    return (
      <>
        <main>
          <section className="absolute w-full h-full">
            <div
              className="absolute top-0 w-full h-full "
              style={{
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="container mx-auto px-4 h-full ">
              <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-5/12 px-4">
                  <div style={{ paddingLeft: "220px" }}>
                    <h1 className="p-3 text-4xl font-bold">
                      <span style={{ color: "#1B998B" }}>Mates</span>
                      <span style={{ color: "#11468F" }}>Travels</span>
                    </h1>
                  </div>
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <br></br>
                      <form>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Full Name
                          </label>
                          <input
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            type="text"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Full Name"
                            style={{ transition: "all .15s ease" }}
                            data-tip=""
                            data-for="name-error"
                          />
                          <span style={{ color: "red" }}>
                            {this.state.nameError}
                          </span>
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            National ID NUMBER
                          </label>
                          <input
                            name="id"
                            value={this.state.id}
                            onChange={this.handleInputChange}
                            type="string"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="NIC"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.idError}
                          </span>
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Email Address
                          </label>
                          <input
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            type="email"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Email Address"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.emailError}
                          </span>
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Phone Number
                          </label>
                          <input
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleInputChange}
                            type="number"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Phone Number"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.phoneError}
                          </span>
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="role"
                          >
                            Role
                          </label>
                          <select
                            name="role"
                            value={this.state.role}
                            onChange={this.handleInputChange}
                            id="role"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            style={{ transition: "all .15s ease" }}
                          >
                            <option value="" disabled selected>
                              Select One
                            </option>
                            <option value="Admin">Admin</option>
                            <option value="Agent">Agent</option>
                            <option value="User">User</option>
                          </select>
                          <span style={{ color: "red" }}>
                            {this.state.roleError}
                          </span>
                        </div>

                        <div className="text-center mt-6">
                          <button
                            className="text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                            type="button"
                            style={{
                              transition: "all .15s ease",
                              background: "#11468F",
                            }}
                            onClick={this.onSubmit}
                          >
                            Add User
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div
                    className="flex justify-end"
                    style={{ alignItems: "end" }}
                  >
                    <Link to="/user">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        View All Users
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}
