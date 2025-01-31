import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import First from "./components/First";
import Second from "./components/Second";

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
      <First title="TextUtils" Link="About" showAlert={showAlert} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Second
          heading="Enter the text to analyze below"
          showAlert={showAlert}
        />
        <About />
      </div>
    </>
  );
}

export default App;
