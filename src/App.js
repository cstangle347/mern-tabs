import React from "react";
import "./styles.css";

import Tabs from "./components/Taps";

function App() {
  return (
    <div className="App">
      <Tabs
        items={[
          {
            label: "One",
            content: "This is the text for box number 1"
          },
          {
            label: "Two",
            content: "This is the text for box number 2"
          },
          {
            label: "Three",
            content: "This is the text for box number 3"
          }
        ]}
      />
    </div>
  );
}

export default App;
