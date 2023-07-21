import styled from "styled-components";

export const Opinioesstyle = styled.section`
  background-color:#F1F1F2;
z-index:0;

.opinioes {
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
    width: 80%;
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
    border-radius:10px;
    padding:5px;
    height:300px;
    padding: 1rem;
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
    border-radius:50%;
    border:2px solid #F1F1F2;;
}

.avatar img{
    height: 6rem;
    width:6rem;
}
#marcio {
    background-color:green;
}

#mariana{
    background-color:yellow;
}

#isabela {
    background-color:hotpink;
}

.info-div{
    width:70%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    padding-left:1rem;
}

.nome, .cidade, .especialidade {
    color:black;
    width: fit-content;
}

.nome{
    font-weight:bold;
}


@media (min-width: 769px) {
    margin-bottom: 1rem;

    .opinioes {
        padding-bottom:4rem
    }

    .cartoes{
        flex-direction:row;
        flex-wrap:wrap;  
        width:100%
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