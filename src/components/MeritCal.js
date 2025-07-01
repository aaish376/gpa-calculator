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
      <h1>🎓 PU Merit Calculator</h1>

      <div className="input-grid">
        <div className="form-group">
          <label>Matric Obtained Marks</label>
          <input
            type="number"
            value={matricObt}
            onChange={(e) => setMatricObt(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Matric Total Marks</label>
          <input
            type="number"
            value={matricTotal}
            onChange={(e) => setMatricTotal(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Inter Part-I Obtained Marks</label>
          <input
            type="number"
            value={interObt}
            onChange={(e) => setInterObt(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Inter Part-I Total Marks</label>
          <input
            type="number"
            value={interTotal}
            onChange={(e) => setInterTotal(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>PU Entry Test Marks (out of 100)</label>
          <input
            type="number"
            value={entryTest}
            onChange={(e) => setEntryTest(e.target.value)}
          />
        </div>

        <div className="form-group hafiz-check">
          <label>
            <input
              type="checkbox"
              checked={isHafiz}
              onChange={(e) => setIsHafiz(e.target.checked)}
            />
            Hafiz-e-Quran (Add 20 bonus marks)
          </label>
        </div>
      </div>

      <button className="calculate-btn" onClick={calculateMerit}>
        🎯 Calculate Merit
      </button>

      {merit !== null && (
        <div className="result">
          <h2>📢 Your Final Merit: <span>{merit}%</span></h2>
        </div>
      )}

      <div className="explanation">
        <h3>🧮 Merit Calculation Formula</h3>
        <p>
          <strong>
            Merit = <br />
            ((¼ × Matric Obtained + Inter Part-I + <span className="bonus">+20*</span>) <br />
            ÷ (¼ × Matric Total + Inter Total)) × 75 <br />
            + PU Entry Test Marks × 0.25
          </strong>
        </p>
        <p className="note">* Bonus only if Hafiz-e-Quran is checked</p>
        <hr />
        <ul>
          <li>✔ 25% weight: Matric (¼ weight)</li>
          <li>✔ 50% weight: Inter Part-I</li>
          <li>✔ 25% weight: PU Admission Test</li>
        </ul>
      </div>
    </div>
  );
}

export default MeritCal;
