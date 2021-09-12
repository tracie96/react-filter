import React from "react";
import "./style.css";
// import "bootstrap/dist/css/bootstrap.css";
import {random , headers } from "./randomData";
import RTable from "./Rtable";

export default function App() {
  const data = random(200);
  return (
    <div className="App">
      <RTable columns={headers} data={data} />
    </div>
  );
}
