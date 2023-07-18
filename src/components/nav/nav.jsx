import React, { useState } from 'react';
import logo from '../../assets/icons/logo.png';
import { MenuMobile } from './mobile';
import { NavEstilo } from './navstyle';


export function Nav() {

    const [menuIsVisible, setMenuIsVisible] = useState(true)

   return (
    <>  
        <MenuMobile 
            menuIsVisible = {menuIsVisible}
            setMenuIsVisible = {setMenuIsVisible}
        />   
        <NavEstilo>
        <nav>
            <div className="logo-div">
                <img src={logo} alt="MedClinic logo" className="logo" />
            </div>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Sobre</a>
                </li>
                <li>
                    <a href="#">Serviços</a>
                </li>
                <li>
                    <a href="#">Contato</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </nav>
        </NavEstilo>
    </>
  );
};

export default Nav;