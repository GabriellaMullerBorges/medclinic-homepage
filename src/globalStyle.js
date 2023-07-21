import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


* {
    margin: 0;
    padding: 0;
    height:fit-content;
   
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      transition:.3s;
    }
    ::-webkit-scrollbar-thumb {
      background: darkgrey;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: #fff;
      border-radius: 10px;
    }
  }

  body {
    font-family:'poppins';
    color: white;
    background-color:white;
    overflow-x:hidden;
    height:fit-content;
  }

 
  body,
  input,
  textarea,
  button {
    font: 500 1.3rem 'Source Sans 3', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  
  ul{
    list-style:none;
  }

  img {
    width: 100%;
    max-width: 100%;
  }

`