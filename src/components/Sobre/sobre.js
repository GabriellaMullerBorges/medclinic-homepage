import styled from "styled-components";

export const Sobrestyle = styled.div`

height: fit-content;
width:100%;
background-color:#F1F1F2;
opacity: 1;
z-index: 1;
color: black;
font-size: 18px;
font-weight: 400;
padding: 1rem;

.sobre {
    color: #13643D;
    font-size:20px
}

@media (min-width: 1024px) {

.sobre{
    display:flex;
    flex-direction:row; 
    max-height:20vh;
    }
}

`