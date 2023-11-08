import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import the useParams and useNavigate hooks
import axios from "axios";

function DoctorEdit() {
  const { id } = useParams(); // Access the 'id' parameter
  const navigate = useNavigate(); // Get the navigate function

  const [doctor, setDoctor] = useState({
    name: "",
    specialty: "",
    contactDetails: {
      email: "",
      address: "",
      mob: "",
    },
  });

  useEffect(() => {
    // Fetch the doctor's data using the 'id' parameter
    axios.get(`http://localhost:8081/doctors/byId/${id}`)
      .then((response) => {
        setDoctor(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch doctor data:", error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctor({
      ...doctor,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    // Update the doctor data using the 'id' parameter
    axios.put(`http://localhost:8081/doctors/update/${id}`, doctor)
      .then((response) => {
        console.log("Doctor data updated successfully:", response.data);
        navigate("/doctors"); // Redirect to the list of doctors after update
      })
      .catch((error) => {
        console.error("Failed to update doctor data:", error);
        // Handle errors or provide user feedback as needed
      });
  };


  return (
    <div className="container mt-4">
      <h2 className="text-center">Edit Doctor</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={doctor.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="specialty" className="form-label">
            Specialty:
          </label>
          <input
            type="text"
            id="specialty"
            name="specialty"
            className="form-control"
            value={doctor.specialty}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={doctor.contactDetails.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mob" className="form-label">
            Mobile:
          </label>
          <input
            type="text"
            id="mob"
            name="mob"
            className="form-control"
            value={doctor.contactDetails.mob}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <textarea
            id="address"
            name="address"
            className="form-control"
            value={doctor.contactDetails.address}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default DoctorEdit;
