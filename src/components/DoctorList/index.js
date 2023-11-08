// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import axios from "axios";

// function DoctorRegistration() {

//     const [name,setName] = useState()
//     const [specialty,setSpecialty] = useState()
//     const [email,setEmail] = useState()
//     const [mob,setMob] = useState()
//     const [address,setAddress] = useState()
//   const [doctorInfo, setDoctorInfo] = useState({
//     name: "",
//     specialty: "",
//     contactDetails: {
//       email: "",
//       mob: "",
//       address: "",
//     },
//   });

//   const handleSpecialityChange = (e) => {
//     setSpecialty(e.target.value);
//   };
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleAddressChange = (e) => {
//     setAddress(e.target.value);
//   };

//   const handleMobChange = (e) => {
//     setMob(e.target.value);
//   };
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     console.log("Value", value)
//     setDoctorInfo({
//       ...doctorInfo,
//       [name]: value,
//     });
//   };

//   const handleRegister = () => {

//     const data = {
//         name,
//         specialty,
//         contactDetails: {
//             email,
//             mob ,
//             address,
//           },

//     }
//     axios
//       .post("http://localhost:8081/doctors/register", data)
//       .then((response) => {
//         console.log("Doctor registration successful:", response.data);
//         // You can also perform any additional actions here
//       })
//       .catch((error) => {
//         console.error("Doctor registration failed:", error);
//         // Handle errors or provide user feedback as needed
//       });
//     console.log(doctorInfo);
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center">Doctor Registration</h2>
//       <form>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             Name:
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="form-control"
//             value={doctorInfo.name}
//             onChange={(e)=>setName(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="specialty" className="form-label">
//             Specialty:
//           </label>
//           <input
//             type="text"
//             id="specialty"
//             name="specialty"
//             className="form-control"
//             value={doctorInfo.specialty}
//             onChange={handleSpecialityChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="form-control"
//             value={doctorInfo.email}
//             onChange={handleEmailChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="mob" className="form-label">
//             Mobile:
//           </label>
//           <input
//             type="text"
//             id="mob"
//             name="mob"
//             className="form-control"
//             value={doctorInfo.mob}
//             onChange={handleMobChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="address" className="form-label">
//             Address:
//           </label>
//           <textarea
//             id="address"
//             name="address"
//             className="form-control"
//             value={doctorInfo.address}
//             onChange={handleAddressChange}
//           />
//         </div>
//         <button
//           type="button"
//           className="btn btn-primary"
//           onClick={handleRegister}
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }

// export default DoctorRegistration;


import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";

function DoctorRegistration() {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState("");
  const [address, setAddress] = useState("");

  const handleRegister = () => {
    const data = {
      name,
      specialty,
      contactDetails: {
        email,
        mob,
        address,
      },
    };
    axios
      .post("http://localhost:8081/doctors/register", data)
      .then((response) => {
        console.log("Doctor registration successful:", response.data);
        // You can also perform any additional actions here
      })
      .catch((error) => {
        console.error("Doctor registration failed:", error);
        // Handle errors or provide user feedback as needed
      });
    console.log(data);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Doctor Registration</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="specialty" className="form-label">
            Specialty:
          </label>
          <input
            type="text"
            id="specialty"
            className="form-control"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mob" className="form-label">
            Mobile:
          </label>
          <input
            type="text"
            id="mob"
            className="form-control"
            value={mob}
            onChange={(e) => setMob(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <textarea
            id="address"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleRegister}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default DoctorRegistration;
