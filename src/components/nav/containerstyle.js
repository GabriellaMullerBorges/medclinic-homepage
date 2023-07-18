import styled from "styled-components";

export const Container = styled.section`
    position:absolute;
    width:100%;
    height:100%;
    top: 0;
    left: 0; 
    right:0;
    bottom:0;
    z-index: 5;
    display: flex;
    align-items:center;
    justify-content:center;

    backdrop-filter:blur(3px);
    background-color:#00d2af;

    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        filter:brightness(100)
    }

    nav{
        display: flex;
        align-items:center;
        flex-direction:column;
        gap: 3rem;
    }

    nav a {
        text-decoration: none;
        color: #ffffff;
        border-bottom: solid 1px white;
        border-width:100%; /* Define a largura da borda apenas na parte inferior */
;
    }

    nav a:hover {
    color: #009393;
    border-bottom: solid 1px #009393;
  }
`