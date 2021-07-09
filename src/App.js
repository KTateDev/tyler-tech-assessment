import React, { useState } from "react";
import AddEmloyee from "./components/AddEmployee";
import ViewEmployee from "./components/ViewEmployee";
import "./App.css";
import Select from "react-select";
import AddEmployee from "./components/AddEmployee";

function App() {
  // const [employeeAdded, setEmployeeAdded] = useState(true);

  return (
    <div className="container">
      {/* <ViewEmployee /> */}
      <ViewEmployee />
      {/* <AddEmloyee
        AddEmployee={(employeeAdded) => setEmployeeAdded(employeeAdded)}
        // setEmployeeAdded={setEmployeeAdded}
        // employeeAdded={employeeAdded}
      /> */}
      {/* {console.log(employeeAdded)} */}
    </div>
  );
}

export default App;
