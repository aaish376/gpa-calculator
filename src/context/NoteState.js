import React , {useState,useEffect} from 'react';
import NoteContext from './NoteContext';
const NoteState = (props)=>{

  const [my, setMy] = useState(
    [
      {GPA:'',CreditHour:''},
      {GPA:'',CreditHour:''},
      {GPA:'',CreditHour:''},
      {GPA:'',CreditHour:''},
      {GPA:'',CreditHour:''},
      {GPA:'',CreditHour:''},
      {GPA:'',CreditHour:''},
      {GPA:'',CreditHour:''}
    ]);

  const updateArray = (newArray) => {
    setMy(newArray);
  };

  const setNull = () => {
    setMy(
      [
        {GPA:'',CreditHour:''},
        {GPA:'',CreditHour:''},
        {GPA:'',CreditHour:''},
        {GPA:'',CreditHour:''},
        {GPA:'',CreditHour:''},
        {GPA:'',CreditHour:''},
        {GPA:'',CreditHour:''},
        {GPA:'',CreditHour:''}
      ]);
  };

  // const [uni,setUni]=useState("PUCIT");
  const [uni, setUni] = useState(localStorage.getItem('uni') || 'PUCIT');
  useEffect(() => {
    localStorage.setItem('uni', uni); // Update localStorage whenever uni changes
  }, [uni]);

  return (
    <NoteContext.Provider value={{my,setMy, updateArray,setNull,uni,setUni}}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;
