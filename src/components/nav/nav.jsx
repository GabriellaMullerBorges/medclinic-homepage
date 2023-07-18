import React from 'react';
import {Logo} from './logoimg';
import { NavEstilo } from './navstyle';


export function Nav() {


   return (
    <>  
        <NavEstilo>
        <nav>
            < Logo />
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