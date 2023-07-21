import styled from "styled-components";

export const Servicosstyle = styled.div`
background-color:#F1F1F2;

.servicos {
 padding: 1rem;
}

.especialistas, .consultas, .avaliacoes {
 background-color:white;
 padding: 0.5rem;
 margin: 1rem 0;
 border-radius: 15px;
 display: flex;
 flex-direction: column;
}

.tituloservico {
    font-weight:bold;
}

.titulo, .texto {
    color:black;
}

.texto {
    font-weight: 400;
}

.chamada {
    display:flex;
    align-items:baseline
}

.icone {
    margin-right: 0.5rem;
}

@media (min-width: 1024px){
    .servicos {
        display:flex;
         justify-content: space-between;
         padding: 0 4rem;
         
    }
}



`