import React from 'react';
import logo from '../../assets/icons/logo.png';

function Logo() {
  return (
    <div className="logo-div">
        <img src={logo} alt="MedClinic logo" className="logo" />
    </div>
  )
}

export default  Logo