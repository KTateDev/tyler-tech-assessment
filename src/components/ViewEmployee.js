import React, { useState, useEffect } from "react";
import AddEmloyee from "../components/AddEmployee";
import Table from "../components/Table";

import Select from "react-select";
const ViewEmployee = (props) => {
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

  const manager = [
    {
      value: 1,
      label: "Jeffery Wells",
    },
    {
      value: 2,
      label: "Victor Atkins",
    },
    {
      value: 3,
      label: "Kelli Hamilton",
    },
  ];

  const handleChange = (e) => {
    // setSelectedValue(obj.value);
    setSelectedValue(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = (e) => {
    setViewAddForm(true);
  };

  return (
    <div className="view">
      {/* <h1>Tyler Tech</h1>
      <span className="manager">Manager:</span> */}
      {/* <Select
        className="manager-dropdown"
        value={manager.find((x) => x.value === selectedValue)}
        options={manager}
        onChange={handleChange}
      /> */}
      {/* console.log({selectedValue}); */}
      <br />
      {/* <pre>{JSON.stringify(selectedValue, null, 2)}</pre> */}
      {/*
      <table className="view-employees">
        <tr>
          <th>Employee ID</th>
          <th>Last Name</th>
          <th>First Name</th>
        </tr>

        {employees ? (
          employees.map((employee, key) => {
            return employee.employeesThatReport.map((reporter, idx) => (
              <tr>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>

                {selectedValue === "1" ? (
                  <>
                    <tr key={idx}>
                      <td>{employee.employeesThatReport[1].id}</td>
                      <td>{reporter.firstName}</td>
                      <td>{reporter.lastName}</td>
                    </tr>
                  </>
                ) : (
                  ""
                )}

                {selectedValue === "2" ? (
                  <>
                    <tr>
                      <td>{employee.id}</td>
                      <td>{reporter.firstName}</td>
                      <td>{reporter.lastName}</td>
                    </tr>
                  </>
                ) : (
                  ""
                )}

                {selectedValue === "3" ? (
                  <>
                    <td>{reporter.id}</td>
                    <td>{reporter.firstName}</td>
                    <td>{reporter.lastName}</td>
                  </>
                ) : (
                  ""
                )}

                {/* {selectedValue === 1 ? (
                    employee.employeesThatReport.map((reporter, idx) => (
                      <tr key={reporter.id}>
                        <td>{reporter.id}</td>
                        <td>{reporter.firstName}</td>
                        <td>{reporter.lastName}</td>
                      </tr>
                    ))
                  ) : selectedValue === 2 ? (
                    employee.employeesThatReport.map((reporter, idx) => (
                      <tr key={reporter.id}>
                        <td>{reporter.id}</td>
                        <td>{reporter.firstName}</td>
                        <td>{reporter.lastName}</td>
                      </tr>
                    ))
                  ) : selectedValue === 3 ? (
                    employee.employeesThatReport.map((reporter, idx) => (
                      <tr>
                        <td>{reporter.id}</td>
                        <td>{reporter.firstName}</td>
                        <td>{reporter.lastName}</td>
                      </tr>
                    ))
                  ) : selectedValue !== 1 ? (
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td></td>
                    </tr>
                  ) : (
                    "")} 
              </tr>
            ));
          })
        ) : (
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        )}
      </table> */}
      {/* <button className="add-employee" onClick={handleClick}>
        Add Employee
      </button> */}

      {viewAddForm === true ? (
        <AddEmloyee
          AddEmployee={(employeeAdded) => setEmployeeAdded(employeeAdded)}
          employees={employees}
        />
      ) : (
        <Table viewAddEmpForm={(viewAddForm) => setViewAddForm(viewAddForm)} />
      )}

      {/* 
      <Table viewAddEmpForm={(viewAddForm) => setViewAddForm(viewAddForm)} />
      {console.log(`view add form : ${viewAddForm}`)} */}

      {employeeAdded === true ? (
        <Table viewAddEmpForm={(viewAddForm) => setViewAddForm(viewAddForm)} />
      ) : (
        <span></span>
      )}

      {/* <AddEmloyee
        AddEmployee={(employeeAdded) => setEmployeeAdded(employeeAdded)}
        employees={employees}
      /> */}
      {console.log(`employee added? : ${employeeAdded}`)}
    </div>
  );
};

export default ViewEmployee;
