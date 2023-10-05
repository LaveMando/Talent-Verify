import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Home() {
  const [employeeCount, setEmployeeCount] = useState();
  const [companyData, setCompanyData] = useState([]); // State to store company data

  useEffect(() => {
    // Fetch the employee count from the server
    axios.get('http://localhost:8081/employeeCount')
      .then(res => {
        setEmployeeCount(res.data[0].employee);
      })
      .catch(err => console.log(err));

    // Fetch company data from the server
    axios.get('http://localhost:8081/companyData')
      .then(res => {
        setCompanyData(res.data);
      })
      .catch(err => console.log(err));
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <div className='p-3 d-flex justify-content-around mt-3'>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Employee</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Total: {employeeCount}</h5>
          </div>
        </div>
      </div>

      {/* Table displaying company details */}
      <div className='mt-4 px-5 pt-3'>
        <h3>Company Details</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Date of Registration</th>
              <th>Company Registration Number</th>
              <th>Address</th>
              <th>Contact Person</th>
              <th>List of Departments</th>
            </tr>
          </thead>
          <tbody>
            {companyData.map((company, index) => (
              <tr key={index}>
                <td>{company.dateOfRegistration}</td>
                <td>{company.registrationNumber}</td>
                <td>{company.address}</td>
                <td>{company.contactPerson}</td>
                <td>{company.departments.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
