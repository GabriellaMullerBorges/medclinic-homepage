import styled from "styled-components";

export const Pesquisastyle = styled.div`

.pesquisa {
  position: relative; /* Adicionamos position relative para que o ::before seja posicionado corretamente */
  z-index:3;
  margin:0.8rem;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.pesquisa::before {
  /* Estilização da pseudo-classe ::before */
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000; /* Cor do background com opacidade */
  opacity: 0.1; /* Define a opacidade para 0.1 (10%) */
  z-index: -1; /* Coloca a pseudo-classe atrás da div e dos elementos filhos */
}

.botoes-pre {
  width: 100%;
  height: fit-content;
  padding: 1px;
  margin: 5px;
}

.botoes-pre button {
  border: 1px solid white;
  padding: 10px;
  border-radius: 30px;
  margin-right: 5px;
  font-size: 18px;
  background-color: transparent; /* Botão inativo */
  color: white;
}

.botoes-pre button.active {
  background-color: #E9EAE9; /* Botão ativo */
  border: 1px solid #56A890;
  color: black;
}

.pesquisa-form {
    width:100%;
    display:flex;
    flex-direction:column;
    padding: 5px;
    border:none;
    outline:none;
}

form select {
    padding: 7px;
    margin: 5px;
    border:none;
    outline:none;
}

select option:checked {
    background-color: #E9EAE9;
    color: black; 
  }

form input {
    margin: 5px;
    background-color:#1C5ECA;
    color:white;
    padding: 7px;
    border:none;
    outline:none;
    font-size:18px;
}


`