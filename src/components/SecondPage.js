import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NoteContext from "../context/NoteContext";
import Swal from 'sweetalert2';


const SecondPage = () => {
  const { my,  setMy } = useContext(NoteContext);
  const navigate = useNavigate();
  const { numRows, flag, index } = useParams();

  const [tableData, setTableData] = useState(
    Array(Number(numRows))
      .fill()
      .map((_, i) => ({
        courseName: `Subj:${i + 1}`,
        creditHours: "",
        marks: "",
      }))
  );
  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);
  
  const handleInputChange = (index, field, value) => {
    const updatedTableData = [...tableData];
    const numericValue = parseFloat(value);

    if (field === "marks") {

      if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 100) {
        updatedTableData[index] = { ...updatedTableData[index], [field]: numericValue };
      } else {
        updatedTableData[index] = { ...updatedTableData[index], [field]: "" };
      }
    }else if (field === "creditHours") {

      if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 6) {
        updatedTableData[index] = { ...updatedTableData[index], [field]: numericValue };
      } else {

        updatedTableData[index] = { ...updatedTableData[index], [field]: "" };
      }
    } else {
      updatedTableData[index] = { ...updatedTableData[index], [field]: value };
    }
  
    setTableData(updatedTableData);
    validateAllFields(updatedTableData);
  };

  const validateAllFields = (data) => {
    const allFieldsFilled = data.every(
      (row) => row.courseName && row.creditHours && row.marks
    );
    setIsAllFieldsFilled(allFieldsFilled);
  };

  const handleButtonClear = () => {

    const clearedTableData = Array(Number(numRows))
    .fill()
    .map((_, i) => ({
      courseName: `Subj:${i + 1}`,
      creditHours: "",
      marks: "",
    }));

  setTableData(clearedTableData);
    
  };

  const handleContinue = () => {
    console.log(numRows);
    console.log(flag);
    console.log(flag);

    if (isAllFieldsFilled) {
      // Continue logic
      const gp = tableData.map((row) => {
        let gpValue;

        // Calculate GP based on marks
        if (row.marks >= 85) {
          gpValue = 4.0;
        } else if (row.marks >= 80) {
          gpValue = 3.7;
        } else if (row.marks >= 75) {
          gpValue = 3.3;
        } else if (row.marks >= 70) {
          gpValue = 3.0;
        } else if (row.marks >= 65) {
          gpValue = 2.7;
        } else if (row.marks >= 61) {
          gpValue = 2.3;
        } else if (row.marks >= 58) {
          gpValue = 2.0;
        } else if (row.marks >= 55) {
          gpValue = 1.7;
        } else if (row.marks >= 50) {
          gpValue = 1.0;
        } else {
          gpValue = 0.0;
        }

        return gpValue;
      });

      // Calculate total credit hours using tableData directly
      const totalCreditHours = tableData.reduce(
        (total, row) => total + parseFloat(row.creditHours || 0),
        0
      );

      // Calculate total GPA based on credit hours and GPA values
      const totalGPA =
        gp.reduce(
          (total, gpa, index) =>
            total + gpa * parseFloat(tableData[index].creditHours || 0),
          0
        ) / totalCreditHours;
      const tGPA = `${totalGPA.toFixed(2)}`,
        tCH = `${totalCreditHours}`;
      if (flag === "true") {
        const updatedMy = [...my];
        updatedMy[index] = { GPA: tGPA, CreditHour: tCH };
        setMy(updatedMy);

        navigate(-2); // Navigate back to SecondPagee
      } else {
        Swal.fire({
          icon: 'success',
          title: `GPA: ${totalGPA.toFixed(2)} | CH: ${totalCreditHours.toFixed(2)}`,
          text: 'Keep Growing Ever!',
          width:  `350px`,
          backdrop: ` rgba(0,0,0,0.99) `
        })
      }
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
    <div className="basic-container secondpage-body">
      
      <div className="bc-heading">
          <h2>GPA CALCULATOR</h2>
        </div>

      <table className="secondpage-table">
        <thead>
          <tr>
            <th></th>
            <th>Credit Hours</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {tableData.map((row, index) => (
            <tr key={index}>
              <td id="sem-col">
                {/* <input
                  type="text"
                  placeholder="Course Name"
                  value={row.courseName}
                  onChange={(e) =>
                    handleInputChange(index, "courseName", e.target.value)
                  }
                /> */}
                {row.courseName}
              </td>
              <td name="ch" id="ch">
                <input
                  type="number"
                  placeholder="From 0.5 to 6"
                  value={row.creditHours}
                  onChange={(e) =>
                    handleInputChange(index, "creditHours", e.target.value)
                  }
                />
              </td>
              <td name="mar" id="mar">
                <input
                  type="number"
                  placeholder="From 0 to 100"
                  value={row.marks}
                  onChange={(e) =>
                    handleInputChange(index, "marks", e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* {!isAllFieldsFilled && <h4 style={{ color: 'red' }}>Fields Required</h4>}
      <button className='continue-button' onClick={handleContinue} disabled={!isAllFieldsFilled}></button> */}
      <div id="btns-mypage">
      <button id="btn1-mypage" onClick={handleContinue}>Calculate</button>
      <button id="btn2-mypage" onClick={handleButtonClear}>Clear All</button>

      </div>

      <div className="sig"> Developed with <span role="img" aria-label="dog">❤️</span> by <span><b>AAiSH Tech</b></span></div>
    </div>
  );
};

export default SecondPage;
