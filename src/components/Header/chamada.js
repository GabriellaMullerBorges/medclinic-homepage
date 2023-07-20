import styled from "styled-components";

export const Chamadastyle = styled.div`

background-image: url(https://img.freepik.com/free-photo/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854064.jpg?w=1060&t=st=1685816314~exp=1685816914~hmac=7d2736b757665f3bc183063fbee7fe0855ed953fd762d0ed3ca2d4d52b603f5d);
background-position:center;
background-repeat:no-repeat;
background-size:cover;

.chamadadiv{
    height:450px;
    width:100%;
    background-color: rgba(102,205,170,0.93);
    z-index: 0;
    display:flex;
    flex-direction:column;
    overflow-y: hidden; 
}

.chamadatexto{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    padding-left:1rem;
    z-index: 2;
    margin:2rem
}
.chamadatexto h1 {
  text-align:center;
  font-weight:bold;
}
.chamadatexto h3 {
  text-align:center;
}


.doctors {
  display:none;
  z-index: 0;
  opacity:0.2;
  max-width: 100%; /* Define a largura máxima como 100% */
  height: 150%; /* Define a altura máxima como 100% */
  object-fit: contain;
  background-position: top;
    background-repeat: no-repeat;
}

`