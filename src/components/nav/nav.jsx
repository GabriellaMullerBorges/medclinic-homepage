import React from 'react';
import {Logo} from './logoimg';
import { NavEstilo } from './navstyle';


export function Nav() {


   return (
    <>  
        <NavEstilo>
        <nav className='navreta'>
            < Logo />
            <a href="#">Home</a>
            <a href="#">Sobre</a>
            <a href="#">Serviços</a>
            <a href="#">Contato</a>
            <a href="#">Login</a>
        </nav>
        </NavEstilo>
    </>
  );
};

export default Nav;