import React from "react";
import Story from "./components/Story";
import { PDFViewer } from "@react-pdf/renderer";

function App() {
  return (
    <div>
      <PDFViewer style={{ width: "100vw", height: "100vh" }}>
        <Story />
      </PDFViewer>
    </div>
  );
}

export default App;
