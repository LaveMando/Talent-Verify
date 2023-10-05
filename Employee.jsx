import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Employee() {
  const [data, setData] = useState([]);

  // Fetch employee data from the server when the component mounts
  useEffect(() => {
    axios.get('http://localhost:8081/getEmployee')
      .then(res => {
        if (res.data.Status === "Success") {
          setData(res.data.Result);
        } else {
          alert("Error");
        }
      })
      .catch(err => console.log(err));
  }, []);

  // Handle employee deletion
  const handleDelete = (id) => {
    axios.delete('http://localhost:8081/delete/' + id)
      .then(res => {
        if (res.data.Status === "Success") {
          // Reload the page after successful deletion
          window.location.reload(true);
        } else {
          alert("Error");
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3>Employee List</h3>
      </div>
      <Link to="/create" className='btn btn-success'>Add Employee</Link>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>EmployeeID</th>
              <th>Department</th>
              <th>Role</th>
              <th>StartDate</th>
              <th>EndDate</th>
              <th>Duties</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee, index) => {
              return (
                <tr key={index}>
                  <td>{employee.name}</td>
                  <td>{employee.employeeID}</td>
                  <td>{employee.department}</td>
                  <td>{employee.role}</td>
                  <td>{employee.startDate}</td>
                  <td>{employee.endDate}</td>
                  <td>{employee.duties}</td>
                  <td>
                    <Link to={`/employeeEdit/${employee.id}`} className='btn btn-primary btn-sm me-2'>edit</Link>
                    <button onClick={() => handleDelete(employee.id)} className='btn btn-sm btn-danger'>delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employee;
