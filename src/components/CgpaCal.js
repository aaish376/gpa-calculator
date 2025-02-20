import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/NoteContext";
import Swal from 'sweetalert2';

const CgpaCal = () => {
  
  const { setNull ,uni} = useContext(NoteContext);

  const navigate = useNavigate();
  const [numSem, setNumSem] = useState("");

  const handleInputChange = (value) => {
    const numericValue = parseInt(value);

      if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 8) {
        setNumSem(value)
      } else {
        setNumSem("") };
      
    
  };


  const handleContinue = () => {
    if (numSem >= 1 && numSem <= 8) {
      setNull();
      if(uni==="PUCIT" || uni==="PU")
      {

        navigate(`/components/my-page/${numSem}`);
      }
      else if(uni==="UAF" || uni==="UVAS")
      {
        navigate(`/components/uaf-cgpa/${numSem}`);

      }
    } else {
      // alert("Please Enter value from 1-8!");
      Swal.fire({
        icon: 'warning',
        title: 'Attention',
        text: 'Please! Enter value between [ 1-8 ]',
        width:  `350px`,
        backdrop: ` rgba(0,0,0,0.99) `

      })
    }
  };

  return (
  

      <div className="basic-container cgpa-body">

        <div className="bc-heading">
          <h2>CGPA CALCULATOR</h2>
        </div>

        <label>
          <h4>Enter Your Number of Semesters:</h4>
          </label>
          <input
            id="input-bar"
            autoFocus={true}
            placeholder="From Range 1-8"
            type="number"
            value={numSem}
            onChange={(e) =>  handleInputChange(parseInt(e.target.value))}
          />
        <button onClick={handleContinue}>Continue</button>

        <div className="sig"> Developed with <span role="img" aria-label="dog">❤️</span> by <span><b>AAiSH Tech</b></span></div>
      </div>

  
  );
};

export default CgpaCal;
