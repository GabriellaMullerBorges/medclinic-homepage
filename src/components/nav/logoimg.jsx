import React from 'react';
import logo from '../../assets/icons/logo.png';
import { Logostyle } from './logostyle'

function Logo() {
  return (
    <Logostyle><div className="logo-div">
      
        <img src={logo} alt="MedClinic logo" className="logo" />
      
    </div></Logostyle>
  )
}

export default  Logo