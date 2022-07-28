import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ImBooks } from "react-icons/im";

import "./App.css";

import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <Router className="App">
      <Navbar
        searchbarContent="Search your new book here!"
        siteLogo={[<ImBooks />, "iLibrary"]}
      />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route
          path="/login"
          element={<Login loginDescription="Login to access more books!" />}
        />
      </Routes>
      <Footer
        siteLogo={[<ImBooks />, "iLibrary"]}
        description="Find your next great reading here!"
      />
    </Router>
  );
}

export default App;
