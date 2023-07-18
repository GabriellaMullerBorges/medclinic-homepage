import { ContainerHeader } from "./header";
import Logo from '../nav/logoimg';
import { RiMenu3Fill } from 'react-icons/ri';

export function Header({ setMenuIsVisible }) {
  return (
    <ContainerHeader>
      <section>
        <Logo></Logo>
        <nav>
          <a href="#">Home</a>
          <a href="#">Produtos</a>
          <a href="#">Sobre nós</a>
          <a href="#">Contato</a>
        </nav>
      </section>

      <section>
        <RiMenu3Fill onClick={() => setMenuIsVisible(true)} className="mobile"/>
      </section>
    </ContainerHeader>
  )
}
