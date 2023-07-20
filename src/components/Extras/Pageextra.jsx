import React from 'react'
import { Extrastyle } from './extras'
import { Perfil } from './Perfis/Pageperfil'
import { Opinioes } from './Opinioes/Pageopinioes'

export function Extras () {
  return (
    < Extrastyle>
        <div>
            <Perfil></Perfil>
            <Opinioes></Opinioes>
        </div>
    </Extrastyle>
  )
}

