import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import pu1 from './img/pu1.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <App />
      <div style={{
        width:'100%',
        height:'100%',
        // backgroundImage: `url(${pu1})`



      }}></div>
     
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


