import { Container } from "./containerstyle";
import { IoClose } from 'react-icons/io5'
import { useEffect } from 'react';

export function MenuMobile({menuIsVisible, setMenuIsVisible }) {
   useEffect(() => {
       document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);
    
return (
    <Container isVisible={menuIsVisible}> 
        <IoClose size={40} onClick={() => setMenuIsVisible(false)}/>
        <nav>          
            <a href="#">Home</a>
            <a href="#">Sobre</a>
            <a href="#">Serviços</a>
            <a href="#">Contato</a>
            <a href="#">Login</a>
        </nav>
    </Container>    
)
}