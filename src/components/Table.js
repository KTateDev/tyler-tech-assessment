import React, { useState, useEffect } from "react";
import AddEmloyee from "./AddEmployee";

import Select from "react-select";
const Table = (props) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [employees, setEmployees] = useState(null);
  const [employeeAdded, setEmployeeAdded] = useState(false);
  const [viewAddForm, setViewAddForm] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const fullName = "";

  useEffect(() => {
    fetch("http://localhost:8000/employees/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoaded(true);
        setEmployees(data);
        console.log(employees);
      });
  }, [selectedValue]);

  const handleChange = (e) => {
    // setSelectedValue(obj.value);
    setSelectedValue(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = (e) => {
    props.viewAddEmpForm(true);
  };

  const reportingEmp = [];
  console.log(reportingEmp);
  return (
    <div>
      <h1>Tyler Tech</h1>
      <span className="manager">Manager:</span>

      <>
        {employees ? (
          <select onChange={handleChange} className="manager-dropdown">
            {employees.map((employee) => (
              <option value={employee.id}>
                {`${employee.firstName} 
                ${employee.lastName}`}
              </option>
            ))}
          </select>
        ) : (
          <select>
            <option value=""></option>
          </select>
        )}

        <br />

        {/* <pre>{JSON.stringify(selectedValue, null, 2)}</pre> */}
        <table className="view-employees">
          <tr>
            <th>Employee ID</th>
            <th>Last Name</th>
            <th>First Name</th>
          </tr>
          {employees ? (
            employees.map((employee, key) => {
              return (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>

                  {selectedValue === "1" ? (
                    employee.employeesThatReport.map((reporter, i) => (
                      // { employee.isManager === false ? " ": ""}
                      <tr key={`employee${i}`}>
                        <td>{reporter.id}</td>
                        <td>{reporter.firstName}</td>
                        <td>{reporter.lastName}</td>
                      </tr>
                    ))
                  ) : selectedValue === "2" ? (
                    employee.employeesThatReport.map((reporter, i) => (
                      // { employee.isManager === false ? " ": ""}
                      <tr key={`employee${i}`}>
                        <td>{reporter.id}</td>
                        <td>{reporter.firstName}</td>
                        <td>{reporter.lastName}</td>
                      </tr>
                    ))
                  ) : selectedValue === "3" ? (
                    employee.employeesThatReport.map((reporter, i) => (
                      <tr key={`employee${i}`}>
                        <td>{reporter.id}</td>
                        <td>{reporter.firstName}</td>
                        <td>{reporter.lastName}</td>
                      </tr>
                    ))
                  ) : selectedValue !== 1 ? (
                    <tr key={selectedValue}>
                      <td> </td>
                      <td> </td>
                      <td></td>
                    </tr>
                  ) : (
                    ""
                  )}
                </tr>
              );
            })
          ) : (
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
        </table>
      </>
      <button
        className="add-employee"
        onClick={() => props.viewAddEmpForm(true)}
      >
        Add Employee
      </button>
    </div>
  );
};

export default Table;
