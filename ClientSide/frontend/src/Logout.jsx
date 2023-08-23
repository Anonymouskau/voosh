import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonAlignTopRight() {
  var nav=useNavigate()
    const buttonStyle = {
    position: 'absolute',
    top: '0',
    right: '0',
    backgroundColor: 'lightblue', // Adding light blue background color
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div style={{ position: 'relative' }}>
      <button onClick={()=>{
        sessionStorage.clear()
        nav('/')
      }} style={buttonStyle}>Logout</button>
    </div>
  );
}

export default ButtonAlignTopRight;
