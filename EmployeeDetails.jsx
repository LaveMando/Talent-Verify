import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EmployeeDetail() {
  // Extract the 'id' parameter from the URL
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);

  // Fetch employee details from the server when the component mounts
  useEffect(() => {
    axios.get('http://localhost:8081/get/' + id)
      .then(res => setEmployee(res.data.Result[0]))
      .catch(err => console.log(err));
  }, [id]); // Dependency array to ensure it runs when 'id' changes

  // Handle the user logout action
  const handleLogout = () => {
    axios.get('http://localhost:8081/logout')
      .then(res => {
        // Navigate to the 'start' page after successful logout
        navigate('/start');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
        <div className='d-flex align-items-center flex-column mt-5'>
          <h3>Name: {employee.name}</h3>
          {/* Display the additional employee details */}
          <h3>EmployeeID: {employee.employeeID}</h3>
          <h3>Department: {employee.department}</h3>
          <h3>Role: {employee.role}</h3>
          <h3>StartDate: {employee.startDate}</h3>
          <h3>EndDate: {employee.endDate}</h3>
          <h3>Duties: {employee.duties}</h3>
        </div>
        <div>
          {/* Button to edit employee information */}
          <button className='btn btn-primary me-2'>Edit</button>
          {/* Button to log the user out */}
          <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetail;
