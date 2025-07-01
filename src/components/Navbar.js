// import './Navbar.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import NoteContext from "../context/NoteContext";

const Navbar = () => {
  const { uni } = useContext(NoteContext);
  return (
    <div className="header">

      <div id="h-logos">

      {/* <Link id="logo" to="/components/">
        AAiSH Tech
      </Link> */}
      <Link id="logo-uni" to="/components/">
          Calculator Desk | {uni}
      </Link>
      {/* <div id="logo-uni"  >
        <span>||</span> {uni}
      </div> */}
      
      </div>

      <div className="nav">
        {/* <Link to="/components/">Home</Link> */}
        <Link to="/components/gpa-cal/:flag/:index">GPA</Link>
        <Link to="/components/cgpa-cal">CGPA</Link>
        <Link to="/components/merit-cal">Merit Calculator</Link>
      </div>

    
    </div>
  );
};

export default Navbar;
