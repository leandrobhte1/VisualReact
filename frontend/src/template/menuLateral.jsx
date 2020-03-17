import React from 'react'

import { Button, Header, Icon, Modal } from 'semantic-ui-react'

import ModalBT from './modal'
import ModalBTInput from './modalInput'

export default props => (
    
    <div className="actionsList">
        <ul className="menuList">
        
            <li className="menuListItem"><a href="#/senha"><ModalBT name="Próxima senha" titulo="Já existe senha vinculada!" conteudo="Confirma chamada de outra senha?"></ModalBT></a></li>
            <div className="ui divider"></div>
            <li className="menuListItem"><ModalBTInput name="Senha Específica" titulo="Digite a senha desejada abaixo!" placeholder="Digite a senha desejada aqui" ></ModalBTInput></li>
            <div className="ui divider"></div>
            <li className="menuListItem"><a href="#/senhaCriar"><button className="menuButton">Criar senha</button></a></li>
            <div className="ui divider"></div>
            <li className="menuListItem"><button className="menuButton">Senhas na fila</button></li>
            <div className="ui divider"></div>
            <li className="menuListItem"><button className="menuButton">Cancelar senha</button></li>
        </ul>
    </div>

)