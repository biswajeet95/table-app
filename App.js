import React from "react";
import './App.css';
import { Table } from "react-bootstrap";
import { useState } from "react";




const App = () => {
  const user = [
    { name: "Marywood University", email: "http://www.marywood.edu" },
    { name: "Lindenwood University", email: "https://www.lindenwood.edu/" },
    { name: "Sullivan University", email: "https://sulliven.edu" },
    { name: "Florida State College at Jacksonville", email: "https://www.fscj.edu/" },
    { name: "Xavier University", email: "https://www.xavier.edu/" },
    { name: "Tusculum College", email: "https://home.tusculum.edu/" },
    { name: "Claremont School of Theology", email: "https://cst.edu/" },
    { name: "Columbia College(SC)", email: "https://www.columbiasc.edu/" },
    { name: "Chabot-Las Positas Community College District", email: "https://www.clpccd.edu/" },
    { name: "Keller Garduate School of Management", email: "https://www.keller.edu/" },
    { name: "Monroe College", email: "https://monroecollege.edu/" },
    { name: "San Mateo County Community College District", email: "https://smccd.edu/" },
  ]

  const [value, setValue] = useState('');
  const [dataSource, setDataSource] = useState(user);
  const [tableFilter, setTableFilter] = useState([]);


  const filterData = (e) => {
    if (e.target.value !== "") {
      setValue(e.target.value);
      const filterTable = dataSource.filter(o => Object.keys(o).some(k =>
        String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
      ));
      setTableFilter([...filterTable])
    } else {
      setValue(e.target.value);
      setDataSource([...dataSource])
    }
  }


  return (
    <div className="App">

      <input className="form-control" type="text"
        placeholder="Search" aria-label="Search" onChange={filterData} />

      < Table striped bordered hover>
        <thead>
          <tr >
            <td>Name</td>
            <td>Website</td>
          </tr>
        </thead>


        <tbody>
          {value.length > 0 ? tableFilter.map((items, i) => {
            return (
              <tr key={i}>
                <td>{items.name}</td>
                <td>{items.email}</td>
              </tr>
            )
          })

            :
            dataSource.map((items, i) => {
              return (
                <tr key={i}>
                  <td>{items.name}</td>
                  <td>{items.email}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}




export default App;
