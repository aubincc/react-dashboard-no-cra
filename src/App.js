import React from "react";
import ChechlistLogo from "./assets/checklist.svg";

const App = () => {
  return (
    <div className="welcome">
      <span className="title">React 18: no CRA</span>
      <div className="logo">
        <img src={ChechlistLogo} alt="checklist" />
      </div>
      <span className="details">You may start editing your website now!</span>
    </div>
  );
};

export default App;
