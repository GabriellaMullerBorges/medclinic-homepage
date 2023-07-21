import React from 'react'
import { Footerstyle } from './footer'
import IconeDNA from "../../assets/icons/modificacoes/IconeDNA";

export function Footer() {
  return (
    <Footerstyle>
  <footer>
    <div className="row footerrow">
        <div className="col colsimbolodiv">
            <div className="simbolo-div">
                <div className="row rowsimbolo">
                    <div className="col col-6 d-flex align-items-center justify-content-center">
                        <div className="simbolo">
                            <IconeDNA />
                        </div>
                    </div>
                    <div className="col col-6 d-flex align-items-center justify-content-center colcodedby">
                        <a href="https://github.com/GabriellaMullerBorges" className="link" target="_blank"> 
                        <p className='codedbyme'>Coded by GMB</p>
                        <i className="bx bx-link-external"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="endereco">
                <a href="https://www.linkedin.com/in/gabriella-borges-a01b77249/" className="link" target="_blank"> 
                    <p className='portoalegre'>Porto Alegre/RS</p>
                    <i className="bx bx-link-external"></i>
                </a>
            </div>
        </div>
        <div className="col">
            <div className="contato">
                <a href="mailto:gabimullerborges@gmail.com" target="_blank">
                    <i className="bx bx-link-external"></i>	
                    <p className='faletexto'>Fale Conosco</p>    
                </a>
            </div>
        </div>
    </div>
</footer>

    </Footerstyle> 
    )
}
 

