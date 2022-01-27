import React from "react";
import Card from "./components/Card";
import Cardfolder1 from "./components/Cardfolder1";
import Cardfolder2 from "./components/Cardfolder2";
import Cardfolder3 from "./components/Cardfolder3";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <Cardfolder1 />
        <Cardfolder2 />
        <Cardfolder3 />
      </div>
      <br />
      <Card />
    </div>
  );
}

export default App;
