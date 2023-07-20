import React from 'react'
import { Opinioesstyle } from './opinioes'
import mulhercafe from '../../../assets/icons/profilepictures/MulherCafe.svg'
import homemcafe from '../../../assets/icons/profilepictures/HomemCafe.svg'
import { LiaStarSolid } from "react-icons/lia";

export function Opinioes() {
  return (
    <Opinioesstyle>
    <div className='opinioes'>
        <h4> Depoimentos </h4>
        <div className="cartoes">

            <div className='card'>
                <div className='avatar-div'>
                    <img src={mulhercafe} alt="" className='avatar' id='marcio'/>
                </div>
                <div className='info-div'>
                    <p className='nome'> Marcio Mendes Cristóvão</p>
                    <p className="cidade">Rio de Janeiro/RJ</p>
                    <p className="stars">
                        <LiaStarSolid></LiaStarSolid>
                        <LiaStarSolid></LiaStarSolid>
                        <LiaStarSolid></LiaStarSolid>
                        <LiaStarSolid></LiaStarSolid>
                        <LiaStarSolid></LiaStarSolid>
                    </p>
                    <p className="opinion">"Show de bola"</p>
                </div>
            </div>


            <div className='card'>
                <div className='avatar-div'>
                    <img src={homemcafe} alt="" className='avatar' id='mariana'/>
                </div>
                <div className='info-div'>
                    <p className='nome'> Mariana Leal Silva</p>
                    <p className="cidade">Porto Alegre/RS</p>
                    <p className="stars">
                    <LiaStarSolid></LiaStarSolid>
                    <LiaStarSolid></LiaStarSolid>
                    <LiaStarSolid></LiaStarSolid>
                    <LiaStarSolid></LiaStarSolid>
                    </p>
                    <p className="opinion"> "Muito legal!"</p>
                </div>
            </div>

            <div className='card'>
                <div className='avatar-div'>
                    <img src={homemcafe} alt="" className='avatar' id='isabela'/>
                </div>
                <div className='info-div'>
                    <p className='nome'> Isabela Couto de Castro</p>
                    <p className="cidade"> Curitiba/PR </p>
                    <p className="stars">
                    <LiaStarSolid></LiaStarSolid>
                    <LiaStarSolid></LiaStarSolid>
                    <LiaStarSolid></LiaStarSolid>
                    <LiaStarSolid></LiaStarSolid>
                    <LiaStarSolid></LiaStarSolid>
                    </p>
                    <p className="opinion"> "Excelente"</p>
                </div>
            </div>
      
        </div>

    </div>
    </Opinioesstyle>
  )
}

