import { useState } from "react";
import { Header } from "../components/Header/Pageheader";
import { MenuMobile } from "../components/MenuMobile/mobile";
import { HomeContainer } from "./home";
import { Sobre } from '../components/Sobre/Pagesobre'
import { Servicos } from "../components/Servicos/Pageservicos";
import { Footer } from "../components/Footer/Pagefooter";
import { Extras } from "../components/Extras/Pageextra";

export function Home () {
  const [menuIsVisible, setMenuIsVisible]= useState(false);

  return (
    <>
      <MenuMobile
       menuIsVisible={menuIsVisible}
       setMenuIsVisible={setMenuIsVisible}
      />
      <HomeContainer>
        <Header setMenuIsVisible={setMenuIsVisible}/>
      </HomeContainer>
      <Sobre></Sobre>
      < Servicos></Servicos>
      < Extras></ Extras >
      <Footer></Footer>
    </>
  )
}

