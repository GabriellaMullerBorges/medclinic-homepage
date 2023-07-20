import styled from "styled-components";

export const Perfilstyle = styled.section`

z-index:0;

.perfis {
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding-top: 1rem;
}
.cartoes{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding: 0.5rem 0;
}

h4 {
    color:#56A890;
    font-weight:bold;
}

.card {
    margin-top: 1rem;
    width:100%;
    display:flex;
    flex-direction:row;
    background-color:#F1F1F2;
    border-radius:10px;
    padding:5px;
    height:200px;
}

.avatar-div{
    display:flex;
    width:30%;
    height:auto;
    justify-content:center;
    align-items:center;
}
.avatar{
    height: 6rem;
    width:6rem;
    border: 3px solid #1C5ECA;
    border-radius:50%;
}

.info-div{
    width:70%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
}

.nome, .cidade, .especialidade {
    color:black;
    width: fit-content;
    padding-left: 1rem;
}

.nome{
    font-weight:bold;
}

@media (min-width: 769px) {
    margin-bottom: 1rem;

    .cartoes{
        flex-direction:row;
        flex-wrap:wrap;  
    }

    .card{
        width:400px;
        margin-right:1rem;
    }

    .info-div{
    width:70%;
    height:100%;
}
}
`