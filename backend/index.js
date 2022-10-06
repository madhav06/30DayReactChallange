import express from "express";
const app = express();
import cors from "cors";

// import { Hello } from "/Users/madhavnandan/Work/30DaysReact-Challange/search-filter-application/backend/data";

import { Hello } from "./hello.js";
app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;
  const keys = ["first_name", "last_name", "email", "gender"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };
  // res.json("hii");
  // res.json(Hello);
  res.json(search(Hello).splice(0, 37));
});

app.listen(5000, () => console.log("API is working!, Running at PORT"));
