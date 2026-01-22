import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Link,
} from "react-router";
import Index from "./blackTheme/Index.jsx";
import Registration from "./blackTheme/Registration.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="flex">
          <Link to="/">Index</Link>
          <Link to="/Registration">Registration</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}
