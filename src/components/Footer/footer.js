import styled from "styled-components";


export const Footerstyle = styled.div`

    background:#56A890;
    width: 100%;
    position: sticky;
    bottom: 0;
    margin:0;
    z-index: 0;
    width: 100%;

footer{   
    font-size: 12px;
    color: white;
    margin:0;
}

.simbolo {
  padding: 1rem;
  font-size: 12px;
}

.simbolo-div{
    font-size:14px;
}

.endereco, .contato {
  font-size: 15px;
  height:100%;
 display:flex;
 justify-content:center;
 align-items:center;
}

.codedbyme, .portoalegre, .faletexto{
    height: 100%;
    margin:0;
}

@media (min-width:1000px) {
    position:fixed;

    .footerrow {
        display:flex;
        justify-content:space-between;
        align-items:center;
    }

    .colsimbolodiv {
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .rowsimbolo {
        display:flex;
        align-items:center;
        justify-content:center;
    }


    .codedbyme {
        min-width:100px;
    }


}
`