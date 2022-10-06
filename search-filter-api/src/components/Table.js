import React from "react";

const Table = ({ data }) => {
  return (
    <div className="container">
      <table>
        <tbody>
          <tr className="row">
            <th className="header">Name</th>
            <th className="header">Surname</th>
            <th className="header">Email</th>
            <th className="header">Gender</th>
          </tr>

          {data.map((item) => (
            <tr key={item.id} className="data">
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
