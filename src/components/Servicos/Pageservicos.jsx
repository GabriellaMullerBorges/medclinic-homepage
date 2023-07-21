import React from 'react'
import IconeCalendario from '../../assets/icons/modificacoes/IconeCalendario'
import IconePesquisa from '../../assets/icons/modificacoes/IconePesquisa'
import IconeLike from '../../assets/icons/modificacoes/IconeLike'
import { Servicosstyle } from './servicos'

export function Servicos() {
  return (
    < Servicosstyle>
    <section className='servicos' id='servicos'>

        <section className="especialistas">
            <div className="chamada">
               <div className="icone">
                < IconePesquisa />
                </div> 
                <div className="titulo" aria-labelledby="div englobando titulo da div especialistas">
                    <h3 className='tituloservico' aria-labelledby="titulo da div especialistas">
                        Encontre especialistas
                    </h3>
                </div>
            </div>
            <div className="texto" aria-labelledby="texto da div especialistas">
                <p> Busque por especialistas de saúde em sua região.</p>
            </div>
        </section> 

        <section className="consultas">
            <div className="chamada">
               <div className="icone">
                < IconeCalendario />
                </div> 
                <div className="titulo" aria-labelledby="div englobando titulo da div consultas">
                <h3 className='tituloservico'  aria-labelledby="titulo da div consultas">
                    Marque consultas
                    </h3>
                </div>
            </div>
            <div className="texto" aria-labelledby="texto da div consultas">
                <p> Escolha o profissional, dia e horário que desejar. </p>
            </div>
        </section>
        
        <section className="avaliacoes">
            <div className="chamada">
               <div className="icone">
                < IconeLike />
                </div> 
                <div className="titulo" aria-labelledby="div englobando titulo da div avaliacoes">
                <h3 className='tituloservico'  aria-labelledby="titulo da div avaliacoes">
                    Avalie o serviço
                    </h3>
                </div>
            </div>
            <div className="texto">
                <p>Após a consulta você pode deixar sua opinião.</p>
            </div>
        </section>

    </section>
    </Servicosstyle>
  )
}

