import React from 'react';
import doctors from '../../assets/icons/doctors.svg'
import { Chamadastyle } from './chamada';
import { Pesquisa } from './PagePesquisa';

export function Chamada() {
  return (
   <Chamadastyle>
      <div className='chamadadiv'>
         <div className="chamadatexto">
            <h1>Agende agora sua consulta</h1>
            <h3>Nossos especialistas de saúde estão prontos para te ajudar</h3>
         </div>
     <img src={doctors} alt="Desenho de médicos" className="doctors" />
      <Pesquisa></Pesquisa>  
     </div>
   </Chamadastyle>  
  )
}

