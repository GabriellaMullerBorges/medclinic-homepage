import React from 'react';
import doctors from '../../assets/icons/doctors.svg'
import { Chamadastyle } from './chamada';

export function Chamada() {
  return (
   <Chamadastyle>
      <div className='chamadadiv'>
         <div className="chamadatexto">
            <h1>Agende agora sua consulta</h1>
            <h3>Mais de 700 mil especialistas de saúde estão prontos para te ajudar</h3>
         </div>
        <img src={doctors} alt="Desenho de médicos" className="doctors" />
     </div>
   </Chamadastyle>  
  )
}

