import axios from "axios";
import React, { useState, useEffect } from "react";
import "./app.css";
import Table from "./components/Table";
import { Users } from "./components/users.js";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchUsers();
  }, [query]);

  // const search = (data) => {
  //   return data.filter((item) => item.first_name.toLowerCase().includes(query));
  // };

  // console.log(query);
  // console.log(
  //   Users.filter((user) => user.first_name.toLowerCase().includes("ul"))
  // );
  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(event) => setQuery(event.target.value)}
      />

      {<Table data={data} />}
    </div>
  );
}

export default App;
