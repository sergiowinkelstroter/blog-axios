import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";

import "./App.css";

export function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
