import React from "react";
import train from "../T_pages/t5.jpg";

const entry = {
  id: "",
  firstName: "",
  lastName: "",
  department: "",
  className: "",
  gender: 0,
  dateOfBirth: new Date(),
  isGraduated: false,
  age: "",
};

export default function TicketNew(props) {
  const addNewStudent = () => {
    console.log("The New Student Is: ", entry);

    fetch("http://localhost:86/api/student", {
      method: "POST",
      body: JSON.stringify(entry),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((r) => {
        console.log("Response from Backend for adding new student: ", r);
        window.location = "/tic";
      })
      .catch((e) => console.log("Error adding new student: ", e));
  };

  const newData = (e) => {
    const name_ = e.target.name;
    let v_ = e.target.value;

    if (name_ === "gender") {
      v_ = Number(v_);
    }

    if (name_ === "isGraduated") {
      v_ = v_ === "1";
    }

    entry[name_] = v_;

    console.log("The New Student Is: ", entry);
  };

  return (
    <div className="bg-white-100 min-h-screen">
      <div className="container mx-auto sm:px-4 mt-4 bg-white p-6 rounded border border-gray-900">
        <div className="flex flex-wrap ">
          <div className="md:w-1/2 pr-4 pl-4">
            {/* Right side with the picture */}
            <img
              src={train}
              alt="Student Image"
              style={{ maxWidth: "700px", height: "900px" }}
              className="max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 pr-4 pl-4">
            <h1 className="text-4xl">Reservation</h1>

            <div className="bg-white p-6 rounded">
              <div className="mb-4">
                <label htmlFor="fn">NIC</label>
                <input
                  type="text"
                  name="firstName"
                  id="fn"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  onChange={newData}
                />
              </div>
              <div className="flex flex-wrap -mr-1 -ml-1">
                <div className="mb-4 md:w-1/2 pr-4 pl-4">
                  <label htmlFor="ln">Train Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="ln"
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    onChange={newData}
                  />
                </div>
                <div className="mb-4 md:w-1/2 pr-4 pl-4">
                  <label htmlFor="cn">Train ID</label>
                  <input
                    type="text"
                    name="className"
                    id="cn"
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    onChange={newData}
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mr-1 -ml-1">
                <div className="mb-4 md:w-1/2 pr-4 pl-4">
                  <label htmlFor="dp">To</label>
                  <select
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    name="department"
                    id="dp"
                    onChange={newData}
                  >
                    <option>Negambo</option>
                    <option>Kandy</option>
                  </select>
                </div>
                <div className="mb-4 md:w-1/2 pr-4 pl-4">
                  <label htmlFor="gender">From</label>
                  <select
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    name="Galee"
                    id="gender"
                    onChange={newData}
                  >
                    <option value={0}>Colombo</option>
                    <option value={1}>Galle</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="dob">Booking Date</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  id="dob"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  onChange={newData}
                />
              </div>
              <br></br>
              <div className="mb-4">
                <label htmlFor="graduated">Class</label>
                <select
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  name="isGraduated"
                  id="graduated"
                  onChange={newData}
                >
                  <option value={1}>First Class</option>
                  <option value={0}>Second Class</option>
                </select>
              </div>
              <br></br>
              <div className="mb-4">
                <label htmlFor="dp">No of seats</label>
                <input
                  type="text"
                  name="age"
                  id="dp"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  onChange={newData}
                />
              </div>
              <div className="flex flex-wrap  mt-4">
                <div className="w-1/2">
                  <button
                    className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline  py-3 px-4 leading-tight text-xl mt-3 custom-dark-blue-button"
                    onClick={() => (window.location = "/tic")}
                  >
                    Cancel
                  </button>
                </div>
                <div className="w-1/2">
                  <button
                    className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline  py-3 px-4 leading-tight text-xl mt-3 custom-dark-blue-button"
                    style={{ maxWidth: "300", height: "80" }}
                    onClick={addNewStudent}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
