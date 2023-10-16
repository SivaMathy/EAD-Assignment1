import { useEffect, useState } from "react";
import '../trainstyle.css';

export default function Home() 
{

const editIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-pencil"
    viewBox="0 0 16 16"
  >
    <path d="M11.293 0.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.267l1-3a1 1 0 0 1 .242-.391l10-10z" />
    <path
      fillRule="evenodd"
      d="M10.854 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.39.243l-3 1a.5.5 0 0 1-.628-.628l1-3a.5.5 0 0 1 .243-.39l10-10z"
    />
    <path
      fillRule="evenodd"
      d="M2.5 13a.5.5 0 0 0 .5.5H13a.5.5 0 0 0 0-1H3a.5.5 0 0 0-.5.5z"
    />
  </svg>
);

const deleteIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-trash"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M2.5 1a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H13l-.439 9.295A2 2 0 0 1 11.564 12H4.436a2 2 0 0 1-1.997-1.705L2 2H1.5a.5.5 0 0 1-.5-.5zM5.293 14.293a1 1 0 0 0 1.414 0L8 11.707l1.293 1.293a1 1 0 1 0 1.414-1.414L9.414 10l2.293-2.293a1 1 0 1 0-1.414-1.414L8 8.293 6.707 7 5.414 8.293a1 1 0 1 0 1.414 1.414L8 9.707l1.293 1.293a1 1 0 0 0 1.414-1.414L9.414 8l2.293-2.293a1 1 0 0 0-1.414-1.414L8 6.293 6.707 5 5.414 6.293a1 1 0 0 0 1.414 1.414L8 7.707l1.293 1.293a1 1 0 0 0 1.414-1.414L9.414 10l2.293-2.293a1 1 0 0 0-1.414-1.414L8 8.293 6.707 7 5.414 8.293a1 1 0 0 0 1.414 1.414L8 9.707l1.293 1.293a1 1 0 0 0 1.414-1.414L9.414 10l2.293-2.293a1 1 0 0 0-1.414-1.414L8 7.293 6.707 6l-1.5 1.5a1 1 0 0 0 1.414 1.414L8 8.707l1.293 1.293a1 1 0 0 0 1.414-1.414L9.414 11l1.293 1.293a1 1 0 0 0 1.414-1.414L10.414 10l1.293-1.293a1 1 0 0 0-1.414-1.414L8 6.707l-1.293-1.293a1 1 0 0 0-1.414 1.414L6.586 10 5.293 11.293a1 1 0 0 0-1.414-1.414L4.586 10l-1.293-1.293a1 1 0 1 0-1.414 1.414L2.414 11H1.5a.5.5 0 0 0 0 1 .5.5 0 0 0 .5.5H2h1h1.293a1 1 0 0 0 1.414-1.414L4.586 12 3.293 13.293a1 1 0 0 0 1.414 1.414L5 13h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3z"
    />
  </svg>
);


  const [trains,setTrains] = useState([]);
  const [tid,setTid] = useState("");
  const handleModal = (hide)=> {
    const deleteModal = document.querySelector(".delete-modal")
    if(deleteModal){
      if(hide){
        deleteModal.classList.add("hidden")
      }else {
        deleteModal.classList.remove("hidden")
      }
      
    }
  }
  const openDeleteModal = (id) => {
    setTid(id)
   handleModal(false)
  }
  const deleteTrain =()=> {
    // console.log("The train id: ",tid)
    // return
    const trainToDelete = trains.find((train) => train.id === tid);

  if (trainToDelete && trainToDelete.isReserved) {
    // If the train is reserved, show a confirmation dialog to the user
    const confirmed = window.alert(
      "This train is reserved. You can't delete this train"
    );

    if (!confirmed) {
      // User canceled the operation, do nothing
      return;
    }
  }
    fetch("http://localhost:85/api/train/" + tid, {
      method:"DELETE",
      
  }).then(r=> {
      console.log("Response from delete a  train: ",r)
     handleModal(true)
     window.location.reload()
  }).catch(e=>console.log("error deleting a train: ",e))
  }

  useEffect(()=> {
    fetch("http://localhost:85/api/train", { timeout: 20 }).then(r=> r.json()).then(d=>{
      console.log("The Trains are: ",d)
      setTrains(d)
    }).catch(e=>console.log("The error fetching all trains: ",e))
  },[])



return (
  <main>
    <h1 className="pcentered-heading">Schedule Train Details</h1>
    <a href="/pnew" className="padd-train-button">
      <i className="fas fa-plus"></i> Add Train
    </a>

    <table className="ptable">
      <thead>
        <tr className="ptr">
          <th className="pheader-cell pth">Train Name</th>
          <th className="pheader-cell pth">Train Number</th>
          <th className="pheader-cell pth">Type</th>
          <th className="pheader-cell pth">Route</th>
          <th className="pheader-cell pth">Date</th>
          <th className="pheader-cell pth">Time</th>
          <th className="pheader-cell pth">Reservations</th>
          <th className="pheader-cell pth">Availablility</th>
          <th className="pheader-cell pth">Edit</th>
          <th className="pheader-cell pth">Delete</th>
        </tr>
      </thead>
      <tbody>
        {trains.length === 0 ? (
          <tr className="ptr">
            <td colSpan="9" className="ptd">
              <div className="row pwaiting">
                <div>Loading</div>
                <div className="ploading">...</div>
              </div>
            </td>
          </tr>
        ) : (
          trains.map((train) => (
            <tr key={train.id} className="ptr">
              <td className="ptd">{train.trainName}</td>
              <td className="ptd">{train.trainNumber}</td>
              <td className="ptd">{train.type === 0 ? "Express Train" : "Intercity Train"}</td>
              <td className="ptd">{train.route}</td>
              <td className="ptd">{train.date.split("T")[0]}</td>
              <td className="ptd">{train.time}</td>
              <td className="ptd">
                
                  {train.isReserved ? 'Reserved' : 'Not Reserved'}
          
              </td>
              <td className="ptd">
                <span className={`pstatus-text ${train.isAvailable ? 'Available' : 'cancelled'}`}>
                  {train.isAvailable ? 'Available' : 'Cancelled'}
                </span>
              </td>
              <td className="ptd">
                <a href={"/pedit?id=" + train.id} className="pedit-button">
                  {editIcon} Edit
                </a>
              </td>
              <td onClick={() => openDeleteModal(train.id)} className="pdelete-button ptd">
                {deleteIcon} Delete
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
    <section className="pdelete-modal phidden">
      <div className="pmodal-item">
        <h3>Delete Train</h3>
        <p>Are you sure you want to delete this train?</p>
        <div className="pbutton-container">
          <div className="pbtn cancel" onClick={() => handleModal(true)}>
            Cancel
          </div>
          <div className="pbtn delete pdelete-button" onClick={deleteTrain}>
            Delete
          </div>
        </div>
      </div>
    </section>
  </main>
);

   
  }

//updated