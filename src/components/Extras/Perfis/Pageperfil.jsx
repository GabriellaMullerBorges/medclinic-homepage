import React from 'react'
import { Perfilstyle } from './perfil'
import homemavatar from '../../../assets/icons/profilepictures/HomemAvatar.svg';
import mulheravatar from '../../../assets/icons/profilepictures/MulherAvatar.svg';
import profilehomem from '../../../assets/icons/profilepictures/ProfileHomem.svg';
import profilemulher from '../../../assets/icons/profilepictures/ProfileMulher.svg';


export function Perfil() {
  return (
    <Perfilstyle>
    <div className='perfis'>
        <h4> Profissionais do MedClinic </h4>
        <div className="cartoes">

        <div className='card'>
            <div className='avatar-div'>
                <img src={profilehomem} alt="" className='avatar'/>
            </div>
            <div className='info-div'>
                <p className='nome'> Dra. Carla Pires Rezende</p>
                <p className="cidade">Rio de Janeiro/RJ</p>
                <p className="especialidade">Ortopedista</p>
            </div>
        </div>


        <div className='card'>
            <div className='avatar-div'>
                <img src={homemavatar} alt="" className='avatar'/>
            </div>
            <div className='info-div'>
                <p className='nome'> Dr. Pedro Neves Silva</p>
                <p className="cidade">Porto Alegre/RS</p>
                <p className="especialidade">Cardiologista</p>
            </div>
        </div>
        <div className='card'>
            <div className='avatar-div'>
                <img src={mulheravatar} alt="" className='avatar'/>
            </div>
            <div className='info-div'>
                <p className='nome'> Dra. Adriana Morais Souza</p>
                <p className="cidade">Curitiba/PR</p>
                <p className="especialidade">Psiquiatra</p>
            </div>
        </div>

        <div className='card'>
            <div className='avatar-div'>
                <img src={profilehomem} alt="" className='avatar'/>
            </div>
            <div className='info-div'>
                <p className='nome'> Dra. Marina Oliveira Pedroso</p>
                <p className="cidade">Rio de Janeiro/RJ</p>
                <p className="especialidade">Ortopedista</p>
            </div>
        </div>

        <div className='card'>
            <div className='avatar-div'>
                <img src={profilemulher} alt="" className='avatar'/>
            </div>
            <div className='info-div'>
                <p className='nome'> Dr. Sérgio Silveira Conrado</p>
                <p className="cidade">São Paulo/SP</p>
                <p className="especialidade">Dermatologista</p>
            </div>
        </div>
        </div>

    </div>
    </Perfilstyle>
  )
}

