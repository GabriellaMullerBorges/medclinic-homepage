import React, { useState } from 'react';
import { Pesquisastyle } from './pesquisa'
import IconeDoctor from '../../assets/icons/modificacoes/IconeDoctor';
import IconeNurse from '../../assets/icons/modificacoes/IconeNurse';



export function Pesquisa() {
    const [isActiveDoctor, setIsActiveDoctor] = useState(true); // Inicialmente ativo (padrão)
    const [isActiveNurse, setIsActiveNurse] = useState(false); // Inicialmente não ativo (padrão)
  
    const handleDoctorClick = () => {
      setIsActiveDoctor(true);
      setIsActiveNurse(false);
    };
  
    const handleNurseClick = () => {
      setIsActiveDoctor(false);
      setIsActiveNurse(true);
    };
  
    return (
      <Pesquisastyle>
        <div className='pesquisa' id='home'>
          <div className='botoes-pre'>
            <button
              className={isActiveDoctor ? 'active' : ''}
              onClick={handleDoctorClick}
            >
              <IconeDoctor isActive={isActiveDoctor} />
              Buscar Especialista
            </button>
            <button
              className={isActiveNurse ? 'active' : ''}
              onClick={handleNurseClick}
            >
              <IconeNurse isActive={isActiveNurse} />
              Pré-triagem online
            </button>
          </div>

        <form action="search" className="pesquisa-form">
            <label for="especialidades"> </label>
            <select id="especialidades" name="especialidades" aria-label='especialidades de médicos'>
                <option value="Especialidade">Especialidades</option>
                <option value="cardiologista">Cardiologista</option>
                <option value="psiquiatra">Psiquiatra</option>
                <option value="ortopedista">Ortopedista</option>
                <option value="dermatologista">Dermatologista</option>
                <option value="nao-sei">Não sei</option>
            </select>
            <label for="cidades"> </label>
            <select id="cidades" name="cidades" aria-label='cidades de atuação'>
              <option value="sao-paulo">Cidade</option>
                <option value="sao-paulo">São Paulo</option>
                <option value="rio-de-janeiro">Rio de Janeiro</option>
                <option value="porto-alegre">Porto Alegre</option>
                <option value="curitiba">Curitiba</option>
            </select>
                <input type="submit" value="Pesquisar"></input>
        </form>
    </div>
    </Pesquisastyle>
  )
}
