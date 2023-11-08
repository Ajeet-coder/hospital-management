import React, { useState, useEffect } from "react";
import axios from "axios";

function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    
    axios.get("http://localhost:8081/doctors/all")
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
      });
  }, []);

  const handleDelete = (id) => {

    axios.delete(`http://localhost:8081/doctors/delete/${id}`)
      .then((response) => {
        console.log(`Doctor with ID ${id} deleted successfully.`);
        
        setDoctors(doctors.filter((doctor) => doctor.id !== id));
      })
      .catch((error) => {
        console.error(`Failed to delete doctor with ID ${id}:`, error);
       
      });
  };
  return (
    <div className="container mt-4">
      <h2 className="text-center">List of Doctors</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialty</th>
            <th>Email</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>
              <td>{doctor.contactDetails.email}</td>
              <td>{doctor.contactDetails.address}</td>
              <td>{doctor.contactDetails.mob}</td>
              <td>
                <button
                  className="btn btn-info btn-sm"
                  onClick={() => {
                    // Implement your edit logic here
                    // You can navigate to an edit page or show a modal

                    window.location.href =`edit/${doctor.id}`
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => handleDelete(doctor.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorList;
