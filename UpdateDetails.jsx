import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateDetails() {
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

  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:8081/get/' + id)
      .then(res => {
        const employeeData = res.data.Result[0];
        setData({
          name: employeeData.name,
          employeeID: employeeData.employeeID, // Set EmployeeID
          department: employeeData.department, // Set Department
          role: employeeData.role, // Set Role
          startDate: employeeData.startDate, // Set StartDate
          endDate: employeeData.endDate, // Set EndDate
          duties: employeeData.duties, // Set Duties
        });
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put('http://localhost:8081/update/' + id, data)
      .then(res => {
        if (res.data.Status === "Success") {
          navigate('/employee');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex flex-column align-items-center pt-4'>
      <h2>Update Employee</h2>
      <form className="row g-3 w-50" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder='Enter Name'
            autoComplete='off'
            onChange={e => setData({ ...data, name: e.target.value })}
            value={data.name}
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
            value={data.employeeID}
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
            value={data.department}
          />
        </div>
				<div class="col-12">
					<button type="submit" class="btn btn-primary">Update</button>
				</div>
			</form>
		</div>
  )
}

export default UpdateDetails