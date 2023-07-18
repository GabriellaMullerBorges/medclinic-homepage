import { useState } from "react";
import { Header } from "../components/Header/Pageheader";
import { MenuMobile } from "../components/MenuMobile/mobile";
import { HomeContainer } from "./home";

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
    </>
  )
}

