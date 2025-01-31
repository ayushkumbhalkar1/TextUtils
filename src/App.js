import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import First from "./components/First";
import Second from "./components/Second";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <First title="TextUtils" About="About" showAlert={showAlert} />
      <Alert alert={alert} />
      <Second heading="Enter the text to analyze below" showAlert={showAlert} />
      {/* <About showAlert={showAlert} /> */}
    </>
  );
}

export default App;
