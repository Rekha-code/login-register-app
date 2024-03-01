import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Login from "./components/Login";
import LoginSignup from "./components/LoginSignup/LoginSignup";

const App = () => {
  return (
    <>
      <div>
        {/* <Login /> */}
        <LoginSignup />
      </div>
    </>
  );
};

export default App;
