import styled from 'styled-components';

export const NavEstilo = styled.div`
nav {
  background-color: #00d2af;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items:flex-end;
  margin: 0;
  padding: 0; 
}

  .logo {
    width: auto;
    height: 50px;
    filter:brightness(100)
  }

  nav ul {
    display:flex;
    width:60%;
    list-style: none;
    justify-content: space-evenly;
    align-items:center;
  }
  
  nav li a {
    text-decoration: none;
    color: #ffffff;
  }

  nav li a:hover {
    text-decoration: underline;
    color: #009393;
  }

  `