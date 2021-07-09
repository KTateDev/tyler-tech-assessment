import React, { useState } from "react";

const AddEmployee = (props) => {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);

  //   handleChange(e) {
  //       this.setState({value: event.target.value});
  //     }

  //const managerSelected

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(` the employee id is ${id}`);
    const employee = { id, firstName, lastName, role };
    fetch("http://localhost:8000/employees", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(employee),
    }).then(() => {
      console.log("new employee added");
      props.AddEmployee(true);
      //console.log(props.employeeAdded);
    });
  };

  const handleChange = (e) => {
    // setSelectedValue(obj.value);
    setSelectedValue(e.target.value);
    console.log(e.target.value);
  };

  <span className="manager">Manager:</span>;

  {
    props.employees ? (
      <select onChange={handleChange} className="manager-dropdown">
        {props.employees.map((employee) => (
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
    );
  }

  return (
    <div>
      <div className="add-employee-container">
        <form onSubmit={handleSubmit} className="add-employee-form">
          <label htmlFor="name">
            <span className="employee-id">Employee ID:</span>
            <input
              className="employee-input"
              type="text"
              name="name"
              required
              value={id}
              onChange={(e) => setId(e.target.value)}
              // value={this.state.name}
              // onChange={this.handleChange}
            />
          </label>{" "}
          <br />
          <label htmlFor="name" className="inputs">
            <span className="input-labels">Last Name:</span>
            <input
              className="inputs"
              type="text"
              name="lastName"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              // value={this.state.lastname}
              // onChange={this.handleChange}
            />{" "}
            <br />
          </label>
          <label htmlFor="name">
            <span className="input-labels"> First Name:</span>
            <input
              className="inputs"
              type="text"
              name="firstName"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              // value={this.state.email}
              // onChange={this.handleChange}
            />
          </label>{" "}
          <br />
          <label>
            <span className="roles-input"> Roles: </span>
            <textarea
              classname="roles-input"
              type="text"
              name="role"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
            ></textarea>
          </label>
          <br />
          <input type="submit" value="Save" className="add-employee-btn" />
          <input type="button" value="cancel" className="add-employee-btn" />
        </form>
      </div>
      <p>{id}</p>
      <p>{lastName}</p>
      <p>{firstName}</p>
      <p>{role}</p>
      console.log({id});
    </div>
  );
};

export default AddEmployee;
