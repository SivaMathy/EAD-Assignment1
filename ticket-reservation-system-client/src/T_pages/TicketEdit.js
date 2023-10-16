import { useEffect, useState } from "react";
import train from "./t5.jpg";

const entry = {
  id: "",
  firstName: "",
  lastaNme: "",
  department: "",
  className: "",
  gender: 0,
  dateOfBirth: new Date(),
  isGraduated: false,
  age: 0,
};

export default function TicketEdit(props) {
  const [data, setData] = useState({});
  const [gender, setGender] = useState(0);
  const [graduated, setGraduated] = useState(false);
  const [sid, setSid] = useState("");

  const updateStudent = () => {
    console.log("The New Student Is: ", entry);

    fetch("http://localhost:86/api/student/" + sid, {
      method: "PUT",
      body: JSON.stringify(entry),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((r) => {
        console.log("Response for updating Reservation: ", r);
        window.location = "/tic";
      })
      .catch((e) => console.log("Error updating a student: ", e));
  };

  const newData = (e) => {
    const name_ = e.target.name;
    let v_ = e.target.value;

    if (name_ === "dateOfBirth") {
      v_ = new Date(v_);
      entry.age = new Date().getFullYear() - v_.getFullYear();
    }

    if (name_ === "gender") {
      v_ = Number(v_);
      setGender(v_);
    }

    if (name_ === "isGraduated") {
      v_ = v_ === "true";
      setGraduated(v_);
    }

    entry[name_] = v_;
  };

  useEffect(() => {
    let id_ = window.location.search;
    if (id_) {
      id_ = id_.split("=")[1];
    }

    if (id_) {
      setSid(id_);

      fetch("http://localhost:86/api/student/" + id_)
        .then((r) => r.json())
        .then((d) => {
          console.log("Student for update: ", d);
          setGender(d.gender);
          setGraduated(d.graduated);
          setData(d);
          Object.assign(entry, d);
        })
        .catch((e) => console.log("Error getting student for update: ", e));
    }
  }, []);

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
            <h1 className="text-4xl">Update Reservation</h1>

            <div className="bg-white p-6 rounded">
              <div className="mb-4">
                <label htmlFor="fn">NIC</label>
                <input
                  type="text"
                  name="firstName"
                  id="fn"
                  defaultValue={data.firstName}
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
                    defaultValue={data.lastName}
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
                    defaultValue={data.className}
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
                    defaultValue={data.department}
                    name="department"
                    id="dp"
                    onChange={newData}
                  >
                    <option>Negambo</option>
                    <option>Negambo</option>
                  </select>
                </div>
                <div className="mb-4 md:w-1/2 pr-4 pl-4">
                  <label htmlFor="gender">From</label>
                  <select
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    name="Galee"
                    id="gender"
                    value={gender}
                    onChange={newData}
                  >
                    <option>Colombo</option>
                    <option>Galle</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="dob">Booking Date</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  id="dob"
                  defaultValue={
                    data.dateOfBirth ? data.dateOfBirth.split("T")[0] : ""
                  }
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  onChange={newData}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="graduated">Class</label>
                <select
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  name="isGraduated"
                  id="graduated"
                  value={graduated}
                  onChange={newData}
                >
                  <option value={1}>First Class</option>
                  <option value={0}>Second Class</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="dp">No of seats</label>
                <input
                  type="text"
                  name="age"
                  id="dp"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  defaultValue={data.age}
                  onChange={newData}
                />
              </div>

              <div className="flex flex-wrap  mt-4">
                <div className="w-1/2">
                  <button
                    className="text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    style={{
                      transition: "all .15s ease",
                      background: "#1B998B",
                      width: "150px",
                    }}
                    onClick={() => (window.location = "/tic")}
                  >
                    Cancel
                  </button>
                </div>
                <div className="w-1/2" onClick={updateStudent}>
                  <button
                    className="text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    style={{
                      transition: "all .15s ease",
                      background: "#1B998B",
                      width: "150px",
                    }}
                    onClick={() => (window.location = "/tic")}
                  >
                    Update
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

//   <div className="mt-30 flex flex-wrap  p20 justify-btw">
//     <div className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline cancel" onClick={() => (window.location = "/")}>
//       Cancel
//     </div>
//     <div className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline add" onClick={updateStudent}>
//       Update
//     </div>
//   </div>;
