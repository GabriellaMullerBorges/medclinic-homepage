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
            <a href="#home">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="footer">Contato</a>
        </nav>
    </Container>    
)
}