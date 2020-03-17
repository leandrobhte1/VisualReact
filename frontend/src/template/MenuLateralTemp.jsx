import React from 'react'

import { Button, Header, Icon, Modal } from 'semantic-ui-react'

import ModalBT from './modal'
import ModalBTInput from './modalInput'

export default props => (
    
    <div className="actionsList">
        <ul className="menuList">
            <li className="menuListItem"><button className="menuButton">Próxima senha</button></li>
            <div className="ui divider"></div>
            <li className="menuListItem"><a href="#/atenderSenha"><button className="menuButton">Inicia atendimento</button></a></li>
            <div className="ui divider"></div>
            <li className="menuListItem"><ModalBTInput name="Senha Específica" titulo="Digite a senha desejada abaixo!" placeholder="Digite a senha desejada aqui" ></ModalBTInput></li>
            <div className="ui divider"></div>
            <li className="menuListItem"><button className="menuButton">Senhas na fila</button></li>
            <div className="ui divider"></div>
            <li className="menuListItem"><button className="menuButton">Descongelar senha</button></li>
            <div className="ui divider"></div>
            <li className="menuListItem"><button className="menuButton">Filtro prioridade</button></li>
            <div className="ui divider"></div>
            <li className="menuListItem"><button className="menuButton">Exclui atividade</button></li>
            <div className="ui divider"></div>
            <li className="menuListItem"><button className="menuButton">Filtro categoria</button></li>
            <div className="ui divider"></div>
            <li className="menuListItem"><button className="menuButton">Filtro atividade</button></li>
            <div className="ui divider"></div>
            <li className="menuListItem"><button className="menuButton">Cancela senha</button></li>
        </ul>
    </div>

)