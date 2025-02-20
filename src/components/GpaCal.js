import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import { useContext } from "react";
import NoteContext from "../context/NoteContext";

const GpaCal = () => {
  const navigate = useNavigate();
  const { uni } = useContext(NoteContext);
  const [numRows, setNumRows] = useState("");
  const { flag, index } = useParams();

  const handleInputChange = (value) => {
    const numericValue = parseInt(value);

      if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 8) {
        setNumRows(value)
      } else {
        setNumRows(`numericValue/10`) 
        // Swal.fire({
        //   icon: 'warning',
        //   title: 'Attention',
        //   text: 'Please! Enter value between [ 1-8 ]',
        //   backdrop: ` rgba(0,0,0,0.99) `
        // })
      };
      
    
  };

  const handleContinue = () => {
    if (numRows>=1 && numRows<=8) {
      if(uni==="PUCIT" || uni==="PU")
      {

        navigate(`/components/second-page/${numRows}/${flag}/${index}`);
      }
      else if(uni==="UAF" || uni==="UVAS")
      {
        navigate(`/components/uaf-gpa/${numRows}/${flag}/${index}`);

      }
     
    }
    else
    {
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
      <div className="basic-container gpa-body">

        <div className="bc-heading">
          <h2>GPA CALCULATOR</h2>
        </div>

        {/* <div className="bc-body"> */}
          {/* <label> */}
            <h4>Enter No. Subjects including Labs:</h4>
            {/* </label> */}

            <input 
              id="input-bar"
              autoFocus={true}
              
              placeholder="From Range 1-8"
              type="number"
              value={numRows}
              onChange={(e) => handleInputChange(parseInt(e.target.value))}
            />
          <button onClick={handleContinue}>Continue</button>
        {/* </div> */}

        <div className="sig"> Developed with <span role="img" aria-label="dog">❤️</span> by <span><b>AAiSH Tech</b></span></div>
      </div>
      
  );
};

export default GpaCal;
