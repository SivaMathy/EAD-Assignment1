import '../trainstyle.css';

const entry = {
  id:"",
  trainName:"",
  trainNumber:"",
  type:0,
  route:"",
  date:new Date(),
  time:"",
  isReserved:false,
  isAvailable:false,
  
  };
  export default function New (props)
  {
      const addNewTrain =()=>{
          console.log("The New Train Is: ",entry)
  
          fetch("http://localhost:85/api/train", {
              method:"POST",
              body: JSON.stringify(entry),
              headers:{
                  "content-type":"application/json"
              }
          }).then(r=> {
              console.log("Response from backend for add new train: ",r)
              window.location="/"
          }).catch(e=>console.log("error adding new train: ",e))
      }
      const newData = (e)=> {
          const name_ = e.target.name;
          let v_ = e.target.value
          if(name_ === "date"){
              v_ = new Date(v_)
  
          }
          if(name_ === "type"){
              v_ = new Number(v_)
  
          }
          if(name_ === "isAvailable"){
              v_ = v_ === "true"
  
          }
          if(name_ === "isReserved"){
            v_ = v_ === "true"
  
        }
          entry[name_] = v_
          console.log("The New Train Is: ",entry)
      }
      return (
          <section className="pcentered-form">
            <div className="pform-container">
              <h1 className='ph1'>Add New Train Schedule</h1>
              <div className="pinput-container">
                <label htmlFor="tn" className='plabel'>
                  <i className="fas fa-train"></i> Train Name
                </label>
                <input type="text" name="trainName" id="tn" onChange={newData} className='pinput'/>
              </div>
              <div className="pinput-container">
                <label htmlFor="tnu" className='plabel'>
                  <i className="fas fa-hashtag"></i> Train Number
                </label>
                <input type="text" name="trainNumber" id="tnu" onChange={newData} className='pinput'/>
              </div>
              <div className="pinput-container">
                <label htmlFor="ty" className='plabel'>
                  <i className="fas fa-subway"></i> Type
                </label>
                <select name="type" id="ty" onChange={newData} className='pselect'>
                  <option value={1}>Intercity Train</option>
                  <option value={0}>Express Train</option>
                </select>
              </div>
              <div className="pinput-container">
                <label htmlFor="ro" className='plabel'>
                  <i className="fas fa-route"></i> Route
                </label>
                <input type="text" name="route" id="ro" onChange={newData} className='pinput'/>
              </div>
              <div className="pinput-container">
                <label htmlFor="da" className='plabel'>
                  <i className="far fa-calendar-alt"></i>Date
                </label>
                <input type="date" name="date" id="da" onChange={newData} className='pinput'/>
              </div>
              <div className="pinput-container">
                <label htmlFor="ti" className='plabel'>
                  <i className="far fa-clock"></i> Time
                </label>
                <input type="text" name="time" id="ti" onChange={newData} className='pinput'/>
              </div>
              <div className="pinput-container">
                <label htmlFor="av" className='plabel'>
                  <i className="fas fa-subway"></i> Reservations
                </label>
                <select name="isReserved" id="av" onChange={newData} className='pselect'>
                  <option value="true">Reserved</option>
                  <option value="false">Not Reserved</option>
                </select>
              </div>
              <div className="pinput-container">
                <label htmlFor="av">
                  <i className="fas fa-subway"></i> Availability
                </label>
                <select name="isAvailable" id="av" onChange={newData} className='pselect'>
                  <option value="true">Available</option>
                  <option value="false">Cancelled</option>
                </select>
              </div>
              <div className="pbutton-container">
                <div className="pbtn cancel" onClick={() => (window.location = "/phome")}>
                  Cancel
                </div>
                <div className="pbtn add" onClick={addNewTrain}>
                  Add
                </div>
              </div>
            </div>
          </section>
        );
        
  }
  //updated code