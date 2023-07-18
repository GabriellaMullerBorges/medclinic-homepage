import { Container } from "./containerstyle";
import { IoClose } from 'react-icons/io5'

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
return (
    <Container>
        <IoClose size={45}/>
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