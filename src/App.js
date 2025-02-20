import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/NoteState";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import GpaCal from "./components/GpaCal";
import SecondPage from "./components/SecondPage";
import CgpaCal from "./components/CgpaCal";
import MyPage from "./components/MyPage";
import UafGpa from "./components/UafGpa";
import UafCgpa from "./components/UafCgpa";

function App() {
  return (
    <div className="app-body">
      <NoteState>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/components/" exact element={<HomePage />} />
            <Route path="/components/gpa-cal/:flag/:index" element={<GpaCal />} />
            <Route path="/components/second-page/:numRows/:flag/:index" element={<SecondPage />} />
            <Route path="/components/uaf-gpa/:numRows/:flag/:index" element={<UafGpa />} />

            <Route path="/components/cgpa-cal" element={<CgpaCal />} />
            <Route path="/components/my-page/:numSem" element={<MyPage />} />
            <Route path="/components/uaf-cgpa/:numSem" element={<UafCgpa />} />
          </Routes>

        </Router>
      </NoteState>
    </div>
  );

}

export default App;
