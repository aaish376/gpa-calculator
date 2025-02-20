// import './HomePage.css';
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import NoteContext from "../context/NoteContext";

const HomePage = () => {
  const navigate = useNavigate();
  const { uni,setUni } = useContext(NoteContext);
  const flag = false;
  const index = 0;

  
  const handleUniChange = (event) => {
    setUni(event.target.value);
    localStorage.setItem('uni', uni);
  };

  return (
    

      <div className="basic-container home-body">

        <h1>Hey, Dude! Welcome Here!</h1>
        <h5>Select Your University/Department:</h5>
        <select id="uni-selector" value={uni} onChange={handleUniChange}>
        <option value="PU">PU</option>
        <option value="PUCIT">PUCIT</option>
        <option value="UAF">UAF</option>
        <option value="UVAS">UVAS</option>
        {/* <option value="UET">UET</option> */}
      </select>

        {/* <div className="btns"> */}
        <button id="btn" onClick={() => navigate(`/components/gpa-cal/${flag}/${index}`)}>
          GPA
        </button>
        <button id="btn" onClick={() => navigate("/components/cgpa-cal")}>CGPA</button>
        {/* </div> */}
        
        <div className="sig"> Developed with <span role="img" aria-label="dog">❤️</span> by <span><b>AAiSH Tech</b></span></div>
      </div>
 
  );
};

export default HomePage;
