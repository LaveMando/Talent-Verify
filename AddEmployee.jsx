import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddEmployee() {
  // Define state to manage form input data
  const [data, setData] = useState({
    name: '',
    employeeID: '', // Add EmployeeID field
    department: '', // Add Department field
    role: '', // Add Role field
    startDate: '', // Add StartDate field
    endDate: '', // Add EndDate field
    duties: '', // Add Duties field
  });
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send a POST request to create a new employee with the form data
    axios.post('http://localhost:8081/create', data)
      .then(res => {
        // Navigate to the 'employee' page after successful creation
        navigate('/employee');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex flex-column align-items-center pt-4'>
      <h2>Add Employee</h2>
      <form className="row g-3 w-50" onSubmit={handleSubmit}>
        {/* Input fields for employee information */}
        <div className="col-12">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder='Enter Name'
            autoComplete='off'
            onChange={e => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputEmployeeID" className="form-label">EmployeeID</label>
          <input
            type="text"
            className="form-control"
            id="inputEmployeeID"
            placeholder='Enter EmployeeID'
            autoComplete='off'
            onChange={e => setData({ ...data, employeeID: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputDepartment" className="form-label">Department</label>
          <input
            type="text"
            className="form-control"
            id="inputDepartment"
            placeholder='Enter Department'
            autoComplete='off'
            onChange={e => setData({ ...data, department: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputRole" className="form-label">Role</label>
          <input
            type="text"
            className="form-control"
            id="inputRole"
            placeholder='Enter Role'
            autoComplete='off'
            onChange={e => setData({ ...data, role: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputStartDate" className="form-label">StartDate</label>
          <input
            type="text"
            className="form-control"
            id="inputStartDate"
            placeholder='Enter StartDate'
            autoComplete='off'
            onChange={e => setData({ ...data, startDate: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputEndDate" className="form-label">EndDate</label>
          <input
            type="text"
            className="form-control"
            id="inputEndDate"
            placeholder='Enter EndDate'
            autoComplete='off'
            onChange={e => setData({ ...data, endDate: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputDuties" className="form-label">Duties</label>
          <input
            type="text"
            className="form-control"
            id="inputDuties"
            placeholder='Enter Duties'
            autoComplete='off'
            onChange={e => setData({ ...data, duties: e.target.value })}
          />
        </div>
        <div className="col-12">
          {/* Submit button */}
          <button type="submit" className="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  );
}

export default AddEmployee;
