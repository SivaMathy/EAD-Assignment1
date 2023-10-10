// // export default function Student(props){
// //     return (
// //         <section>

// //     //   <div className="mt-10">
// //     //     <label htmlFor="cn">TrainID</label>
// //     //     <input type="text" name="className" id="cn" onChange={newData} />
// //     //   </div>

// //     //   <div className="mt-10">
// //     //     <label htmlFor="dp">To</label>
// //     //     <select type="text" name="department" id="dp" onChange={newData}>
// //     //       <option>Galle</option>
// //     //       <option>Colombo</option>
// //     //     </select>
// //     //   </div>

// //     //   <div className="mt-10">
// //     //     <label htmlFor="gender">From</label>
// //     //     <select name="gender" id="gender" onChange={newData}>
// //     //       <option value={1}>Galle</option>
// //     //       <option value={0}>Colombo</option>
// //     //     </select>
// //     //   </div>

// //     //   <div className="mt-10">
// //     //     <label htmlFor="dob">Date</label>
// //     //     <input type="date" name="dateOfBirth" id="dob" onChange={newData} />
// //     //   </div>

// //     //   <div className="mt-10">
// //     //     <label htmlFor="graduated">Class</label>
// //     //     <select name="isGraduated" id="graduated" onChange={newData}>
// //     //       <option value={1}>First Class</option>
// //     //       <option value={0}>Second class</option>
// //     //     </select>
// //     //   </div>

// //     //   <div className="mt-10">
// //     //     <label htmlFor="dp">No of seats</label>
// //     //     <input type="text" name="age" id="dp" onChange={newData} />
// //     //   </div>

// //     //   <div className="mt-30 row p20 justify-btw">
// //     //     <div className="btn cancel" onClick={() => (window.location = "/")}>
// //     //       Cancel
// //     //     </div>
// //     //     <div className="btn add" onClick={addNewStudent}>
// //     //       Add
// //     //     </div>
// //     //   </div>
// //     // </section>
// //         </section>
// //     )

// // }

//         <section className="m-20">
//           <h1>Update Student</h1>

//           <div className="mt-10">
//             <label htmlFor="fn">First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               id="fn"
//               defaultValue={data.firstName}
//               onChange={newData}
//             />
//           </div>

//           <div className="mt-10">
//             <label htmlFor="ln">Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               id="ln"
//               defaultValue={data.lastName}
//               onChange={newData}
//             />
//           </div>

//           <div className="mt-10">
//             <label htmlFor="cn">Class Name</label>
//             <input
//               type="text"
//               name="className"
//               id="cn"
//               defaultValue={data.className}
//               onChange={newData}
//             />
//           </div>

//           <div className="mt-10">
//             <label htmlFor="dp">Department</label>
//             <input
//               type="text"
//               name="department"
//               id="dp"
//               defaultValue={data.department}
//               onChange={newData}
//             />
//           </div>

//           <div className="mt-10">
//             <label htmlFor="gender">Gender</label>
//             <select name="gender" id="gender" value={gender} onChange={newData}>
//               <option value={1}>Male</option>
//               <option value={0}>Female</option>
//             </select>
//           </div>

//           <div className="mt-10">
//             <label htmlFor="dob">Birthday</label>
//             <input
//               type="date"
//               name="dateOfBirth"
//               id="dob"
//               defaultValue={
//                 data.dateOfBirth ? data.dateOfBirth.split("T")[0] : ""
//               }
//               onChange={newData}
//             />
//           </div>

//           <div className="mt-10">
//             <label htmlFor="graduated">Is Graduated</label>
//             <select
//               name="isGraduated"
//               id="graduated"
//               value={graduated}
//               onChange={newData}
//             >
//               <option value={true}>Yes</option>
//               <option value={false}>No</option>
//             </select>
//           </div>

//           <div className="mt-30 row p20 justify-btw">
//             <div className="btn cancel" onClick={() => (window.location = "/")}>
//               Cancel
//             </div>
//             <div className="btn add" onClick={updateStudent}>
//               Update
//             </div>
//           </div>
//         </section>;
