import React from 'react'
import IconeCalendario from '../../assets/icons/modificacoes/IconeCalendario'
import IconePesquisa from '../../assets/icons/modificacoes/IconePesquisa'
import IconeLike from '../../assets/icons/modificacoes/IconeLike'
import { Servicosstyle } from './servicos'

export function Servicos() {
  return (
    < Servicosstyle>
    <div className='servicos'>
        <div className="especialistas">
            <div className="chamada">
               <div className="icone">
                < IconePesquisa />
                </div> 
                <div className="titulo">
                    <h5>Encontre especialistas</h5>
                </div>
            </div>
            <div className="texto">
                <p> Busque por especialistas de saúde em sua região.</p>
            </div>
        </div>

        <div className="consultas">
            <div className="chamada">
               <div className="icone">
                < IconeCalendario />
                </div> 
                <div className="titulo">
                <h5>Marque consultas</h5>
                </div>
            </div>
            <div className="texto">
                <p> Escolha o profissional, dia e horário que desejar. </p>
            </div>
        </div>
        
        <div className="avaliacoes">
            <div className="chamada">
               <div className="icone">
                < IconeLike />
                </div> 
                <div className="titulo">
                <h5>Avalie o serviço</h5>
                </div>
            </div>
            <div className="texto">
                <p>Após a consulta você pode deixar sua opinião.</p>
            </div>
        </div>
    </div>
    </Servicosstyle>
  )
}

