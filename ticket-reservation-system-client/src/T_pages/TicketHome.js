import { useEffect, useState } from "react";
import custom from "../T_pages/custom.css";

export default function TicketHome() {
  const [students, setStudents] = useState([]);
  const [sid, setSid] = useState("");

  const handleModal = (hide) => {
    const deleteModal = document.querySelector(".delete-modal");
    if (deleteModal) {
      if (hide) {
        deleteModal.classList.add("hidden");
      } else {
        deleteModal.classList.remove("hidden");
      }
    }
  };

  const openDeleteModal = (id) => {
    setSid(id);
    handleModal(false);
  };
  const deleteStudent = () => {
    // console.log( "The Student ID: ", sid );
    // return;
    fetch("http://localhost:86/api/student/" + sid, {
      method: "DELETE",
    })
      .then((r) => {
        console.log("Response for Cacel Reservation: ", r);
        handleModal(true);
        window.location.reload();
      })
      .catch((e) => console.log("Error deleting : ", e));
  };

  useEffect(() => {
    fetch("http://localhost:86/api/student")
      .then((r) => r.json())
      .then((d) => {
        console.log("The students are: ", d);
        setStudents(d);
      })
      .catch((e) => console.log("The error fetching all : ", e));
  }, []);
  return (
    <div className="App">
      <center>
        <h1>Ticket Reservation</h1>
      </center>
      <div className="add-btn">
        <a href="/new">+</a>
      </div>

      <table>
        <thead>
          <tr>
            <th>NIC</th>
            <th>Train Name</th>
            <th>TrainID</th>
            <th>To</th>
            <th>From</th>
            <th>date</th>
            <th>Class</th>
            <th>No of seats</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr className="flex flex-wrap  waiting">
              <td className="flex flex-wrap ">
                Loading<span className="loading">...</span>
              </td>
            </tr>
          ) : (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.className}</td>
                <td>{student.department}</td>
                <td>{student.gender === 0 ? "Colombo" : "Galle"}</td>
                <td>{student.dateOfBirth.split("T")[0]}</td>
                <td>{student.isGraduated ? "first" : "second"}</td>
                <td>{student.age}</td>
                <td>
                  {" "}
                  <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline  py-3 px-4 leading-tight text-xl mt-3 ">
                    <a href={"/edit?id=" + student.id}>Edit</a>
                  </button>
                </td>
                <td
                  onClick={() => {
                    openDeleteModal(student.id);
                  }}
                >
                  {" "}
                  <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline  py-3 px-4 leading-tight text-xl mt-3 ">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <section className="delete-modal hidden">
        <div className="modal-item">
          <h3>Cancel Reservation</h3>
          <p>Are you sure you want to Cancel this Reservation?</p>
          <div className="flex flex-wrap  mt-20 justify-btw">
            <div
              className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline cancel"
              onClick={() => {
                handleModal(true);
              }}
            >
              Cancel
            </div>
            <div
              className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline add"
              onClick={deleteStudent}
            >
              Delete
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

//  <th>NIC</th>
//             <th>Train Name</th>
//             <th>TrainID</th>
//             <th>To</th>
//             <th>From</th>
//             <th>date</th>
//             <th>Class</th>
//             <th>No of seats</th>
//             <th>Edit</th>
//             <th>Delete</th>
