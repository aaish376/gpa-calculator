import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NoteContext from "../context/NoteContext";
import Swal from 'sweetalert2';

const UafCgpa = () => {
    
  const flag = true;
  const { my, setNull, setMy } = useContext(NoteContext);

  const { numSem } = useParams();
  const navigate = useNavigate();

  const [tableData] = useState(
    Array(Number(numSem))
      .fill()
      .map((_, i) => ({
        semester: `Sem:${i + 1}`,
      }))
  );

  const handleInputChange = (index, field, value) => {
    const uMy = [...my];
    const numericValue = parseFloat(value);

    if (field === "GPA") {

      if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 4) {
        uMy[index] = { ...uMy[index], [field]: numericValue };
      } else {
        uMy[index] = { ...uMy[index], [field]: "" };
      }
    }
     else {
      uMy[index] = { ...uMy[index], [field]: value };
    }
    
    setNull();
    setMy(uMy);
  };

  const handleButtonClick = (index) => {
    console.log(my);
    navigate(`/components/gpa-cal/${flag}/${index}`);
  };
  
  const handleButtonClear = () => {
    setNull();
  };
  
  const handleContinue = () => {
    const totalGPA = my.reduce(
      (total, row) => total + parseFloat(row.GPA || 0),
      0
    );
 

    const cgpa = totalGPA / numSem;
    const firstXElements = my.slice(0, numSem);
    const anyEmptyFields = firstXElements.some(
      (row) => !row.GPA && !row.CreditHour
    );

    console.log(firstXElements);

    if (!anyEmptyFields) {
      Swal.fire({
        icon: 'success',
        title: `CGPA: ${cgpa.toFixed(2)}`,
        text: 'Keep Growing Ever!',
        width:  `350px`,
        backdrop: ` rgba(0,0,0,0.99) `
      })
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Attention',
        text: 'Please! Fill all attributes.',
        width:  `350px`,
        backdrop: ` rgba(0,0,0,0.99) `
      })
    }
  };

  return (
    <div className="basic-container mypage-body">
       <div className="bc-heading">
          <h2>CGPA CALCULATOR</h2>
        </div>

      <table className="mypage-table">
        <thead>
          <tr>
            <th></th>
            <th>GPA</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td id="sem-col"> {row.semester} </td>
              <td>
                <input
                  type="number"
                  value={my[index].GPA}
                  placeholder="From 0 to 4"
                  onChange={(e) =>
                    handleInputChange(index, "GPA", e.target.value)
                  }
                />
              </td>
              <td>
                <button onClick={() => handleButtonClick(index)}>Get</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div id="info">You can click on <span><b>Get</b></span> button to calculate GPA , if you dont't know.</div>
      <div id="btns-mypage">
      <button id="btn1-mypage" onClick={handleContinue}>Calculate</button>
      <button id="btn2-mypage" onClick={handleButtonClear}>Clear All</button>
      </div>

      <div className="sig"> Developed with <span role="img" aria-label="dog">❤️</span> by <span><b>AAiSH Tech</b></span></div>
    </div>
  );
};

export default UafCgpa;
