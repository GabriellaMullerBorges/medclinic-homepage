import { ContainerHeader } from "./header";
import Logo from '../nav/logoimg';
import { RiMenu3Fill } from 'react-icons/ri';
import { Chamada } from './Pagechamada'

export function Header({ setMenuIsVisible }) {
  return (
  <header>
    <ContainerHeader>
      <section className="navdiminuida">
        <div className="divlogo">
          <Logo></Logo>
        </div>
        <nav className="navNavdiminuida">
            <a href="#home">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="footer">Contato</a>
        </nav>
      </section>

      <section className="div-botao">
        <RiMenu3Fill onClick={() => setMenuIsVisible(true)} className="mobile"/>
      </section>
    </ContainerHeader>
    <Chamada></Chamada>
  </header>
  )
}
