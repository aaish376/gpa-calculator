import React, { useState } from "react";
import "../Style/MeritCal.css";

function MeritCal() {
  const [matricObt, setMatricObt] = useState("");
  const [matricTotal, setMatricTotal] = useState("");
  const [interObt, setInterObt] = useState("");
  const [interTotal, setInterTotal] = useState("");
  const [entryTest, setEntryTest] = useState("");
  const [isHafiz, setIsHafiz] = useState(false);
  const [merit, setMerit] = useState(null);

  const calculateMerit = () => {
    const mo = parseFloat(matricObt);
    const mt = parseFloat(matricTotal);
    const io = parseFloat(interObt);
    const it = parseFloat(interTotal);
    const et = parseFloat(entryTest);
    const bonus = isHafiz ? 20 : 0;

    if ([mo, mt, io, it, et].some(isNaN) || mt === 0 || it === 0) {
      alert("Please fill in valid numeric values.");
      return;
    }

    const academicPart = ((mo / 4 + io + bonus) / (mt / 4 + it)) * 75;
    const testPart = et * 0.25;

    const finalMerit = academicPart + testPart;
    setMerit(finalMerit.toFixed(2));
  };

  return (
    <div className="container">
      <h1>PU Merit Calculator</h1>

      <div className="input-group">
        <label>Matric Obtained Marks:</label>
        <input type="number" value={matricObt} onChange={e => setMatricObt(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Matric Total Marks:</label>
        <input type="number" value={matricTotal} onChange={e => setMatricTotal(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Inter Part-I Obtained Marks:</label>
        <input type="number" value={interObt} onChange={e => setInterObt(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Inter Part-I Total Marks:</label>
        <input type="number" value={interTotal} onChange={e => setInterTotal(e.target.value)} />
      </div>

      <div className="input-group">
        <label>PU Entry Test Marks (out of 100):</label>
        <input type="number" value={entryTest} onChange={e => setEntryTest(e.target.value)} />
      </div>

      <div className="checkbox-group">
        <input type="checkbox" checked={isHafiz} onChange={e => setIsHafiz(e.target.checked)} />
        <label>I am Hafiz-e-Quran (+20 marks)</label>
      </div>

      <button onClick={calculateMerit}>Calculate Merit</button>

      {merit !== null && (
        <div className="result">
          <h2>Your Final Merit: {merit} %</h2>
        </div>
      )}

      <div className="explanation">
        <h3>Merit Formula Explanation:</h3>
        <p>
          <strong>Merit =</strong><br />
          ((¼ × Matric Obtained + Inter Part-I + 20<sup>*</sup>) /
          (¼ × Matric Total + Inter Total)) × 75
          <br />+ Entry Test Marks × 0.25
        </p>
        <p>
          <sup>*</sup> 20 additional marks only if you are Hafiz-e-Quran.
        </p>
      </div>
    </div>
  );
}

export default MeritCal;
