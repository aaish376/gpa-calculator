import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NoteContext from "../context/NoteContext";
import Swal from 'sweetalert2';


const UafGpa = () => {
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
        ph:"Enter marks",
        marksLimit: "ml",
      }))
  );
  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);
  
  const handleInputChange = (index, field, value) => {
    const updatedTableData = [...tableData];
    const numericValue = parseInt(value);

    if (field === "marks") {

      if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= tableData[index].marksLimit) {
        updatedTableData[index] = { ...updatedTableData[index], [field]: numericValue };
      } else {
        updatedTableData[index] = { ...updatedTableData[index], [field]: "" };
      }
    }else if (field === "creditHours") {

      updatedTableData[index] = { ...updatedTableData[index], ph: "Enter marks", marks:"" };
      if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 5) {

        if (numericValue === 1) {
            updatedTableData[index] = { ...updatedTableData[index], ph: "From 1 to 20" , marksLimit:"20"};
          } else if (numericValue === 2) {
           updatedTableData[index] = { ...updatedTableData[index], ph: "From 1 to 40" , marksLimit:"40"};
          } else if (numericValue === 3) {
           updatedTableData[index] = { ...updatedTableData[index], ph: "From 1 to 60" , marksLimit:"60"};
          } else if (numericValue === 4) {
           updatedTableData[index] = { ...updatedTableData[index], ph: "From 1 to 80" , marksLimit:"80"};
          } else if (numericValue === 5) {
            updatedTableData[index] = { ...updatedTableData[index], ph: "From 1 to 100" , marksLimit:"100"};
          } else {
            updatedTableData[index] = { ...updatedTableData[index], ph: "Enter marks" };
          }
        updatedTableData[index] = { ...updatedTableData[index], [field]: numericValue };
      } else {

        updatedTableData[index] = { ...updatedTableData[index], [field]: "" };
        updatedTableData[index] = { ...updatedTableData[index], ph: "Enter marks", marks:"" };
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
      ph:"Enter marks",
      marksLimit:""
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
        if(row.creditHours===1)
        {
            if (row.marks >= 16) {
            gpValue = 4.0;
            } else if (row.marks === 15) {
            gpValue = 3.67;
            } else if (row.marks === 14) {
            gpValue = 3.33;
            } else if (row.marks === 13) {
            gpValue = 3.0;
            } else if (row.marks === 12) {
            gpValue = 2.67;
            } else if (row.marks === 11) {
            gpValue = 2.33;
            } else if (row.marks === 10) {
            gpValue = 2.0;
            } else if (row.marks === 9) {
            gpValue = 1.5;
            } else if (row.marks === 8) {
            gpValue = 1.0;
            } else {
            gpValue = 0.0;
            }
        }
        else if(row.creditHours===2)
        {
            if (row.marks >= 32) {
                gpValue = 8.0;
                } else if (row.marks === 31) {
                gpValue = 7.67;
                } else if (row.marks === 30) {
                gpValue = 7.33;
                } else if (row.marks === 29) {
                gpValue = 7.0;
                } else if (row.marks === 28) {
                gpValue = 6.67;
                } else if (row.marks === 27) {
                gpValue = 6.33;
                } else if (row.marks === 26) {
                gpValue = 6.0;
                } else if (row.marks === 25) {
                gpValue = 5.67;
                } else if (row.marks === 24) {
                gpValue = 5.33;
                } else if (row.marks === 23) {
                gpValue = 5.0;
                } else if (row.marks === 22) {
                gpValue = 4.67;
                } else if (row.marks === 21) {
                gpValue = 4.33;
                } else if (row.marks === 20) {
                gpValue = 4.0;
                } else if (row.marks === 19) {
                gpValue = 3.5;
                } else if (row.marks === 18) {
                gpValue = 3.0;
                } else if (row.marks === 17) {
                gpValue = 2.5;
                } else if (row.marks === 16) {
                gpValue = 2.0;
                } else {
                gpValue = 0.0;
                }

        }
        else if(row.creditHours===3)
        {
            if (row.marks >= 48) {
                gpValue = 12.0;
                } else if (row.marks === 47) {
                gpValue = 11.67;
                } else if (row.marks === 46) {
                gpValue = 11.33;
                } else if (row.marks === 45) {
                gpValue = 11.0;
                } else if (row.marks === 44) {
                gpValue = 10.67;
                } else if (row.marks === 43) {
                gpValue = 10.33;
                } else if (row.marks === 42) {
                gpValue = 10.0;
                } else if (row.marks === 41) {
                gpValue = 9.67;
                } else if (row.marks === 40) {
                gpValue = 9.33;
                } else if (row.marks === 39) {
                gpValue = 9.0;
                } else if (row.marks === 38) {
                gpValue = 8.67;
                } else if (row.marks === 37) {
                gpValue = 8.33;
                } else if (row.marks === 36) {
                gpValue = 8.0;
                } else if (row.marks === 35) {
                gpValue = 7.67;
                } else if (row.marks === 34) {
                gpValue = 7.33;
                } else if (row.marks === 33) {
                gpValue = 7.0;
                } else if (row.marks === 32) {
                gpValue = 6.67;
                } else if (row.marks === 31) {
                gpValue = 6.33;
                } else if (row.marks === 30) {
                gpValue = 6.0;
                } else if (row.marks === 29) {
                gpValue = 5.5;
                } else if (row.marks === 28) {
                gpValue = 5.0;
                } else if (row.marks === 27) {
                gpValue = 4.5;
                } else if (row.marks === 26) {
                gpValue = 4.0;
                } else if (row.marks === 25) {
                gpValue = 3.5;
                } else if (row.marks === 24) {
                gpValue = 3.0;
                } else {
                gpValue = 0.0;
                }

        }
        else if(row.creditHours===4)
        {
            if (row.marks >= 64) {
                gpValue = 16.0;
                } else if (row.marks === 63) {
                gpValue = 15.67;
                } else if (row.marks === 62) {
                gpValue = 15.33;
                } else if (row.marks === 61) {
                gpValue = 15.0;
                } else if (row.marks === 60) {
                gpValue = 14.67;
                } else if (row.marks === 59) {
                gpValue = 14.33;
                } else if (row.marks === 58) {
                gpValue = 14.0;
                } else if (row.marks === 57) {
                gpValue = 13.67;
                } else if (row.marks === 56) {
                gpValue = 13.33;
                } else if (row.marks === 55) {
                gpValue = 13.0;
                } else if (row.marks === 54) {
                gpValue = 12.67;
                } else if (row.marks === 53) {
                gpValue = 12.33;
                } else if (row.marks === 52) {
                gpValue = 12.0;
                } else if (row.marks === 51) {
                gpValue = 11.67;
                } else if (row.marks === 50) {
                gpValue = 11.33;
                } else if (row.marks === 49) {
                gpValue = 11.0;
                } else if (row.marks === 48) {
                gpValue = 10.67;
                } else if (row.marks === 47) {
                gpValue = 10.33;
                } else if (row.marks === 46) {
                gpValue = 10.0;
                } else if (row.marks === 45) {
                gpValue = 9.67;
                } else if (row.marks === 44) {
                gpValue = 9.33;
                } else if (row.marks === 43) {
                gpValue = 9.0;
                } else if (row.marks === 42) {
                gpValue = 8.67;
                } else if (row.marks === 41) {
                gpValue = 8.33;
                } else if (row.marks === 40) {
                gpValue = 8.0;
                } else if (row.marks === 39) {
                gpValue = 7.5;
                } else if (row.marks === 38) {
                gpValue = 7.0;
                } else if (row.marks === 37) {
                gpValue = 6.5;
                } else if (row.marks === 36) {
                gpValue = 6.0;
                } else if (row.marks === 35) {
                gpValue = 5.5;
                } else if (row.marks === 34) {
                gpValue = 5.0;
                } else if (row.marks === 33) {
                gpValue = 4.5;
                } else if (row.marks === 32) {
                gpValue = 4.0;
                } else {
                gpValue = 0.0;
                }

        }
        else if(row.creditHours===5)
        {
            if (row.marks >= 80) {
                gpValue = 20.0;
                } else if (row.marks === 79) {
                gpValue = 19.67;
                } else if (row.marks === 78) {
                gpValue = 19.33;
                } else if (row.marks === 77) {
                gpValue = 19.0;
                } else if (row.marks === 76) {
                gpValue = 18.67;
                } else if (row.marks === 75) {
                gpValue = 18.33;
                } else if (row.marks === 74) {
                gpValue = 18.00;
                } else if (row.marks === 73) {
                gpValue = 17.67;
                } else if (row.marks === 72) {
                gpValue = 17.33;
                } else if (row.marks === 71) {
                gpValue = 17.00;
                } else if (row.marks === 70) {
                gpValue = 16.67;
                } else if (row.marks === 69) {
                gpValue = 16.33;
                } else if (row.marks === 68) {
                gpValue = 16.00;
                } else if (row.marks === 67) {
                gpValue = 15.67;
                } else if (row.marks === 66) {
                gpValue = 15.33;
                } else if (row.marks === 65) {
                gpValue = 15.00;
                } else if (row.marks === 64) {
                gpValue = 14.67;
                } else if (row.marks === 63) {
                gpValue = 14.33;
                } else if (row.marks === 62) {
                gpValue = 14.00;
                } else if (row.marks === 61) {
                gpValue = 13.67;
                } else if (row.marks === 60) {
                gpValue = 13.33;
                } else if (row.marks === 59) {
                gpValue = 13.00;
                } else if (row.marks === 58) {
                gpValue = 12.67;
                } else if (row.marks === 57) {
                gpValue = 12.33;
                } else if (row.marks === 56) {
                gpValue = 12.00;
                } else if (row.marks === 55) {
                gpValue = 11.67;
                } else if (row.marks === 54) {
                gpValue = 11.33;
                } else if (row.marks === 53) {
                gpValue = 11.00;
                } else if (row.marks === 52) {
                gpValue = 10.67;
                } else if (row.marks === 51) {
                gpValue = 10.33;
                } else if (row.marks === 50) {
                gpValue = 10.00;
                } else if (row.marks === 49) {
                gpValue = 9.5;
                } else if (row.marks === 48) {
                gpValue = 9.0;
                } else if (row.marks === 47) {
                gpValue = 8.5;
                } else if (row.marks === 46) {
                gpValue = 8.0;
                } else if (row.marks === 45) {
                gpValue = 7.5;
                } else if (row.marks === 44) {
                gpValue = 7.0;
                } else if (row.marks === 43) {
                gpValue = 6.5;
                } else if (row.marks === 42) {
                gpValue = 6.0;
                } else if (row.marks === 41) {
                gpValue = 5.5;
                } else if (row.marks === 40) {
                gpValue = 5.0;
                } else {
                gpValue = 0.0;
                }

        }

        return gpValue;
      });

      // Calculate total credit hours using tableData directly
      const totalCreditHours = tableData.reduce(
        (total, row) => total + parseFloat(row.creditHours || 0),
        0
      );

      //total GPs
      const totalGPs = gp.reduce(
          (total, gps) => total + gps,
          0
          
      );

      // Calculate total GPA based on credit hours and GPA values
      const totalGPA = totalGPs / totalCreditHours;

      const tGPA = `${totalGPA.toFixed(2)}`;
       const tCH = `${totalCreditHours}`;

      if (flag === "true") {
        const updatedMy = [...my];
        updatedMy[index] = { GPA: tGPA, CreditHour: tCH };
        setMy(updatedMy);

        navigate(-2); // Navigate back to SecondPagee
      } else {

        console.log(totalCreditHours);
        console.log(totalGPs);
        console.log(totalGPA);

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
              
                {row.courseName}
              </td>
              <td name="ch" id="ch">
                <input
                  type="number"
                  placeholder="From 1 to 5"
                  value={row.creditHours}
                  onChange={(e) =>
                    handleInputChange(index, "creditHours", e.target.value)
                  }
                />
              </td>
              <td name="mar" id="mar">
                <input
                  type="number"
                  placeholder={row.ph}
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

export default UafGpa;
