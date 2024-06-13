import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";
import Step5 from "./pages/Step5";
import Again from "./pages/Again";
import TryAgain from "./pages/TryAgain";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Step1" element={<Step1 />} />
          <Route path="/Step2" element={<Step2 />} />
          <Route path="/Step3" element={<Step3 />} />
          <Route path="/Step4" element={<Step4 />} />
          <Route path="/Step5" element={<Step5 />} />
          <Route path="/Again" element={<Again />} />
          <Route path="/TryAgain" element={<TryAgain />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
