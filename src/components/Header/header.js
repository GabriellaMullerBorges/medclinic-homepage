import styled from "styled-components";

export const ContainerHeader = styled.header`
 
  width: 100%;
  background: #66CDAA;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
   

  .div-botao {
    display:none;
  }

  .navdiminuida {
    display: flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
    gap: 2rem;
   

    &:last-child {
      gap: 1rem;
    }

    > img {
      width: 230px;

      @media(max-width: 500px) {
        width: 100%;
      }
    }

    > nav {
      display: flex;
      flex-direction:row;
      justify-content:flex-end;
      align-items:center;
      gap: 1rem;
      margin-right:1em;
      width: 100%;

      a {
        font-size: 20px;
        position: relative;

        &:before {
          content: '';
          border-radius: 50px;
          bottom: 0px;
          position: absolute;
          width: 0%;
          height: 2px;
          background: white;
          transition: .3s;
        }

        &:hover {
          &:before {
            width: 100%;
          }
        }
      }
    }
    .mobile {
      display: none;
    }

    @media(max-width: 700px) {
      .mobile {
        display: flex;
        justify-self: flex-end;
      }
      > nav {
        display: none;
      }
    }
  }

  @media(max-width: 700px) {
    padding: 14.5px 16px;

    .div-botao {
    display:flex;
    }

    .div-botao:hover {
    cursor: pointer;
    }
  }
`;