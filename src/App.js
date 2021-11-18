import { useState } from "react";
import "./styles.css";
import CounterComponent from "./counter";
import User from "./User";
export default function App() {
  return (
    <div>
      {/* need to run CounterComponent you need uncomment below line */}
      <CounterComponent />
      {/* <User /> */}
    </div>
  );
}
